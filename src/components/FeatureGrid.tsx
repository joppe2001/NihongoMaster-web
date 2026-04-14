import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { features, type Feature } from '../data/features';
import './FeatureGrid.css';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <header className="features__head">
          <span className="eyebrow">What's inside</span>
          <h2 className="features__title">
            Everything you actually need to learn Japanese — in one place.
          </h2>
          <p className="features__lead">
            Not a flashcard deck. Not a gamified drill machine. A real curriculum backed by
            real tools, designed around how Japanese is actually written, spoken and tested.
          </p>
        </header>

        <div className="features__grid">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature; delay: number }> = ({ feature, delay }) => {
  const prefersReduced = useReducedMotion();
  const Icon = feature.icon;
  return (
    <motion.article
      className={`feature feature--${feature.color} feature--${feature.span ?? 'normal'}`}
      initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="feature__top">
        <div className="feature__icon" aria-hidden>
          <Icon size={22} />
        </div>
        <span className="jp feature__jp" aria-hidden>
          {feature.jp}
        </span>
      </div>
      <div className="feature__body">
        <h3 className="feature__title">{feature.title}</h3>
        <p className="feature__tag mono">{feature.tagline}</p>
        <p className="feature__desc">{feature.description}</p>
      </div>
      {feature.tier === 'pro-later' && <span className="feature__pro-badge">Pro · later</span>}
    </motion.article>
  );
};
