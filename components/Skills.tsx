import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Cloud, Network, Database } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "AI & Modern Engineering": Code2,
  "Backend Core": Server,
  "Cloud & DevOps": Cloud,
  "Distributed Systems": Network,
  "Frontend": Database, // Using generic icon
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
            Technical Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive toolkit covering the full spectrum of modern distributed backend engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => {
            const Icon = categoryIcons[category.category] || Code2;
            // Span 2 columns for the first item to vary the layout if desired, or keep uniform
            const isWide = idx === 0 || idx === 1; 

            return (
              <div 
                key={category.category} 
                className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 reveal-on-scroll ${idx % 2 === 0 ? 'stagger-1' : 'stagger-2'} ${isWide ? 'md:col-span-1' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;