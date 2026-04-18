import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { Comparison } from './components/Comparison';
import { NativeSources } from './components/NativeSources';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { HonestNote } from './components/HonestNote';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { useTheme } from './hooks/useTheme';
import { useHashRoute } from './hooks/useHashRoute';
import { useDocumentHead } from './hooks/useDocumentHead';

export const App: React.FC = () => {
  const { mode, toggle } = useTheme();
  const route = useHashRoute();
  useDocumentHead(route);

  return (
    <>
      <Nav mode={mode} onToggleTheme={toggle} minimal={route !== 'home'} />
      {route === 'home' && (
        <main>
          <Hero />
          <InteractiveDemo />
          <FeatureGrid />
          <HowItWorks />
          <Comparison />
          <NativeSources />
          <Pricing />
          <FAQ />
          <HonestNote />
        </main>
      )}
      {route === 'privacy' && <LegalPage slug="privacy" />}
      {route === 'terms' && <LegalPage slug="terms" />}
      <Footer />
    </>
  );
};
