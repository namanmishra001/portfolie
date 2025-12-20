import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 border-b border-slate-800 pb-12">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Let's build scalable systems.</h2>
                    <p className="text-slate-400 text-lg max-w-md">
                        Open to leadership roles in Distributed Systems, Cloud Architecture, and Backend Engineering.
                    </p>
                </div>
                <div className="flex gap-4 md:justify-end">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a href={SOCIAL_LINKS.email} className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium border border-slate-700 hover:bg-slate-700 transition-colors">
                        <Mail className="w-4 h-4" />
                        Email Me
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <p>© {new Date().getFullYear()} Naman Mishra. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Resume</a>
                    <a href={SOCIAL_LINKS.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
                    <a href={SOCIAL_LINKS.github} className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;