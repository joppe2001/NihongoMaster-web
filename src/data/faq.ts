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
    q: 'Where does the Japanese content come from? Is it AI-generated?',
    a: 'No — the core Japanese content is sourced from the same openly-licensed datasets that power professional dictionaries and native-speaker tools. Word definitions and readings come from JMdict, kanji data from KANJIDIC2 (both maintained by the Electronic Dictionary Research and Development Group in Japan), native-written example sentences from the Tatoeba Project, and precise furigana alignment from JmdictFurigana. Pronunciation uses VOICEVOX, a Japanese voice synthesis project used by native creators. Full attribution is built into the app under Settings → Credits.',
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
  {
    q: 'What if I find something wrong in a lesson?',
    a: "Tell us. The curriculum is hand-crafted by a tiny team and ships new content every week — which means some translations, example sentences and explanations will be imperfect, out of date, or occasionally wrong. If you spot something off, email joppe.montezinos@gmail.com or open an issue on GitHub. Real corrections go into the next build. In the meantime, when something matters (exam prep, formal writing, a job interview), cross-reference with a textbook or a native speaker. Don't trust a single app — cross-referencing is a good habit regardless.",
  },
];
