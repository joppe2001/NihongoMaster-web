import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './HowItWorks.css';

interface Step {
  num: string;
  title: string;
  jp: string;
  body: string;
  render: () => React.ReactNode;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Tell us where you are',
    jp: 'はじめ',
    body:
      'Start at zero or skip kana you already know. A gentle diagnostic places you on the curriculum so you never sit through what you already have.',
    render: () => (
      <div className="how-mock how-mock--placement">
        <div className="how-mock__badge">Placement</div>
        <div className="how-mock__levels">
          {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl, i) => (
            <div
              key={lvl}
              className={`how-mock__level ${i <= 1 ? 'how-mock__level--done' : ''} ${
                i === 2 ? 'how-mock__level--here' : ''
              }`}
            >
              {lvl}
            </div>
          ))}
        </div>
        <div className="how-mock__caption mono">You are here</div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Follow the Journey',
    jp: 'たび',
    body:
      'Short, focused lessons drip in new characters, vocabulary and grammar in the order they actually teach each other. Checkpoints make sure nothing slips.',
    render: () => (
      <div className="how-mock how-mock--journey">
        <ol className="how-mock__path">
          {[
            { jp: 'あ', label: 'Hiragana row' },
            { jp: '字', label: 'First 10 kanji' },
            { jp: '文', label: 'Grammar: です / ます' },
            { jp: '試', label: 'Checkpoint' },
          ].map((s, i) => (
            <li key={s.jp} className={`how-mock__step ${i < 2 ? 'how-mock__step--done' : ''}`}>
              <span className="jp how-mock__step-jp">{s.jp}</span>
              <span className="how-mock__step-label">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Let the app remember for you',
    jp: '復習',
    body:
      'Smart review resurfaces shaky items before they disappear. Mock tests calibrate you against real JLPT pacing. No streak-shame, no guilt engine.',
    render: () => (
      <div className="how-mock how-mock--review">
        <div className="how-mock__review-row">
          <span className="jp how-mock__rev-kana">山</span>
          <span className="how-mock__rev-meta">yama · mountain</span>
          <span className="how-mock__rev-status how-mock__rev-status--due">Due</span>
        </div>
        <div className="how-mock__review-row">
          <span className="jp how-mock__rev-kana">川</span>
          <span className="how-mock__rev-meta">kawa · river</span>
          <span className="how-mock__rev-status how-mock__rev-status--fresh">Fresh</span>
        </div>
        <div className="how-mock__review-row">
          <span className="jp how-mock__rev-kana">雨</span>
          <span className="how-mock__rev-meta">ame · rain</span>
          <span className="how-mock__rev-status how-mock__rev-status--tricky">Tricky</span>
        </div>
      </div>
    ),
  },
];

export const HowItWorks: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="how" className="how">
      <div className="container">
        <header className="how__head">
          <span className="eyebrow">How it works</span>
          <h2 className="how__title">Three moves. Then you're reading Japanese.</h2>
        </header>

        <div className="how__grid">
          <ol className="how__list">
            {STEPS.map((s, i) => (
              <li key={s.num}>
                <button
                  type="button"
                  className={`how__step ${i === active ? 'how__step--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="how__step-num mono">{s.num}</span>
                  <span className="how__step-body">
                    <span className="how__step-title">{s.title}</span>
                    <span className="how__step-jp jp">{s.jp}</span>
                    <span className="how__step-desc">{s.body}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="how__preview" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="how__preview-card"
              >
                {step.render()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
