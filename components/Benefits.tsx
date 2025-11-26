import React from 'react';
import Reveal from './ui/Reveal';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const Benefits: React.FC = () => {
  const benefits = [
    "Clareza sobre padrões, forças e limites.",
    "Decisões mais sólidas e coerentes.",
    "Fim da autossabotagem silenciosa.",
    "Comunicação mais madura e intencional.",
    "Melhora nos relacionamentos profissionais.",
    "Direção para promoção, recolocação ou transição.",
    "Lucidez para construir 2026 com consciência."
  ];

  return (
    <section className="py-20 bg-navy-900 text-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
            O que muda quando você <span className="text-gold italic">organiza</span> sua identidade
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="relative">
          <div className="border border-gold/30 p-8 rounded bg-navy-800/50 backdrop-blur text-center relative z-10">
            <svg className="w-16 h-16 text-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-serif text-2xl text-white mb-4">Inteligência Emocional</h3>
            <p className="text-gray-400">
              Aprenda a reconhecer, gerenciar e utilizar emoções — suas e as dos outros — de forma estratégica. 
              Mais do que uma Soft Skill, a Inteligência Emocional é a base para tomar decisões conscientes, construir relacionamentos sólidos e alcançar a alta performance na carreira e na vida.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-0 -top-4 -right-4 w-full h-full border border-gray-700/50 rounded"></div>
        </Reveal>
      </div>
    </section>
  );
};

export default Benefits;