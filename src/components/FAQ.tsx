import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faq } from '../data/faq';
import './FAQ.css';

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <header className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="faq__title">Real questions. Plain answers.</h2>
        </header>

        <ul className="faq__list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq__trigger"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="faq__q">{item.q}</span>
                  <span className="faq__plus" aria-hidden>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      className="faq__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
