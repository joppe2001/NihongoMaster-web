import { useEffect, useState } from 'react';

export type Route = 'home' | 'privacy' | 'terms';

function hashToRoute(): Route {
  if (typeof window === 'undefined') return 'home';
  const h = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (h === 'privacy') return 'privacy';
  if (h === 'terms') return 'terms';
  return 'home';
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(hashToRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(hashToRoute());
      // When navigating to a different page, reset scroll to top.
      if (
        window.location.hash === '#/privacy' ||
        window.location.hash === '#/terms' ||
        window.location.hash === '#top'
      ) {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}
