import React, { useEffect, useRef } from 'react';
import { ArrowRight, Linkedin, ChevronDown, Terminal, Cpu, Network } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon Badge Component for consistency
  const OrbitIcon = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <div className={`absolute w-14 h-14 bg-white rounded-full p-3 shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-30 ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden bg-engineering-grid">
      
      {/* Abstract Background Gradient - Subtle Professional Glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
      
      {/* Center Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content - Highly Technical */}
          <div className="space-y-8 order-2 lg:order-1 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <Terminal className="w-3 h-3" />
              <span className="text-xs font-mono font-semibold tracking-wide uppercase">Principal Backend Lead</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-slate-900 tracking-tight">
              Architecting <span className="text-gradient">Event-Driven</span> <br/>
              Resilient Systems
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light reveal-on-scroll stagger-1">
              I specialize in building <strong>high-throughput microservices</strong> and <strong>distributed architectures</strong> on Azure. 
              Expertise in implementing <span className="font-semibold text-slate-800">Resilience Patterns</span> (Circuit Breaker, Retry), <span className="font-semibold text-slate-800">RAG Pipelines</span>, and 
              observability stacks using <span className="font-semibold text-slate-800">OpenTelemetry</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal-on-scroll stagger-2">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-slate-900 text-white font-medium rounded-lg overflow-hidden flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 transform hover:-translate-y-0.5"
              >
                <span>System Designs</span>
                <Network className="w-4 h-4" />
              </a>
              
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-blue-500/30 hover:bg-blue-50/30 transition-all flex items-center gap-3 shadow-sm hover:shadow-md"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Technical Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 reveal-on-scroll stagger-3">
              <div>
                <div className="text-3xl font-display font-bold text-slate-900 flex items-baseline">
                    8<span className="text-primary text-xl">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-slate-900 flex items-baseline">
                    99.9<span className="text-primary text-xl">%</span>
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Uptime Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-slate-900 flex items-baseline">
                    10<span className="text-primary text-xl">x</span>
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Scale Factor</div>
              </div>
            </div>
          </div>

          {/* Visual Content - Larger Solar System Orbit Animation */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 reveal-on-scroll stagger-2 h-[600px] items-center">
             <div className="relative w-[600px] h-[600px] flex items-center justify-center transform scale-90 md:scale-100">
                
                {/* Decorative Background Glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 rounded-full blur-[80px] -z-10"></div>
                
                {/* Center Image - Significantly Larger */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 z-20 rounded-full p-3 bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl">
                   <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-100 relative group">
                      <img 
                        src="https://raw.githubusercontent.com/namanmishra001/website/3951b41e9517fc2a26166a44974bf28d04e4bc31/IMG_4299.JPG" 
                        alt="Naman Mishra" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Technical overlay on hover */}
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                         <div className="text-white text-center">
                            <Cpu className="w-8 h-8 mx-auto mb-2 text-primary-400" />
                            <p className="font-mono text-sm">System_Architect</p>
                         </div>
                      </div>
                   </div>
                   {/* Online Indicator */}
                   <div className="absolute bottom-6 right-6 w-7 h-7 bg-green-500 rounded-full border-4 border-white shadow-md z-30 animate-pulse"></div>
                </div>

                {/* Inner Orbit Ring (Clockwise) - Expanded */}
                <div className="absolute w-[480px] h-[480px] rounded-full border border-slate-300/60 border-dashed animate-spin-slow pointer-events-none">
                   {/* Java - Top */}
                   <div className="absolute -top-7 left-1/2 -translate-x-1/2 animate-spin-reverse-slow pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="" />
                   </div>
                   {/* Spring - Bottom Right */}
                   <div className="absolute top-[75%] -right-3 animate-spin-reverse-slow pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" className="" />
                   </div>
                   {/* Azure - Bottom Left */}
                   <div className="absolute top-[75%] -left-3 animate-spin-reverse-slow pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="" />
                   </div>
                </div>

                {/* Outer Orbit Ring (Counter-Clockwise) - Expanded */}
                <div className="absolute w-[680px] h-[680px] rounded-full border border-slate-200/40 animate-spin-reverse-slower pointer-events-none hidden md:block">
                   {/* React - Top Right */}
                   <div className="absolute top-[18%] right-[18%] animate-spin-slower pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="" />
                   </div>
                   {/* Kafka - Bottom */}
                   <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 animate-spin-slower pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" className="" />
                   </div>
                   {/* Docker - Top Left */}
                   <div className="absolute top-[18%] left-[18%] animate-spin-slower pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="" />
                   </div>
                    {/* Database - Middle Left */}
                   <div className="absolute top-[60%] -left-5 animate-spin-slower pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="" />
                   </div>
                   {/* Git - Middle Right */}
                   <div className="absolute top-[60%] -right-5 animate-spin-slower pointer-events-auto">
                      <OrbitIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="" />
                   </div>
                </div>

             </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">View Architecture</span>
          <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;