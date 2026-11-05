import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Zap,
  Server
} from 'lucide-react';

const statusColors: Record<string, string> = {
  "ust-rbc": "text-emerald-600 bg-emerald-50 border-emerald-200/80",
  "ust-albertsons": "text-blue-600 bg-blue-50 border-blue-200/80",
  "boeing": "text-sky-600 bg-sky-50 border-sky-200/80",
  "virtusa": "text-indigo-600 bg-indigo-50 border-indigo-200/80",
};

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress strictly through the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 75%"]
  });

  // Smooth spring physics for fluid progress bar movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative z-20 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200/80 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0071e3] text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Architecture & Engineering Timeline</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-gray-900"
          >
            Career Experience & Systems Impact
          </motion.h2>
          
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            Chronological engineering track record across enterprise online-banking, real-time airline avionics, and high-throughput Kafka streaming pipelines.
          </p>
        </div>

        {/* Timeline Container with Dynamic Animated Progress Line */}
        <div ref={timelineRef} className="relative ml-3 sm:ml-8 md:ml-12 space-y-12 sm:space-y-16">
          
          {/* Static Background Vertical Track */}
          <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-gray-200 rounded-full" />

          {/* Dynamic Scroll-Driven Animated Progress Bar */}
          <motion.div 
            style={{ 
              scaleY, 
              transformOrigin: 'top' 
            }}
            className="absolute left-0 top-3 bottom-3 w-[3px] bg-gradient-to-b from-[#0071e3] via-blue-500 to-indigo-600 rounded-full shadow-xs z-0"
          />

          {EXPERIENCE.map((exp, index) => {
            const statusColor = statusColors[exp.id] || "text-[#0071e3] bg-blue-50 border-blue-200";

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6 sm:pl-10 md:pl-12"
              >
                {/* Timeline Indicator Node with Step Counter */}
                <div className="absolute -left-[11px] top-6 w-[25px] h-[25px] rounded-full bg-white border-2 border-[#0071e3] shadow-xs flex items-center justify-center z-10 ring-4 ring-white">
                  <span className="text-[10px] font-mono font-bold text-[#0071e3]">
                    0{index + 1}
                  </span>
                </div>

                {/* Tech-Savvy Experience Card */}
                <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group">
                  
                  {/* System Architecture Console Header */}
                  <div className="bg-white/80 border-b border-gray-200/80 px-5 sm:px-7 py-3 flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold tracking-tight text-gray-800 uppercase">
                        {exp.systemName || "Enterprise System"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500">
                      <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                      <span className="font-semibold text-gray-700">{exp.period}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 md:p-8">
                    
                    {/* Primary Role & Client Context */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-display">
                            {exp.role}
                          </h3>
                          {exp.client && (
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0071e3] border border-blue-200/60 font-sans">
                              {exp.client}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-gray-600 flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-gray-400" />
                          <span>{exp.company}</span>
                          {exp.architectureType && (
                            <>
                              <span className="text-gray-300">·</span>
                              <span className="text-xs font-mono text-gray-500 font-medium">
                                {exp.architectureType}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Key Technical Highlights / Metrics Chips */}
                    {exp.keyMetrics && exp.keyMetrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-2.5 rounded-xl bg-white border border-gray-200/70 shadow-2xs">
                        {exp.keyMetrics.map((metric, mIdx) => (
                          <div 
                            key={mIdx}
                            className="flex items-center gap-1.5 px-2 py-1 text-[11px] sm:text-xs font-mono font-medium text-gray-700"
                          >
                            <Zap className="w-3 h-3 text-[#0071e3] shrink-0" />
                            <span className="truncate">{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Accomplishments */}
                    <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-sans">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-2.5 sm:gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Matrix Footer */}
                    <div className="pt-4 border-t border-gray-200/70 flex flex-wrap gap-1.5 sm:gap-2 items-center">
                      <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mr-1">
                        <Server className="w-3.5 h-3.5 text-gray-400" />
                        Stack:
                      </span>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-gray-800 bg-white border border-gray-200/90 rounded-lg shadow-2xs hover:border-[#0071e3]/50 hover:bg-blue-50/40 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;