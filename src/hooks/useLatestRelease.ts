import { useEffect, useState } from 'react';

export interface ReleaseAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

export interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  assets: ReleaseAsset[];
}

interface State {
  loading: boolean;
  error: string | null;
  release: GitHubRelease | null;
}

const CACHE_KEY = 'nm-latest-release';
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

interface CachedEntry {
  at: number;
  release: GitHubRelease;
}

function readCache(): GitHubRelease | null {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CachedEntry = JSON.parse(raw);
    if (Date.now() - parsed.at > CACHE_TTL_MS) return null;
    return parsed.release;
  } catch {
    return null;
  }
}

function writeCache(release: GitHubRelease): void {
  try {
    const entry: CachedEntry = { at: Date.now(), release };
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // ignore
  }
}

export function useLatestRelease(owner: string, repo: string): State {
  const [state, setState] = useState<State>(() => {
    const cached = typeof window !== 'undefined' ? readCache() : null;
    return { loading: cached === null, error: null, release: cached };
  });

  useEffect(() => {
    let cancelled = false;
    const cached = readCache();
    if (cached) return;

    fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json();
      })
      .then((data: GitHubRelease) => {
        if (cancelled) return;
        writeCache(data);
        setState({ loading: false, error: null, release: data });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState({ loading: false, error: String(err), release: null });
      });

    return () => {
      cancelled = true;
    };
  }, [owner, repo]);

  return state;
}

/**
 * Return the first asset whose name matches any of the given patterns.
 * Patterns are evaluated in order — put your preferred naming first.
 */
export function findAsset(
  release: GitHubRelease | null,
  patterns: RegExp[]
): ReleaseAsset | null {
  if (!release) return null;
  for (const pattern of patterns) {
    const match = release.assets.find((a) => pattern.test(a.name));
    if (match) return match;
  }
  return null;
}
