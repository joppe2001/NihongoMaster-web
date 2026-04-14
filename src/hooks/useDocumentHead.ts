import { useEffect } from 'react';
import type { Route } from './useHashRoute';

interface HeadInfo {
  title: string;
  description: string;
}

const HEAD_BY_ROUTE: Record<Route, HeadInfo> = {
  home: {
    title: 'Nihongo Master — Learn Japanese, your way (N5 to N1)',
    description:
      'A guided, adaptive Japanese learning app for iOS, Android and desktop. Kana, kanji, grammar, vocabulary, JLPT mock tests and smart spaced repetition — offline-first, no account required.',
  },
  privacy: {
    title: 'Privacy Policy · Nihongo Master',
    description:
      'How Nihongo Master handles your data. Plain English: the free tier runs entirely on-device. No account, no ads, no trackers.',
  },
  terms: {
    title: 'Terms of Service · Nihongo Master',
    description:
      'The terms you agree to by using Nihongo Master. Fair, readable, and without hidden gotchas.',
  },
};

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function useDocumentHead(route: Route): void {
  useEffect(() => {
    const info = HEAD_BY_ROUTE[route];
    document.title = info.title;

    setMeta('meta[name="description"]', 'content', info.description);
    setMeta('meta[property="og:title"]', 'content', info.title);
    setMeta('meta[property="og:description"]', 'content', info.description);
    setMeta('meta[name="twitter:title"]', 'content', info.title);
    setMeta('meta[name="twitter:description"]', 'content', info.description);

    const canonicalHref =
      route === 'home'
        ? 'https://nihongomaster.org/'
        : `https://nihongomaster.org/#/${route}`;
    setMeta('link[rel="canonical"]', 'href', canonicalHref);
    setMeta('meta[property="og:url"]', 'content', canonicalHref);
  }, [route]);
}
