export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  id: 'privacy' | 'terms';
  title: string;
  subtitle: string;
  eyebrow: string;
  updated: string;
  summary: string[];
  sections: LegalSection[];
}

const APP = 'Nihongo Master';
const UPDATED = '2026-04-14';
const CONTACT_EMAIL = 'joppe.montezinos@gmail.com';

export const PRIVACY: LegalDoc = {
  id: 'privacy',
  eyebrow: 'Privacy',
  title: 'Your data stays yours.',
  subtitle: 'Plain-English privacy policy for Nihongo Master.',
  updated: UPDATED,
  summary: [
    `${APP} runs locally on your device — progress, streak, and audio cache live on-device, not on our servers.`,
    'No account is required to use the free tier. We don\u2019t track what you study.',
    'The only personal data we process is the bare minimum needed for optional features you explicitly turn on (e.g. cloud sync in Pro).',
  ],
  sections: [
    {
      heading: 'What we collect',
      paragraphs: [
        'If you use only the free, offline core of the app: we collect nothing. Your answers, review history, streak, and settings never leave your device.',
        'If you opt in to cloud sync (a future Pro feature): we store the minimum needed to sync your progress — an email address, a user ID, and an encrypted snapshot of your learning state. You can disable sync and delete your account from inside the app at any time.',
        'The app store platforms (Apple App Store, Google Play) may collect their own telemetry per their policies — we don\u2019t control that, and we don\u2019t see identifiable data from them.',
      ],
    },
    {
      heading: 'What we do NOT do',
      paragraphs: [
        'We don\u2019t sell your data. We don\u2019t run ads. We don\u2019t embed third-party trackers on the device.',
        'We don\u2019t read your content. Personal notes, custom decks, and settings never leave your device unless you explicitly sync them.',
        'We don\u2019t use your learning data to train AI models.',
      ],
    },
    {
      heading: 'Analytics & crash reports',
      paragraphs: [
        'The app ships with privacy-preserving crash reporting for mobile platforms. These reports contain anonymized device info (model, OS version) and a stack trace — no personal content, no learning data.',
        'You can turn crash reporting off in the app\u2019s settings.',
      ],
    },
    {
      heading: 'Audio & TTS',
      paragraphs: [
        'Voice synthesis (VOICEVOX) runs locally for desktop, and via an audio cache for mobile. Words you\u2019ve looked up are cached on-device to avoid re-downloading — nothing is sent back to us.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        `${APP} is intended for general audiences interested in learning Japanese. If you\u2019re a parent or guardian and believe we\u2019ve inadvertently collected data from a child under 13 (or 16 in the EEA), email us and we\u2019ll delete it.`,
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Because the free tier doesn\u2019t send data anywhere, there\u2019s nothing for us to export or delete on our side — uninstalling the app wipes all local data.',
        'If you opted into sync, you can request a data export or deletion at any time by emailing us. We\u2019ll respond within 30 days.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'We may update this policy as the product evolves (e.g. when cloud sync ships). Material changes will be announced in the app release notes. The "Updated" date above always reflects the latest version.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        `Questions, requests, corrections: ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  id: 'terms',
  eyebrow: 'Terms',
  title: 'Fair terms. No gotchas.',
  subtitle: 'Using Nihongo Master means you agree to these terms.',
  updated: UPDATED,
  summary: [
    'Use the app to learn Japanese. Don\u2019t abuse it, don\u2019t resell it, don\u2019t reverse-engineer the Pro layer.',
    'We provide the app as-is. Real effort goes in, but no guarantees it\u2019s free of bugs or suits every purpose.',
    'If you\u2019re on Pro, your subscription and refund rights follow the app store you purchased through.',
  ],
  sections: [
    {
      heading: 'Using the app',
      paragraphs: [
        `${APP} grants you a personal, non-transferable license to install and use the app on devices you own or control.`,
        'You agree not to: (a) redistribute paid content or the Pro tier; (b) reverse-engineer or tamper with license checks; (c) use the app to harass other users of any shared feature; (d) use it for anything unlawful in your jurisdiction.',
        'We may revoke access if these terms are violated, particularly for paid features.',
      ],
    },
    {
      heading: 'Content ownership',
      paragraphs: [
        'The curriculum, example sentences, UI designs, illustrations, and source code are owned by the developer unless otherwise noted. Japanese-language data (kanji, vocabulary, grammar forms) itself is not owned by anyone — our curation, explanations, and example sentences are.',
        'Open-source components used by the app are subject to their own licenses, listed in the app\u2019s credits screen.',
      ],
    },
    {
      heading: 'Pro subscription (future)',
      paragraphs: [
        'A Pro tier is planned. When available, subscription is handled by the Apple App Store, Google Play, or our desktop payment provider — pricing, billing, and refunds follow that platform\u2019s terms.',
        'Cancelling Pro ends access to Pro features at the end of the paid period. You keep everything in the free tier forever. Data synced via Pro stays accessible read-only for 90 days after cancellation so you can export it.',
      ],
    },
    {
      heading: 'Updates & availability',
      paragraphs: [
        'We ship updates regularly. Some updates may require a minimum OS version. We\u2019ll never force an update that removes learning progress already on your device.',
        'We may retire features that are rarely used or no longer maintainable; we\u2019ll give notice in the release notes when that happens.',
      ],
    },
    {
      heading: 'No warranty',
      paragraphs: [
        `${APP} is provided "as is" without warranty of any kind. We do our best to test, but language-learning progress is not a guaranteed outcome — the app is a tool, not a certification.`,
        'Passing the JLPT depends on your own study. We don\u2019t guarantee exam results.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'To the fullest extent permitted by law, the developer isn\u2019t liable for indirect, incidental, or consequential damages arising from use of the app. Direct liability is capped at the amount you paid for Pro in the last 12 months (which is $0 for the free tier — sorry).',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the Netherlands, where the developer is based. Disputes will first be resolved by good-faith contact at the address below; if that fails, the competent courts of the Netherlands have jurisdiction.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        `Questions about these terms: ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const LEGAL_DOCS: Record<'privacy' | 'terms', LegalDoc> = {
  privacy: PRIVACY,
  terms: TERMS,
};
