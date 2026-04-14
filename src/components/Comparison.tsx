import React from 'react';
import { CheckIcon } from './icons';
import './Comparison.css';

interface Row {
  label: string;
  nm: 'yes' | 'partial' | 'no';
  duo: 'yes' | 'partial' | 'no';
  wk: 'yes' | 'partial' | 'no';
  anki: 'yes' | 'partial' | 'no';
  note?: string;
}

const ROWS: Row[] = [
  {
    label: 'Built specifically for Japanese',
    nm: 'yes',
    duo: 'no',
    wk: 'yes',
    anki: 'no',
    note: 'Kana + kanji rules treated as first-class, not a language pack.',
  },
  {
    label: 'Full JLPT curriculum (N5 → N1)',
    nm: 'yes',
    duo: 'partial',
    wk: 'partial',
    anki: 'no',
  },
  {
    label: 'Timed JLPT mock tests',
    nm: 'yes',
    duo: 'no',
    wk: 'no',
    anki: 'no',
  },
  {
    label: 'Adaptive spaced repetition',
    nm: 'yes',
    duo: 'partial',
    wk: 'yes',
    anki: 'yes',
  },
  {
    label: 'Stroke-order writing practice',
    nm: 'yes',
    duo: 'no',
    wk: 'no',
    anki: 'partial',
  },
  {
    label: 'High-quality Japanese voice audio',
    nm: 'yes',
    duo: 'yes',
    wk: 'yes',
    anki: 'partial',
  },
  {
    label: 'Works fully offline',
    nm: 'yes',
    duo: 'no',
    wk: 'no',
    anki: 'yes',
  },
  {
    label: 'No forced sign-in to start',
    nm: 'yes',
    duo: 'no',
    wk: 'no',
    anki: 'yes',
  },
  {
    label: 'No ads, no guilt-trip streaks',
    nm: 'yes',
    duo: 'no',
    wk: 'yes',
    anki: 'yes',
  },
];

export const Comparison: React.FC = () => {
  return (
    <section id="vs" className="vs">
      <div className="container">
        <header className="vs__head">
          <span className="eyebrow">Why Nihongo Master</span>
          <h2 className="vs__title">Honest comparison. No vibes-based marketing.</h2>
          <p className="vs__lead">
            Every learning app has trade-offs. Here's where we focus — and where other tools
            already do great work you shouldn't give up.
          </p>
        </header>

        <div className="vs__table-wrap">
          <table className="vs__table">
            <thead>
              <tr>
                <th scope="col" className="vs__th-feat">Feature</th>
                <th scope="col" className="vs__th vs__th--us">Nihongo Master</th>
                <th scope="col" className="vs__th">Duolingo</th>
                <th scope="col" className="vs__th">WaniKani</th>
                <th scope="col" className="vs__th">Anki</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="vs__row-label">
                    {row.label}
                    {row.note && <span className="vs__note mono">{row.note}</span>}
                  </th>
                  <td className="vs__cell vs__cell--us">
                    <Cell state={row.nm} />
                  </td>
                  <td className="vs__cell">
                    <Cell state={row.duo} />
                  </td>
                  <td className="vs__cell">
                    <Cell state={row.wk} />
                  </td>
                  <td className="vs__cell">
                    <Cell state={row.anki} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="vs__disclaimer mono">
          Competitors are great tools for different needs. This table reflects our read as of
          2026-04 based on public product pages — YMMV.
        </p>
      </div>
    </section>
  );
};

const Cell: React.FC<{ state: 'yes' | 'partial' | 'no' }> = ({ state }) => {
  if (state === 'yes') {
    return (
      <span className="vs__state vs__state--yes" aria-label="Yes">
        <CheckIcon size={16} />
      </span>
    );
  }
  if (state === 'partial') {
    return (
      <span className="vs__state vs__state--partial" aria-label="Partial">
        ~
      </span>
    );
  }
  return (
    <span className="vs__state vs__state--no" aria-label="No">
      —
    </span>
  );
};
