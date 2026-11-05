import React from 'react';

const TECH_STACK = [
  { name: 'Java 21', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'HashiCorp Vault', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];

const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-7 sm:py-9 bg-white border-y border-gray-200/80 shadow-xs overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* Soft gradient edge fade masks matching white background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track with hardware accelerated CSS animation */}
        <div 
          className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer"
          style={{
            animation: 'marquee 35s linear infinite',
            willChange: 'transform',
          }}
        >
          {/* Double array for seamless infinite marquee loop */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="flex flex-col items-center justify-center mx-5 sm:mx-8 group cursor-default transition-all duration-300 shrink-0"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2.5 p-2 rounded-xl bg-gray-50 border border-gray-200/80 shadow-2xs group-hover:scale-105 group-hover:bg-emerald-50/50 group-hover:border-emerald-200 transition-all">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;