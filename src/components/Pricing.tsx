import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from './icons';
import './Pricing.css';

interface Plan {
  id: string;
  name: string;
  jp: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  variant: 'free' | 'pro';
  badge?: string;
  available: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    jp: '無料',
    price: '$0',
    cadence: 'forever',
    description: 'The full learning core. Kana, kanji, grammar, vocabulary, JLPT mock tests and smart review.',
    features: [
      'Full JLPT N5 → N1 curriculum',
      'Adaptive spaced repetition',
      '2,000+ kanji with stroke order',
      'Timed JLPT mock tests',
      'Natural-voice audio',
      'Offline-first, on-device',
      'No account required',
    ],
    cta: 'Start learning',
    href: '#download',
    variant: 'free',
    available: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    jp: 'プロ',
    price: 'TBA',
    cadence: 'coming soon',
    description: 'Optional upgrades for people who want to sync across devices and unlock quality-of-life extras.',
    features: [
      'Cloud sync across iOS, Android, macOS, Windows',
      'Premium themes and dark-mode variants',
      'Advanced analytics & weak-spot deep dives',
      'Early access to new content packs',
      'Support the development of the app',
    ],
    cta: 'Notify me',
    href: '#notify',
    variant: 'pro',
    badge: 'Later in 2026',
    available: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <header className="pricing__head">
          <span className="eyebrow">Pricing</span>
          <h2 className="pricing__title">The learning is free. Convenience is optional.</h2>
          <p className="pricing__lead">
            Everything you need to go from your first あ to passing N1 is in the free tier. A Pro
            tier will arrive later for people who want cloud sync and quality-of-life extras — the
            core curriculum stays free for everyone.
          </p>
        </header>

        <div className="pricing__grid">
          {PLANS.map((p, i) => (
            <motion.article
              key={p.id}
              className={`plan plan--${p.variant}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              {p.badge && <span className="plan__badge mono">{p.badge}</span>}

              <div className="plan__head">
                <div className="plan__name-row">
                  <h3 className="plan__name">{p.name}</h3>
                  <span className="jp plan__jp">{p.jp}</span>
                </div>
                <div className="plan__price">
                  <span className="plan__price-value">{p.price}</span>
                  <span className="plan__price-cadence">{p.cadence}</span>
                </div>
                <p className="plan__desc">{p.description}</p>
              </div>

              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="plan__check" aria-hidden>
                      <CheckIcon size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className={`btn ${p.variant === 'free' ? 'btn-primary' : ''} plan__cta`}
                aria-disabled={!p.available}
              >
                {p.cta}
                <ArrowRightIcon size={16} />
              </a>

              <p className="plan__foot mono">
                {p.variant === 'free'
                  ? 'No credit card · no trial clock'
                  : 'Opt-in. Free tier stays free.'}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
