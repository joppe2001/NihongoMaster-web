import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from './icons';
import { LEGAL_DOCS } from '../data/legal';
import './LegalPage.css';

interface LegalPageProps {
  slug: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ slug }) => {
  const doc = LEGAL_DOCS[slug];
  const otherSlug = slug === 'privacy' ? 'terms' : 'privacy';
  const other = LEGAL_DOCS[otherSlug];

  return (
    <main className="legal">
      <div className="diag-stripes" aria-hidden />
      <div className="container legal__inner">
        <motion.div
          className="legal__head"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a href="#top" className="legal__back mono">
            ← Back to home
          </a>
          <span className="eyebrow legal__eyebrow">{doc.eyebrow}</span>
          <h1 className="legal__title">{doc.title}</h1>
          <p className="legal__subtitle">{doc.subtitle}</p>
          <div className="legal__meta mono">Last updated · {doc.updated}</div>
        </motion.div>

        <motion.section
          className="legal__summary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          aria-label="The short version"
        >
          <header className="legal__summary-head">
            <span className="mono">The short version</span>
          </header>
          <ul>
            {doc.summary.map((line, i) => (
              <li key={i}>
                <span className="legal__bullet" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </motion.section>

        <div className="legal__body">
          {doc.sections.map((section, i) => (
            <motion.section
              key={section.heading}
              className="legal__section"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              <h2 className="legal__section-title">
                <span className="legal__section-num mono">{String(i + 1).padStart(2, '0')}</span>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="legal__p">
                  {p}
                </p>
              ))}
            </motion.section>
          ))}
        </div>

        <motion.div
          className="legal__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <a href={`#/${other.id}`} className="btn">
            Read our {other.eyebrow.toLowerCase()} next
            <ArrowRightIcon size={16} />
          </a>
          <a href="#top" className="btn btn-ghost">
            Back to home
          </a>
        </motion.div>
      </div>
    </main>
  );
};
