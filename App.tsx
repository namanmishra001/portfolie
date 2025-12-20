import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import TechMarquee from './components/TechMarquee';

// Use standard loading fallback
const Loading = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-sm font-medium">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      
      <main>
        <Suspense fallback={<Loading />}>
          <Hero />
          <TechMarquee />
          <Skills />
          <Experience />
          <Projects />
        </Suspense>
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

export default App;