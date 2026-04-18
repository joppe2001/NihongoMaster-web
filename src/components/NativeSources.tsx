import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from './icons';
import { nativeSources, type NativeSource } from '../data/sources';
import './NativeSources.css';

export const NativeSources: React.FC = () => {
  return (
    <section id="sources" className="sources" aria-labelledby="sources-title">
      <div className="container">
        <header className="sources__head">
          <span className="eyebrow">Native content · 本物</span>
          <h2 id="sources-title" className="sources__title">
            Real Japanese. From real Japanese sources.
          </h2>
          <p className="sources__lead">
            We don't invent vocabulary or hallucinate example sentences. Every word, kanji,
            reading and sentence in Nihongo Master comes from community-maintained,
            openly-licensed datasets used by professional dictionaries and native speakers.
          </p>
        </header>

        <ul className="sources__grid" role="list">
          {nativeSources.map((src, i) => (
            <SourceCard key={src.id} source={src} delay={i * 0.05} />
          ))}
        </ul>

        <div className="sources__foot">
          <p className="sources__foot-line mono">
            Full attribution, contributor lists and license texts ship inside the app under
            Settings → Credits — exactly as each license requires.
          </p>
        </div>
      </div>
    </section>
  );
};

const SourceCard: React.FC<{ source: NativeSource; delay: number }> = ({ source, delay }) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.li
      className={`source source--${source.tone}`}
      initial={prefersReduced ? undefined : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="source__top">
        <span className="jp source__jp" aria-hidden>
          {source.jp}
        </span>
        <span className="source__license mono" title={`License: ${source.license}`}>
          {source.license}
        </span>
      </div>

      <div className="source__stat-row">
        <span className="source__stat">{source.stat}</span>
        <span className="source__stat-label mono">{source.statLabel}</span>
      </div>

      <h3 className="source__name">{source.name}</h3>
      <p className="source__role mono">{source.role}</p>
      <p className="source__desc">{source.description}</p>

      <div className="source__meta">
        <span className="source__maintainer">Maintained by {source.maintainer}</span>
      </div>

      <div className="source__links">
        <a
          href={source.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="source__link"
        >
          Visit source
          <ArrowRightIcon size={14} />
        </a>
        <a
          href={source.licenseUrl}
          target="_blank"
          rel="noreferrer"
          className="source__link source__link--sub"
        >
          License
        </a>
      </div>
    </motion.li>
  );
};
