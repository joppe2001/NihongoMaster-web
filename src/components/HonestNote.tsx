import React from 'react';
import { motion } from 'framer-motion';
import { DOWNLOADS } from '../config/downloads';
import './HonestNote.css';

export const HonestNote: React.FC = () => {
  const contactHref = DOWNLOADS.contactForm
    ? DOWNLOADS.contactForm
    : `mailto:${DOWNLOADS.androidWaitlistEmail}?subject=${encodeURIComponent(
        'Nihongo Master — content correction'
      )}`;

  return (
    <section id="errata" className="errata" aria-labelledby="errata-title">
      <div className="container">
        <motion.div
          className="errata__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="errata__badge mono">Still a work in progress</span>
          <h2 id="errata-title" className="errata__title">
            Found something off? Please tell us.
          </h2>
          <p className="errata__body">
            Nihongo Master is hand-crafted by a tiny team and ships new content almost every
            week. That means some lessons are richer than others, a few translations are
            imperfect, and — inevitably — a small number of them will simply be wrong. We'd
            rather be honest about that than pretend otherwise.
          </p>
          <p className="errata__body">
            If you spot a mistake, drop us a line. Real corrections go straight into the next
            release. In the meantime, whenever something <em>really</em> matters — exam prep,
            formal writing, a job interview — cross-reference with a textbook, a native
            speaker, or a reference dictionary. Don't rely on any single app for Japanese.
            That's just good study hygiene.
          </p>

          <div className="errata__actions">
            <a
              href={contactHref}
              target={DOWNLOADS.contactForm ? '_blank' : undefined}
              rel={DOWNLOADS.contactForm ? 'noreferrer' : undefined}
              className="btn btn-primary errata__cta"
            >
              Report a correction
            </a>
            <a
              href={`https://github.com/${DOWNLOADS.githubOwner}/${DOWNLOADS.githubRepo}/issues`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Open an issue on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
