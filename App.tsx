import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ProblemSolution } from './components/ProblemSolution';
import { Services } from './components/Services';
import { StepProcess } from './components/StepProcess';
import { ProjectGallery } from './components/ProjectGallery';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

type PageState = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');

  const navigateTo = (page: PageState) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header sempre visível */}
      <Header onNavigate={navigateTo} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <PainPoints />
            <ProblemSolution />
            <Services />
            <StepProcess />
            <ProjectGallery />
            <WhyUs />
            <Testimonials />
            <ContactForm />
            <FloatingWhatsApp />
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}

        {currentPage === 'terms' && (
          <TermsOfUse onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;