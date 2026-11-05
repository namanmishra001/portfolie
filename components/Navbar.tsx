import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sections = ['about', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      
      const scrollPosition = window.scrollY + 140;
      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Persistent Transparent Backdrop-Blur Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md backdrop-saturate-150 border-b border-gray-200/80 shadow-xs py-2.5 sm:py-3' 
            : 'bg-white/60 backdrop-blur-sm border-b border-gray-200/40 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Personal Brand */}
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
                NM
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-display font-bold tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                  Naman Mishra
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  UST @ RBC · Toronto
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Centered Jump Links */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-gray-100/80 border border-gray-200/70 shadow-2xs">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white text-gray-900 shadow-xs font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action Trigger: Direct Contact */}
            <div className="hidden md:flex items-center gap-2">
              <a 
                href={SOCIAL_LINKS.phone}
                className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1.5"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-xs hover:shadow-sm active:scale-[0.98] flex items-center gap-1"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-2">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xs"
              >
                Contact
              </a>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="min-h-[40px] min-w-[40px] flex items-center justify-center text-gray-700 hover:text-gray-900 rounded-lg bg-white/80 border border-gray-200/80 shadow-2xs"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop Blur */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/90 shadow-xl p-4 sm:p-5 flex flex-col gap-1.5 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 px-3 py-1 font-semibold">
            Jump to Section
          </div>
          
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`min-h-[44px] text-sm font-medium p-3 rounded-xl flex items-center justify-between transition-colors ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </a>
            );
          })}

          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a 
              href={SOCIAL_LINKS.phone}
              className="min-h-[44px] flex items-center justify-center gap-2 bg-gray-50 text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-200 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </a>

            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="min-h-[44px] flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;