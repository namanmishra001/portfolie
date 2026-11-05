import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';
import { SkillCategory, SkillItem } from '../types';
import { 
  Code2, 
  Server, 
  Cloud, 
  Network, 
  Database, 
  Sparkles, 
  Activity, 
  Wrench,
  Star,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  "Core Backend & Architecture": Server,
  "AI & Modern Engineering": Sparkles,
  "Cloud & DevOps": Cloud,
  "Messaging & Distributed": Network,
  "Observability": Activity,
  "Databases": Database,
  "Frontend & Tools": Wrench,
};

type IndicatorStyle = 'progress' | 'stars';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>('progress');

  const filteredCategories = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(cat => cat.category === activeCategory);

  const getStarRating = (level: number): number => {
    if (level >= 94) return 5;
    if (level >= 88) return 4.5;
    if (level >= 80) return 4;
    return 3.5;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#f8f9fa] border-y border-gray-200/80 relative z-20 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-2 block">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Technical Expertise & Mastery
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Engineered over 8+ years across enterprise banking, real-time airline avionics, and high-throughput retail platforms.
          </p>
        </div>

        {/* Controls: Filter Tabs & Indicator Style Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          
          {/* Category Filter Horizontal Scroll Strip on Mobile */}
          <div className="flex items-center gap-1.5 p-1.5 bg-gray-100 rounded-xl border border-gray-200/80 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x">
            <button
              onClick={() => setActiveCategory('all')}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-white text-gray-900 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
            >
              All ({SKILLS.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {SKILLS.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.category
                    ? 'bg-white text-gray-900 shadow-xs font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Indicator Style Switcher (Progress Bar vs Star Ratings) */}
          <div className="flex items-center justify-center gap-1 p-1 bg-gray-100 rounded-xl border border-gray-200/80 shrink-0 self-center lg:self-auto">
            <button
              onClick={() => setIndicatorStyle('progress')}
              className={`min-h-[38px] flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                indicatorStyle === 'progress'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Progress Bars
            </button>
            <button
              onClick={() => setIndicatorStyle('stars')}
              className={`min-h-[38px] flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                indicatorStyle === 'stars'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              Star Ratings
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.category] || Code2;

              return (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-sm hover:border-gray-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-4 sm:mb-5 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                          <Icon className="w-4 h-4 sm:w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                            {category.category}
                          </h3>
                          <span className="text-[11px] sm:text-xs text-gray-500">
                            {category.items.length} skills tracked
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-3.5 sm:space-y-4">
                      {category.items.map((skill) => {
                        const stars = getStarRating(skill.level);

                        return (
                          <div key={skill.name} className="group">
                            {/* Skill Title & Metadata */}
                            <div className="flex items-baseline justify-between gap-2 mb-1 text-xs">
                              <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors line-clamp-1">
                                {skill.name}
                              </span>

                              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 tabular-nums shrink-0">
                                {skill.experience && (
                                  <span className="text-[10px] sm:text-[11px] text-gray-400 hidden sm:inline">
                                    {skill.experience}
                                  </span>
                                )}
                                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700">
                                  {skill.tier}
                                </span>
                                {indicatorStyle === 'progress' && (
                                  <span className="text-gray-700 font-mono text-[11px] sm:text-xs font-medium">
                                    {skill.level}%
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Indicator View: Progress Bar vs Star Rating */}
                            {indicatorStyle === 'progress' ? (
                              <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-200/60">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-full rounded-full bg-emerald-600 group-hover:bg-emerald-700 transition-all"
                                />
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 mt-0.5">
                                {[1, 2, 3, 4, 5].map((starIdx) => {
                                  const isFilled = starIdx <= Math.floor(stars);
                                  const isHalf = !isFilled && starIdx === Math.ceil(stars);

                                  return (
                                    <div key={starIdx} className="relative">
                                      <Star
                                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                                          isFilled
                                            ? 'text-amber-500 fill-amber-400'
                                            : isHalf
                                            ? 'text-amber-500 fill-amber-400/50'
                                            : 'text-gray-300'
                                        } transition-colors`}
                                      />
                                    </div>
                                  );
                                })}
                                <span className="text-[10px] sm:text-[11px] text-gray-500 font-mono ml-1.5">
                                  {stars.toFixed(1)} / 5.0
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer indicator */}
                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Production Deployed
                    </span>
                    <span className="font-mono">Enterprise Level</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;