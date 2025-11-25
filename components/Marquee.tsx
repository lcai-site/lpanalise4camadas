import React from 'react';

const Marquee: React.FC = () => {
  const content = (
    <div className="flex items-center gap-8 px-4">
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ VAGAS LIMITADAS
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ BLACK FRIDAY 2025
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ VAGAS LIMITADAS
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ CONDIÇÃO ÚNICA
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ VAGAS LIMITADAS
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
      <span className="text-navy-900 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
        ⚠️ BLACK FRIDAY 2025
      </span>
      <span className="text-navy-900/40 text-xs">•</span>
    </div>
  );

  return (
    <div className="bg-gold overflow-hidden py-3 border-y border-white/20 relative z-20 shadow-lg">
      <div className="animate-marquee hover:pause flex">
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;