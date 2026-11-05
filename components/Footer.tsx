import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { Linkedin, Mail, Github, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-gray-700 py-16 sm:py-20 border-t border-gray-200/80 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start mb-12 sm:mb-16 border-b border-gray-200/80 pb-12 sm:pb-16">
                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0071e3] font-semibold mb-2 block">
                        Get In Touch
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                        Let's build secure, resilient systems.
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-lg max-w-lg mb-6 leading-relaxed">
                        Lead I – Software Engineering at UST Canada. Open to conversations on distributed banking systems, cloud architecture, and modern agentic engineering.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center gap-2 p-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200/80 shadow-xs">
                        <MapPin className="w-4 h-4 text-[#0071e3] shrink-0" />
                        <span>{CONTACT_INFO.location}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2.5 px-3.5 rounded-xl bg-gray-50 border border-gray-200/80 shadow-xs">
                        <GraduationCap className="w-4 h-4 text-[#0071e3] shrink-0" />
                        <span>{CONTACT_INFO.education}</span>
                      </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap md:justify-end items-stretch sm:items-center gap-3 w-full">
                    <a 
                      href={SOCIAL_LINKS.phone} 
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0071e3] text-white rounded-xl font-semibold hover:bg-[#0077ed] transition-all shadow-sm active:scale-[0.98] whitespace-nowrap shrink-0"
                    >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span className="whitespace-nowrap font-mono tracking-tight">{CONTACT_INFO.phone}</span>
                    </a>
                    <a 
                      href={SOCIAL_LINKS.email} 
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-50 text-gray-900 rounded-xl font-semibold border border-gray-200 hover:bg-gray-100 transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
                    >
                        <Mail className="w-4 h-4 text-[#0071e3] shrink-0" />
                        <span className="whitespace-nowrap">{CONTACT_INFO.email}</span>
                    </a>
                    <a 
                      href={SOCIAL_LINKS.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-50 text-gray-900 rounded-xl font-semibold border border-gray-200 hover:bg-gray-100 transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
                    >
                        <Linkedin className="w-4 h-4 text-[#0071e3] shrink-0" />
                        <span className="whitespace-nowrap">LinkedIn</span>
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                <p>© {new Date().getFullYear()} Naman Mishra. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                    <a href={SOCIAL_LINKS.phone} className="hover:text-gray-900 transition-colors">{CONTACT_INFO.phone}</a>
                    <a href={SOCIAL_LINKS.email} className="hover:text-gray-900 transition-colors">{CONTACT_INFO.email}</a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0071e3] transition-colors">LinkedIn</a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;