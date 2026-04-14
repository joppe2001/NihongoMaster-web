export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'Is Nihongo Master free?',
    a: 'Yes — the core curriculum is free. Hiragana, katakana, kanji, vocabulary, grammar, the guided journey, smart review, and JLPT mock tests work without an account. A Pro tier with optional extras like cloud sync and premium themes is in the works.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. You can install the app and start studying immediately. You only create an account if you later opt into cloud sync across devices — and even then, your learning still works fully offline.',
  },
  {
    q: 'Which levels does it cover?',
    a: 'JLPT N5 through N1. Each level has dedicated vocabulary, grammar and kanji, plus mock tests that mirror the real exam format.',
  },
  {
    q: 'Where does my data live?',
    a: 'On your device. Progress, settings, and audio cache stay local. If you turn on cloud sync later, it is encrypted and opt-in — you can delete your account data from inside the app at any time.',
  },
  {
    q: 'How is this different from Anki or Duolingo?',
    a: 'Anki gives you flashcards but no curriculum. Duolingo gives you a curriculum but limited depth. Nihongo Master is built specifically for Japanese — it teaches kana and kanji properly, adapts to your gaps, and actually prepares you for the JLPT.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. Everything that matters for daily study — lessons, review, writing practice, and audio — is on-device after install. No connection needed to learn.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'iOS and Android are live today. Desktop (macOS, Windows, Linux) is in beta. One account eventually unlocks all of them.',
  },
  {
    q: 'Can I contribute or report issues?',
    a: 'Yes — a public changelog, release notes, and issue tracker are on GitHub. Bug reports and feature requests from learners shape the roadmap.',
  },
];
