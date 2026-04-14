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
    note: 'Anki is a general flashcard platform; Duolingo teaches 40+ languages.',
  },
  {
    label: 'Full JLPT curriculum (N5 → N1)',
    nm: 'yes',
    duo: 'no',
    wk: 'partial',
    anki: 'no',
    note: 'Duolingo Japanese reaches roughly N5. WaniKani covers kanji + vocab; no grammar, reading or listening track.',
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
    wk: 'no',
    anki: 'yes',
    note: 'WaniKani uses fixed intervals (4h → 4mo). Anki ships FSRS in-core since v23.10. Duolingo uses Half-Life Regression.',
  },
  {
    label: 'Stroke-order writing practice',
    nm: 'yes',
    duo: 'yes',
    wk: 'no',
    anki: 'no',
    note: 'Duolingo\u2019s guided trace is more polished. We cover more kanji + a free-draw canvas.',
  },
  {
    label: 'Native Japanese voice audio',
    nm: 'yes',
    duo: 'partial',
    wk: 'yes',
    anki: 'partial',
    note: 'WaniKani uses voice actors Kenichi & Kyoko. Anki has OS-level TTS; rich audio depends on shared decks.',
  },
  {
    label: 'Hand-crafted kanji mnemonics',
    nm: 'no',
    duo: 'no',
    wk: 'yes',
    anki: 'partial',
    note: 'WaniKani\u2019s Tofugu mnemonic stories are the gold standard. We give context, not stories \u2014 yet.',
  },
  {
    label: 'Free cross-device sync',
    nm: 'no',
    duo: 'yes',
    wk: 'yes',
    anki: 'yes',
    note: 'AnkiWeb is free. Duolingo & WaniKani sync via account. Ours arrives in the future Pro tier.',
  },
  {
    label: 'Works fully offline',
    nm: 'yes',
    duo: 'no',
    wk: 'no',
    anki: 'yes',
    note: 'Anki Desktop, AnkiDroid and AnkiMobile all work fully offline. AnkiWeb sync is optional.',
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
          Competitors are great tools for different needs. Verified against official docs &
          knowledge bases (Apr 2026). Notice an error? Open an issue on GitHub.
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
