import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from './icons';
import { DOWNLOADS } from '../config/downloads';
import './AndroidWaitlistModal.css';

interface AndroidWaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export const AndroidWaitlistModal: React.FC<AndroidWaitlistModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const hasForm = DOWNLOADS.androidWaitlistForm.length > 0;
  const primaryUrl = hasForm
    ? DOWNLOADS.androidWaitlistForm
    : `mailto:${DOWNLOADS.androidWaitlistEmail}?subject=${encodeURIComponent(
        'Nihongo Master — Android beta access'
      )}&body=${encodeURIComponent(
        "Hi! I'd like to join the Android closed test.\n\nName (optional):\nReason I'm interested (optional):\n\nThanks!"
      )}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="wl__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            className="wl__card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wl-title"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', damping: 18, stiffness: 180 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="wl__close"
              onClick={onClose}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <span className="eyebrow wl__eyebrow">Android · closed test</span>
            <h3 id="wl-title" className="wl__title">
              We're running a private beta.
            </h3>
            <p className="wl__body">
              The Android build is currently in closed testing on the Google Play Console. We
              add testers in small batches to keep feedback manageable. Leave your email and
              we'll invite you as soon as a slot opens.
            </p>

            <ul className="wl__list">
              <li>
                <span className="wl__bullet" />
                You'll get an email from Google Play with the install link
              </li>
              <li>
                <span className="wl__bullet" />
                Fully functional build — same curriculum, same SRS, same offline support
              </li>
              <li>
                <span className="wl__bullet" />
                We never share your email with anyone
              </li>
            </ul>

            <div className="wl__actions">
              <a
                href={primaryUrl}
                target={hasForm ? '_blank' : undefined}
                rel={hasForm ? 'noreferrer' : undefined}
                className="btn btn-primary wl__cta"
                onClick={onClose}
              >
                {hasForm ? 'Join the waitlist' : 'Email us to join'}
                <ArrowRightIcon size={16} />
              </a>
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                Not now
              </button>
            </div>

            <p className="mono wl__foot">
              Want iOS instead? It's live on the App Store.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
