export interface KanaPrompt {
  jp: string;
  answer: string;
  options: string[];
}

export const kanaDemo: KanaPrompt[] = [
  { jp: 'あ', answer: 'a', options: ['a', 'o', 'e', 'i'] },
  { jp: 'き', answer: 'ki', options: ['ki', 'ke', 'ku', 'ka'] },
  { jp: 'す', answer: 'su', options: ['su', 'tsu', 'shi', 'sa'] },
  { jp: 'ね', answer: 'ne', options: ['ne', 're', 'me', 'wa'] },
  { jp: 'ほ', answer: 'ho', options: ['ho', 'ha', 'ma', 'ke'] },
];
