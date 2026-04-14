import React, { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, SparkleIcon } from './icons';
import { kanaDemo } from '../data/kanaDemo';
import './InteractiveDemo.css';

type Phase = 'question' | 'correct' | 'wrong' | 'done';

export const InteractiveDemo: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ right: 0, wrong: 0 });

  const current = kanaDemo[index];

  const progress = useMemo(
    () => ((index + (phase !== 'question' ? 1 : 0)) / kanaDemo.length) * 100,
    [index, phase]
  );

  const answer = useCallback(
    (choice: string) => {
      if (phase !== 'question') return;
      setPicked(choice);
      if (choice === current.answer) {
        setScore((s) => ({ ...s, right: s.right + 1 }));
        setPhase('correct');
      } else {
        setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
        setPhase('wrong');
      }
    },
    [phase, current]
  );

  const next = useCallback(() => {
    if (index + 1 >= kanaDemo.length) {
      setPhase('done');
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    setPhase('question');
  }, [index]);

  const reset = useCallback(() => {
    setIndex(0);
    setPhase('question');
    setPicked(null);
    setScore({ right: 0, wrong: 0 });
  }, []);

  return (
    <section id="demo" className="demo">
      <div className="container demo__inner">
        <div className="demo__copy">
          <span className="eyebrow">Try it · no install needed</span>
          <h2 className="demo__title">
            Read your first <span className="jp demo__kana">ひらがな</span>.
          </h2>
          <p className="demo__lead">
            A tiny taste of how lessons work. Tap the matching romaji for each hiragana. Real
            lessons add stroke order, audio, mnemonics, and spaced repetition — all built around
            what you actually remember.
          </p>
          <ul className="demo__bullets">
            <li>
              <span className="demo__dot" /> Instant feedback on every answer
            </li>
            <li>
              <span className="demo__dot" /> Adaptive repetition of what slips
            </li>
            <li>
              <span className="demo__dot" /> No streaks shame — just signal
            </li>
          </ul>
        </div>

        <div className="demo__card-wrap">
          <div className="demo__card" role="region" aria-label="Interactive hiragana demo">
            <header className="demo__header">
              <span className="mono">HIRAGANA · ひらがな</span>
              <span className="demo__score">
                <span className="demo__score-right">{score.right}</span>
                <span className="demo__score-sep">/</span>
                <span className="demo__score-total">{kanaDemo.length}</span>
              </span>
            </header>

            <div className="demo__progress">
              <div className="demo__progress-track">
                <motion.div
                  className="demo__progress-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'spring', damping: 24, stiffness: 140 }}
                />
              </div>
            </div>

            {phase !== 'done' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`q-${index}`}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="demo__prompt"
                >
                  <div className="jp demo__big-kana" aria-live="polite">
                    {current.jp}
                  </div>
                  <div className="mono demo__prompt-meta">Tap the matching romaji</div>
                </motion.div>
              </AnimatePresence>
            )}

            {phase === 'done' && (
              <motion.div
                className="demo__done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 14 }}
              >
                <SparkleIcon size={36} />
                <div className="demo__done-title">That was the warm-up.</div>
                <div className="demo__done-sub">
                  You got {score.right}/{kanaDemo.length}. Real lessons drill weak spots and
                  build reading speed over the first week.
                </div>
                <button type="button" className="btn btn-primary" onClick={reset}>
                  Try again
                </button>
              </motion.div>
            )}

            {phase !== 'done' && (
              <div className="demo__options">
                {current.options.map((opt) => {
                  const isPicked = picked === opt;
                  const isCorrect = opt === current.answer;
                  const state =
                    phase === 'question'
                      ? 'idle'
                      : isPicked && isCorrect
                      ? 'right'
                      : isPicked && !isCorrect
                      ? 'wrong'
                      : !isPicked && isCorrect && phase === 'wrong'
                      ? 'hint'
                      : 'dim';
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`demo__option demo__option--${state}`}
                      onClick={() => answer(opt)}
                      disabled={phase !== 'question'}
                      aria-label={`Answer ${opt}`}
                    >
                      <span className="demo__option-text">{opt}</span>
                      {state === 'right' && <CheckIcon size={18} />}
                    </button>
                  );
                })}
              </div>
            )}

            {phase !== 'done' && (
              <footer className="demo__footer">
                <div className="demo__feedback" aria-live="polite">
                  {phase === 'correct' && (
                    <motion.span
                      className="demo__feedback demo__feedback--right"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckIcon size={18} />
                      Nice. `{current.jp}` = `{current.answer}`.
                    </motion.span>
                  )}
                  {phase === 'wrong' && (
                    <motion.span
                      className="demo__feedback demo__feedback--wrong"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Almost. `{current.jp}` is `{current.answer}` — we'll bring it back soon.
                    </motion.span>
                  )}
                  {phase === 'question' && (
                    <span className="demo__feedback demo__feedback--idle">
                      Take your time.
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className={`btn ${phase !== 'question' ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={next}
                  disabled={phase === 'question'}
                >
                  {index + 1 >= kanaDemo.length ? 'Finish' : 'Next'}
                  <ArrowRightIcon size={16} />
                </button>
              </footer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
