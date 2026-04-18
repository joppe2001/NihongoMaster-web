import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from './icons';
import type { ThemeMode } from '../hooks/useTheme';
import './Nav.css';

interface NavProps {
  mode: ThemeMode;
  onToggleTheme: () => void;
  /** On legal pages we hide section anchors and show a Back link instead. */
  minimal?: boolean;
}

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#vs', label: 'vs Others' },
  { href: '#sources', label: 'Sources' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const Nav: React.FC<NavProps> = ({ mode, onToggleTheme, minimal = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 18, stiffness: 140 }}
    >
      <div className="container site-nav__inner">
        <a href="#top" className="site-nav__brand" aria-label="Nihongo Master home">
          <span className="site-nav__kanji jp">日本語</span>
          <span className="site-nav__wordmark">Master</span>
        </a>

        <nav className="site-nav__links" aria-label="Primary">
          {minimal ? (
            <a href="#top" className="site-nav__link">
              ← Back to home
            </a>
          ) : (
            links.map((l) => (
              <a key={l.href} href={l.href} className="site-nav__link">
                {l.label}
              </a>
            ))
          )}
        </nav>

        <div className="site-nav__actions">
          <button
            type="button"
            className="btn btn-icon site-nav__theme-toggle"
            onClick={onToggleTheme}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={mode === 'dark'}
          >
            {mode === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <a href="#download" className="btn btn-primary site-nav__cta">
            Get the app
          </a>
          <button
            type="button"
            className="btn btn-icon site-nav__hamburger"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden>{mobileOpen ? '✕' : '≡'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="site-nav__mobile">
          {minimal ? (
            <a
              href="#top"
              className="site-nav__link site-nav__link--mobile"
              onClick={() => setMobileOpen(false)}
            >
              ← Back to home
            </a>
          ) : (
            links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="site-nav__link site-nav__link--mobile"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))
          )}
          <a
            href="#download"
            className="btn btn-primary"
            onClick={() => setMobileOpen(false)}
          >
            Get the app
          </a>
        </div>
      )}
    </motion.header>
  );
};
