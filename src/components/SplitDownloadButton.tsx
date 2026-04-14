import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SplitDownloadButton.css';

export interface ResolvedAlternative {
  label: string;
  sub: string;
  url: string;
  filename?: string;
}

interface SplitDownloadButtonProps {
  primaryLabel: string;
  primaryUrl: string;
  primaryFilename?: string;
  primaryNote: string;
  alternatives: ResolvedAlternative[];
  disabled?: boolean;
  className?: string;
}

export const SplitDownloadButton: React.FC<SplitDownloadButtonProps> = ({
  primaryLabel,
  primaryUrl,
  primaryFilename,
  primaryNote,
  alternatives,
  disabled = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={`splitdl ${className}`} ref={rootRef}>
      <div className={`splitdl__group ${disabled ? 'splitdl__group--disabled' : ''}`}>
        <a
          href={disabled ? undefined : primaryUrl}
          download={primaryFilename}
          className="splitdl__main"
          title={primaryNote}
          aria-disabled={disabled}
          onClick={(e) => {
            if (disabled) e.preventDefault();
          }}
        >
          {disabled ? 'Preparing download…' : primaryLabel}
        </a>
        <button
          type="button"
          className="splitdl__toggle"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Choose package format"
          onClick={() => setOpen((v) => !v)}
          disabled={disabled}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            aria-hidden
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 180ms ease',
            }}
          >
            <polyline
              points="3 5 7 9 11 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="splitdl__menu"
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {alternatives.map((opt) => (
              <li key={opt.url} role="none">
                <a
                  role="menuitem"
                  href={opt.url}
                  download={opt.filename}
                  className="splitdl__item"
                  onClick={() => setOpen(false)}
                >
                  <span className="splitdl__item-label">{opt.label}</span>
                  <span className="splitdl__item-sub mono">{opt.sub}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
