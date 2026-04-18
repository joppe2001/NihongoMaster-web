import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, SparkleIcon } from './icons';
import { PhoneFrame } from './PhoneFrame';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="hero">
      <div className="diag-stripes" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.a
            href="#sources"
            className="hero__trust"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            aria-label="Learn where our Japanese content comes from"
          >
            <span className="hero__trust-seal" aria-hidden>
              <CheckIcon size={14} />
            </span>
            <span className="hero__trust-text">
              <span className="hero__trust-lead">
                Built on native Japanese sources
              </span>
              <span className="hero__trust-sub mono">
                JMdict · KANJIDIC2 · Tatoeba
              </span>
            </span>
            <span className="hero__trust-cta mono">
              See sources
              <ArrowRightIcon size={12} />
            </span>
          </motion.a>

          <motion.span
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            N5 → N1 · Built for Japanese
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="jp hero__kanji">日本語</span>
            <span className="hero__stamp">Master</span>
            <span className="hero__tail"> your way.</span>
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A guided, adaptive Japanese learning app built on the same openly-licensed
            dictionaries, sentence corpora and native voice models used by professional
            Japanese tools. Kana, kanji, grammar, vocabulary, listening, writing, and full
            JLPT prep. Offline-first. No account required.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#download" className="btn btn-primary">
              Start learning free
              <ArrowRightIcon size={18} />
            </a>
            <a href="#demo" className="btn btn-ghost">
              Try a quick demo
            </a>
          </motion.div>

          <motion.div
            className="hero__proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <div className="hero__proof-item">
              <span className="hero__proof-number">2,136</span>
              <span className="mono hero__proof-label">Kanji covered</span>
            </div>
            <div className="hero__proof-divider" aria-hidden />
            <div className="hero__proof-item">
              <span className="hero__proof-number">N5 — N1</span>
              <span className="mono hero__proof-label">JLPT levels</span>
            </div>
            <div className="hero__proof-divider" aria-hidden />
            <div className="hero__proof-item">
              <span className="hero__proof-number">100%</span>
              <span className="mono hero__proof-label">Offline core</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__mock"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <FloatingBadges />
          <PhoneFrame tone="accent">
            <HeroPhoneScreen />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingBadges: React.FC = () => {
  return (
    <>
      <motion.div
        className="hero__badge hero__badge--1"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SparkleIcon size={14} />
        <span>24-day streak</span>
      </motion.div>
      <motion.div
        className="hero__badge hero__badge--2"
        animate={{ y: [4, -6, 4] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="jp">新</span>
        <span>N3 grammar</span>
      </motion.div>
      <motion.div
        className="hero__badge hero__badge--3"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>+18 XP</span>
      </motion.div>
    </>
  );
};

const HeroPhoneScreen: React.FC = () => {
  return (
    <div className="hero-phone">
      <div className="hero-phone__head">
        <div className="mono hero-phone__meta">おかえり</div>
        <h3 className="hero-phone__greet">
          こんにちは,
          <br /> Joppe
        </h3>
      </div>

      <div className="hero-phone__streak">
        <div>
          <div className="mono hero-phone__streak-label">Streak</div>
          <div className="hero-phone__streak-value">24 days</div>
        </div>
        <div className="hero-phone__streak-icon jp">炎</div>
      </div>

      <div className="hero-phone__grid">
        <TileCard jp="あ" title="Hiragana" sub="ひらがな" color="var(--info)" />
        <TileCard jp="ア" title="Katakana" sub="カタカナ" color="var(--accent-2)" />
        <TileCard jp="字" title="Kanji" sub="漢字" color="var(--accent)" />
        <TileCard jp="道" title="Journey" sub="たび" color="var(--success)" active />
      </div>

      <div className="hero-phone__footer">
        <span className="pill">5 TO REVIEW</span>
        <span className="pill hero-phone__pill-green">N5 · 72%</span>
      </div>
    </div>
  );
};

const TileCard: React.FC<{
  jp: string;
  title: string;
  sub: string;
  color: string;
  active?: boolean;
}> = ({ jp, title, sub, color, active }) => (
  <div className={`hero-tile ${active ? 'hero-tile--active' : ''}`} style={{ background: color }}>
    <div className="jp hero-tile__jp">{jp}</div>
    <div>
      <div className="hero-tile__title">{title}</div>
      <div className="jp hero-tile__sub">{sub}</div>
    </div>
  </div>
);
