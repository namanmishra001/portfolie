import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem: React.FC<{ 
  exp: typeof EXPERIENCE[0]; 
  index: number; 
  isActive: boolean 
}> = ({ exp, index, isActive }) => {
  return (
    <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Date Marker - Professional side label */}
      <div className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
         <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-300 ${isActive ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
            {exp.period}
         </span>
      </div>

      {/* Center Line Dot */}
      <div 
        className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 mt-6 z-10 border-2 transition-all duration-300
          ${isActive 
            ? 'bg-primary border-white shadow-[0_0_0_4px_rgba(37,99,235,0.2)]' 
            : 'bg-white border-slate-300'
          }`}
      ></div>

      {/* Card Content */}
      <div className="ml-8 md:ml-0 md:w-1/2 group">
        <div 
          className={`bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 relative
            ${isActive 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-50 translate-y-8'
            }
          `}
        >
            {/* Mobile Date display */}
            <div className="md:hidden mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{exp.period}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{exp.role}</h3>
            <div className="flex items-center gap-2 mb-4 text-slate-600 font-medium">
                <Briefcase className="w-4 h-4" />
                <span>{exp.company}</span>
            </div>
            
            <ul className="space-y-2 mb-5">
                {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 group-hover:bg-primary transition-colors"></span>
                    {desc}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {exp.tech.map(t => (
                    <span key={t} className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-1 rounded hover:border-primary/30 transition-colors">
                    {t}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother visual updates linked to scroll
      requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Trigger point is around the middle of the screen
        const triggerPoint = windowHeight * 0.55; 
        
        // Calculate progress based on container position relative to viewport
        const currentProgress = triggerPoint - rect.top;
        setScrollProgress(Math.max(0, currentProgress));

        const items = containerRef.current.querySelectorAll('.experience-item-marker');
        const newActiveIndices: number[] = [];
        items.forEach((item, index) => {
          const itemRect = (item as HTMLElement).getBoundingClientRect();
          // Activate item when its top passes the trigger point
          if (itemRect.top < triggerPoint) {
              newActiveIndices.push(index);
          }
        });
        
        setActiveIndices(prev => {
          if (prev.length === newActiveIndices.length && prev.every((val, i) => val === newActiveIndices[i])) {
              return prev;
          }
          return newActiveIndices;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 bg-white relative border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A timeline of technical leadership and architectural contributions.
          </p>
        </div>

        <div ref={containerRef} className="relative space-y-12 pl-2 md:pl-0">
          {/* Static Background Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 transform md:-translate-x-1/2"></div>
          
          {/* Animated Foreground Line */}
          <div 
            className="absolute left-0 md:left-1/2 top-0 w-px bg-primary transform md:-translate-x-1/2 z-0"
            style={{ 
                height: `${scrollProgress}px`, 
                maxHeight: '100%',
                // Removed transition to eliminate jitter; the update is 1:1 with scroll
            }}
          ></div>

          {EXPERIENCE.map((exp, index) => (
             <div key={exp.id} className="experience-item-marker z-10 relative">
                 <ExperienceItem 
                    exp={exp} 
                    index={index} 
                    isActive={activeIndices.includes(index)} 
                 />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;