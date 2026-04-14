import type { ComponentType, SVGProps } from 'react';
import {
  BookOpenIcon,
  BoltIcon,
  BrainIcon,
  ChartIcon,
  LeafIcon,
  OfflineIcon,
  SpeakerIcon,
  TimerIcon,
  TrophyIcon,
  WriteIcon,
} from '../components/icons';

export interface Feature {
  id: string;
  title: string;
  jp: string;
  tagline: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  color: 'accent' | 'accent-2' | 'accent-3' | 'success' | 'info';
  tier: 'core' | 'pro-later';
  span?: 'wide' | 'tall' | 'normal';
}

export const features: Feature[] = [
  {
    id: 'journey',
    title: 'Guided Journey',
    jp: 'たび',
    tagline: 'A path from あ to N1',
    description:
      'A hand-crafted roadmap across five JLPT levels. Each checkpoint introduces characters, vocabulary, grammar, reading, and a mini-quiz — in the order they actually build on each other.',
    icon: BookOpenIcon,
    color: 'accent',
    tier: 'core',
    span: 'wide',
  },
  {
    id: 'srs',
    title: 'Smart review',
    jp: '復習',
    tagline: 'Adaptive spaced repetition',
    description:
      'A Thompson-Sampling recommender picks what to drill next and when. Tricky items resurface more often; mastered items wait patiently.',
    icon: BrainIcon,
    color: 'info',
    tier: 'core',
  },
  {
    id: 'kanji',
    title: 'Kanji, deeply',
    jp: '漢字',
    tagline: '2,000+ kanji with stroke order',
    description:
      'Every N5–N1 kanji with readings, meaning, stroke animation, compound words, and a writing pad you can practice on.',
    icon: WriteIcon,
    color: 'accent-3',
    tier: 'core',
    span: 'tall',
  },
  {
    id: 'mock-tests',
    title: 'JLPT mock tests',
    jp: '模擬試験',
    tagline: 'Timed, section-accurate',
    description:
      'Full-length practice for N5 through N1 — vocabulary, grammar, reading, and listening — with a continue-after-each-question flow that mirrors the real exam.',
    icon: TimerIcon,
    color: 'accent-2',
    tier: 'core',
  },
  {
    id: 'sentence',
    title: 'Sentence generator',
    jp: '作文',
    tagline: 'Example sentences from your own deck',
    description:
      'Instead of canned example sentences, the app composes them from vocabulary and grammar you\u2019ve actually learned — so every sentence is readable for you today.',
    icon: BoltIcon,
    color: 'success',
    tier: 'core',
  },
  {
    id: 'voice',
    title: 'AI voices',
    jp: '音声',
    tagline: 'Natural Japanese pronunciation',
    description:
      'High-quality VOICEVOX voices read every vocabulary item and example sentence — so your ear learns alongside your eyes.',
    icon: SpeakerIcon,
    color: 'accent',
    tier: 'core',
  },
  {
    id: 'writing',
    title: 'Stroke order practice',
    jp: '書き順',
    tagline: 'Draw it. Get feedback.',
    description:
      'Trace kana and kanji at your own pace with a guided stroke-order canvas. The muscle memory is the point.',
    icon: WriteIcon,
    color: 'accent-3',
    tier: 'core',
  },
  {
    id: 'progress',
    title: 'Honest progress',
    jp: '進歩',
    tagline: 'Heatmap, goals, weak items',
    description:
      'See what you\u2019ve touched, what\u2019s slipping, and what\u2019s coming up. No fake streaks — just real signal about what to study next.',
    icon: ChartIcon,
    color: 'info',
    tier: 'core',
  },
  {
    id: 'garden',
    title: 'Your garden',
    jp: '庭',
    tagline: 'A quiet place to reflect',
    description:
      'A calm visualization of your consistency. Plants grow as you show up. No rewards to grind, no loot boxes.',
    icon: LeafIcon,
    color: 'success',
    tier: 'core',
  },
  {
    id: 'offline',
    title: 'Works offline',
    jp: 'オフライン',
    tagline: 'On a plane, on the subway',
    description:
      'Content, progress, and audio live on your device. No account needed to start. Your data stays yours.',
    icon: OfflineIcon,
    color: 'accent-2',
    tier: 'core',
  },
  {
    id: 'cloud',
    title: 'Cloud sync',
    jp: 'シンク',
    tagline: 'Coming to Pro',
    description:
      'Keep your progress in step across iPhone, Android, Mac and Windows. Opt-in, encrypted, and off by default.',
    icon: TrophyIcon,
    color: 'accent-3',
    tier: 'pro-later',
  },
];
