import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

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
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0071e3] font-semibold mb-2 block">
            Milestones & Technical Leadership
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-gray-900"
          >
            Career Experience
          </motion.h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Progressive 8+ year trajectory leading distributed banking systems, enterprise cloud architectures, and avionics platforms.
          </p>
        </div>

        {/* Timeline Container with Dynamic Animated Progress Line */}
        <div ref={timelineRef} className="relative ml-3 sm:ml-8 md:ml-12 space-y-10 sm:space-y-14">
          
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

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 sm:pl-10 md:pl-12"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[7.5px] top-6 w-[18px] h-[18px] rounded-full bg-white border-2 border-[#0071e3] shadow-xs flex items-center justify-center z-10 ring-4 ring-white">
                <div className="w-2 h-2 rounded-full bg-[#0071e3]" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#f8f9fa] hover:bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300">
                
                {/* Header row: Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-200/70">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-display">
                      {exp.company}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-[#0071e3] mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-mono text-gray-600 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  {exp.description.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2 shrink-0" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-gray-200/70 flex flex-wrap gap-1.5 sm:gap-2 items-center">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
                    Tech:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;