import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal-on-scroll border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
              Key Projects
            </h2>
            <p className="text-slate-600 max-w-xl">
              Delivering high-impact solutions for Safeway, Boeing, and BT.
            </p>
          </div>
          <div className="text-sm text-slate-500 font-medium">
             Focused on Scalability & Performance
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group bg-white border border-slate-200 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 reveal-on-scroll ${idx % 2 === 0 ? 'stagger-1' : 'stagger-2'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Client</span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">{project.client}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0" />
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-sm min-h-[60px]">
                {project.description}
              </p>

              <div className="space-y-4">
                 <div className="h-px bg-slate-100 w-full group-hover:bg-blue-50 transition-colors"></div>
                 <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                      <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md"
                      >
                      {tech}
                      </span>
                  ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;