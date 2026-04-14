import { useEffect, useState } from 'react';

export type OS = 'macos' | 'windows' | 'linux' | 'ios' | 'android' | 'unknown';

function detectOS(): OS {
  if (typeof navigator === 'undefined') return 'unknown';

  // Debug override: append ?forceOS=linux (or macos/windows/ios/android) for QA.
  if (typeof window !== 'undefined') {
    const forced = new URLSearchParams(window.location.search).get('forceOS');
    if (
      forced === 'macos' ||
      forced === 'windows' ||
      forced === 'linux' ||
      forced === 'ios' ||
      forced === 'android'
    ) {
      return forced;
    }
  }

  const ua = navigator.userAgent;
  const platform = navigator.platform || '';

  const isIPadOS =
    platform === 'MacIntel' &&
    typeof navigator.maxTouchPoints === 'number' &&
    navigator.maxTouchPoints > 1;

  if (/iPhone|iPod/.test(ua) || isIPadOS) return 'ios';
  if (/iPad/.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  if (/Win/i.test(platform) || /Windows/i.test(ua)) return 'windows';
  if (/Mac/i.test(platform)) return 'macos';
  if (/Linux|X11/i.test(platform) || /Linux/i.test(ua)) return 'linux';
  return 'unknown';
}

export function useOS(): OS {
  const [os, setOs] = useState<OS>('unknown');
  useEffect(() => {
    setOs(detectOS());
  }, []);
  return os;
}

export interface DesktopAssetOption {
  label: string;
  sub: string;
  /** Regex patterns to match the release asset filename. First match wins. */
  patterns: RegExp[];
}

export interface DesktopAssetDescriptor {
  label: string;
  note: string;
  /** Patterns for the primary download button. */
  primaryPatterns: RegExp[];
  /** Optional secondary options shown in a dropdown. */
  alternatives?: DesktopAssetOption[];
}

/**
 * Describes which release assets match each OS. Filenames in the
 * joppe2001/NihongoMaster releases follow the Tauri bundler convention with
 * a version in the middle:
 *   NihongoMaster_0.3.8_universal.dmg
 *   NihongoMaster_0.3.8_x64_en-US.msi
 *   NihongoMaster_0.3.8_x64-setup.exe
 *   NihongoMaster_0.3.8_amd64.AppImage
 *   NihongoMaster_0.3.8_amd64.deb
 *   NihongoMaster_0.3.8_amd64.flatpak
 *   NihongoMaster-0.3.8-1.x86_64.rpm
 *
 * We match by suffix patterns so version bumps don't break anything.
 */
export function desktopAssetForOS(os: OS): DesktopAssetDescriptor | null {
  switch (os) {
    case 'macos':
      return {
        label: 'Download for macOS',
        note: 'Universal .dmg · Apple Silicon + Intel',
        primaryPatterns: [/universal\.dmg$/i, /\.dmg$/i],
      };
    case 'windows':
      return {
        label: 'Download for Windows',
        note: '.msi installer · 64-bit',
        primaryPatterns: [/x64_en-US\.msi$/i, /\.msi$/i, /setup\.exe$/i],
        alternatives: [
          {
            label: '.msi installer',
            sub: 'Preferred · Windows 10/11 · 64-bit',
            patterns: [/x64_en-US\.msi$/i, /\.msi$/i],
          },
          {
            label: '.exe installer',
            sub: 'Alternative · classic setup wizard',
            patterns: [/setup\.exe$/i, /\.exe$/i],
          },
        ],
      };
    case 'linux':
      return {
        label: 'Download for Linux',
        note: '.AppImage · works on most distros',
        primaryPatterns: [/amd64\.AppImage$/i, /\.AppImage$/i],
        alternatives: [
          {
            label: '.AppImage',
            sub: 'Universal · no install, just run',
            patterns: [/amd64\.AppImage$/i, /\.AppImage$/i],
          },
          {
            label: '.deb',
            sub: 'Debian · Ubuntu · Pop!_OS',
            patterns: [/amd64\.deb$/i, /\.deb$/i],
          },
          {
            label: '.rpm',
            sub: 'Fedora · openSUSE · RHEL',
            patterns: [/x86_64\.rpm$/i, /\.rpm$/i],
          },
          {
            label: '.flatpak',
            sub: 'Any distro via Flathub · incl. Arch',
            patterns: [/amd64\.flatpak$/i, /\.flatpak$/i],
          },
        ],
      };
    default:
      return null;
  }
}
