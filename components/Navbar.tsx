import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`text-xl font-display font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Naman<span className="text-primary"> Mishra</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 mr-4 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                {NAV_ITEMS.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all"
                >
                    {item.label}
                </a>
                ))}
            </div>
            <a 
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 flex flex-col gap-2">
             {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 p-3 rounded-lg flex items-center gap-3"
              >
                <item.icon className="w-5 h-5 text-slate-400" />
                {item.label}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-center text-white font-semibold px-5 py-3 rounded-lg mt-2"
            >
              Contact Me
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;