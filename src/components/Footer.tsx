import React, { useMemo } from 'react';
import { ArrowRightIcon } from './icons';
import { DOWNLOADS, githubLatestPage, githubReleasesBase } from '../config/downloads';
import {
  desktopAssetForOS,
  useOS,
  type DesktopAssetOption,
} from '../hooks/useOS';
import { findAsset, useLatestRelease } from '../hooks/useLatestRelease';
import { SplitDownloadButton, type ResolvedAlternative } from './SplitDownloadButton';
import './Footer.css';

export const Footer: React.FC = () => {
  const os = useOS();
  const { release, loading } = useLatestRelease(
    DOWNLOADS.githubOwner,
    DOWNLOADS.githubRepo
  );

  const desktop = desktopAssetForOS(os === 'ios' || os === 'android' ? 'unknown' : os);

  const resolvedPrimary = useMemo(() => {
    if (!desktop) return null;
    const asset = findAsset(release, desktop.primaryPatterns);
    return asset ? { url: asset.browser_download_url, filename: asset.name } : null;
  }, [desktop, release]);

  const resolvedAlternatives = useMemo<ResolvedAlternative[]>(() => {
    if (!desktop?.alternatives) return [];
    const out: ResolvedAlternative[] = [];
    for (const alt of desktop.alternatives as DesktopAssetOption[]) {
      const asset = findAsset(release, alt.patterns);
      if (!asset) continue;
      out.push({
        label: alt.label,
        sub: alt.sub,
        url: asset.browser_download_url,
        filename: asset.name,
      });
    }
    return out;
  }, [desktop, release]);

  const desktopLabel = desktop ? desktop.label : 'Desktop (beta)';
  const desktopHref = resolvedPrimary?.url ?? (desktop ? githubLatestPage() : githubLatestPage());
  const desktopNote = desktop ? desktop.note : 'Pick an installer from GitHub releases';
  const desktopFilename = resolvedPrimary?.filename;

  const showSplit =
    !!desktop && resolvedAlternatives.length > 1;

  return (
    <>
      <footer id="download" className="ft">
        <div className="container">
          <div className="ft__cta">
            <h2 className="ft__cta-title">
              Start today. <span className="jp">はじめよう</span>
            </h2>
            <p className="ft__cta-sub">
              Install Nihongo Master and run your first lesson in under a minute. Everything
              you need for the next several years of Japanese study is already in the free
              tier.
            </p>
            <div className="ft__buttons">
              <a
                href={DOWNLOADS.ios}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Download for iOS
                <ArrowRightIcon size={16} />
              </a>
              <a
                href={DOWNLOADS.android}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Download for Android
                <ArrowRightIcon size={16} />
              </a>
              {showSplit ? (
                <SplitDownloadButton
                  primaryLabel={desktopLabel}
                  primaryUrl={desktopHref}
                  primaryFilename={desktopFilename}
                  primaryNote={desktopNote}
                  alternatives={resolvedAlternatives}
                  disabled={loading && !resolvedPrimary}
                />
              ) : (
                <a
                  href={desktopHref}
                  download={desktopFilename}
                  target={resolvedPrimary ? undefined : '_blank'}
                  rel={resolvedPrimary ? undefined : 'noreferrer'}
                  className="btn btn-ghost"
                  title={desktopNote}
                >
                  {loading && !resolvedPrimary ? 'Preparing download…' : desktopLabel}
                </a>
              )}
            </div>
            <p className="ft__cta-note mono">
              iOS on the App Store · Android on Google Play · Desktop builds on GitHub
              Releases
            </p>
          </div>

          <div className="ft__grid">
            <div className="ft__brand">
              <div className="ft__brand-row">
                <span className="jp ft__brand-kanji">日本語</span>
                <span className="ft__brand-stamp">Master</span>
              </div>
              <p className="ft__brand-tag">Learn Japanese. Your way.</p>
            </div>

            <div className="ft__col">
              <h4 className="ft__col-title mono">Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how">How it works</a></li>
                <li><a href="#vs">vs Others</a></li>
                <li><a href="#sources">Sources</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="ft__col">
              <h4 className="ft__col-title mono">Resources</h4>
              <ul>
                <li>
                  <a href={githubReleasesBase()} target="_blank" rel="noreferrer">
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    href={`https://github.com/${DOWNLOADS.githubOwner}/${DOWNLOADS.githubRepo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="ft__col">
              <h4 className="ft__col-title mono">Legal</h4>
              <ul>
                <li><a href="#/privacy">Privacy</a></li>
                <li><a href="#/terms">Terms</a></li>
                <li>
                  {DOWNLOADS.contactForm ? (
                    <a href={DOWNLOADS.contactForm} target="_blank" rel="noreferrer">
                      Contact
                    </a>
                  ) : (
                    <a
                      href={`mailto:${DOWNLOADS.androidWaitlistEmail}?subject=${encodeURIComponent(
                        'Nihongo Master — contact'
                      )}`}
                    >
                      Contact
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="ft__bar">
            <span className="mono">
              © 2026 Nihongo Master · Made with ♥ in 日本語
              {release?.tag_name && ` · ${release.tag_name}`}
            </span>
            <span className="mono">
              {release?.published_at
                ? `Updated ${new Date(release.published_at).toISOString().slice(0, 10)}`
                : 'v0.3.8'}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
