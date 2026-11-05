import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Building2, 
  Landmark, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Phone, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#f8f9fa] to-white border-b border-gray-200/80 scroll-mt-20">
      {/* Subtle ambient architectural grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Gentle soft ambient glow in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-100/40 via-teal-100/30 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Intro & Key Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Single, authoritative Title Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-semibold mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lead I – Software Engineering</span>
            </div>

            {/* Main Headline with Fresh Emerald Gradient */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight leading-[1.12] mb-5">
              Architecting secure, high-throughput{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                distributed systems
              </span>{' '}
              & online-banking solutions.
            </h1>

            {/* Professional Overview */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-7">
              Over <strong className="text-gray-900 font-semibold">8+ years of experience</strong> building enterprise-scale backends using <span className="text-gray-900 font-medium">Java 21, Spring Boot, microservices, and Apache Kafka</span>. Currently delivering high-impact online-banking APIs, Vault credential security, and autonomous <span className="text-gray-900 font-medium">Agentic AI engineering workflows</span>.
            </p>

            {/* Key Engagement & Education Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-2xl mb-8">
              {/* Current Company */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Current Company</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">UST</div>
              </div>

              {/* Current Client */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                  <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Current Client</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">RBC (Banking)</div>
              </div>

              {/* Current Work Location */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Work Location</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">Toronto, Canada</div>
              </div>

              {/* Education Details */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Education</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900" title="Masters in Computer Applications">
                  MCA (Masters)
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#experience"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>View Career Experience</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#skills"
                className="min-h-[48px] px-5 py-3 rounded-xl bg-white hover:bg-emerald-50/50 text-gray-800 hover:text-emerald-700 font-semibold text-sm border border-gray-200/90 hover:border-emerald-300 shadow-xs transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Cpu className="w-4 h-4 text-emerald-600" />
                <span>Explore Skills</span>
              </a>

              <a
                href={SOCIAL_LINKS.phone}
                className="min-h-[48px] px-4 py-3 rounded-xl bg-white hover:bg-emerald-50/50 text-gray-700 hover:text-emerald-700 font-medium text-sm border border-gray-200/90 hover:border-emerald-300 shadow-xs transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                title="Direct Phone Line"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="whitespace-nowrap font-mono tracking-tight">{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Subtle back ambient accent */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/15 to-teal-400/15 rounded-[32px] blur-xl opacity-60 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 border border-gray-200/90 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/4.6] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/IMG_4299.JPG"
                    alt="Naman Mishra"
                    className="w-full h-full object-cover object-center filter contrast-[1.03]"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = '/IMG_4299.jpg';
                      }
                    }}
                  />
                  
                  {/* Subtle soft gradient at bottom of photo for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Overlaid Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>UST · Client: RBC</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>Toronto, Canada</span>
                    </div>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xl font-bold font-display leading-tight">Naman Mishra</div>
                    <div className="text-xs text-emerald-200 font-medium mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Masters in Computer Applications (MCA)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Strip Below Portrait */}
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 px-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium text-gray-800">Vault & Cloud Security</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-teal-600" />
                    <span className="font-medium text-gray-800">Agentic AI & Kafka</span>
                  </div>
                </div>

                {/* Quick Contact Links */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100">
                  <a
                    href={SOCIAL_LINKS.email}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-700 text-xs font-medium transition-colors border border-gray-200/60"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Email</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.phone}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-700 text-xs font-medium transition-colors border border-gray-200/60"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call</span>
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-700 text-xs font-medium transition-colors border border-gray-200/60"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;