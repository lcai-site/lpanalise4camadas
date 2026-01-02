import React from 'react';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-end bg-forest text-white pt-24 md:pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden pb-0">
        <div className="absolute inset-0 bg-compass-pattern opacity-10"></div>
        {/* Spinning Compass */}
        <div className="absolute top-1/2 left-1/2 md:left-3/4 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <img
            src="http://midias.lcai.com.br/images/2025/11/24/Logo-RB-Branco-1.png"
            alt="Bússola de Fundo"
            className="compass-spin opacity-5 w-[90%] md:w-[600px] max-w-none"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center h-full justify-end md:justify-center pb-8 md:pb-0">
        {/* Content Block */}
        <Reveal className="w-full md:text-left text-center flex flex-col z-30 mb-0 md:mb-12">
          
          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            A decisão mais <span className="italic text-gold">importante</span> da sua carreira é entender{' '}
            <br className="hidden md:block" />
            quem você é.
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-xl text-gray-300 font-light mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Clareza interna e direção estratégica para você entrar em 2026 sem repetir padrões.
          </p>

          {/* Mobile Image */}
          <div className="md:hidden relative w-full flex justify-center mt-[-20px] mb-[-20px] pointer-events-none z-0">
            <img
              src="http://midias.lcai.com.br/images/2025/11/24/Design-sem-nome-22-2.webp"
              alt="Ricardo Borges"
              className="w-[90%] max-w-[350px] h-auto object-contain drop-shadow-2xl transform translate-y-4"
            />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 relative z-30 mt-4 md:mt-0">
            <a
              href="#oferta"
              className="btn-premium bg-gold text-forest-dark px-8 py-4 font-bold text-center rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1 transform transition-all w-full md:w-auto"
            >
              QUERO ENCONTRAR MINHA VERDADEIRA IDENTIDADE
            </a>
          </div>

          <p className="mt-4 text-xs md:text-sm text-gray-400">
            Condição única para quem quer decidir seu futuro com maturidade e Inteligência Emocional.
          </p>
        </Reveal>

        {/* Desktop Expert Photo */}
        <Reveal delay={200} className="hidden md:flex relative z-20 justify-center md:justify-end pointer-events-none h-full items-end">
          <img
            src="http://midias.lcai.com.br/images/2025/11/24/Design-sem-nome-22-2.webp"
            alt="Ricardo Borges"
            className="w-[110%] max-w-none h-auto object-contain drop-shadow-2xl transform scale-110 translate-y-10 origin-bottom"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;