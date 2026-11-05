import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import { Skills } from './components/Skills';
import Footer from './components/Footer';
import TechMarquee from './components/TechMarquee';

const Loading = () => (
  <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
      <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm font-medium">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#1d1d1f] selection:bg-emerald-600 selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      
      <main>
        <Suspense fallback={<Loading />}>
          <Hero />
          <TechMarquee />
          <Experience />
          <Skills />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;