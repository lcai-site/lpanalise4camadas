import React from 'react';
import Reveal from './ui/Reveal';

const TargetAudience: React.FC = () => {
  const points = [
    "Quer promoção com maturidade",
    "Busca recolocação com direção",
    "Está considerando transição de carreira",
    "Está perdido e cansado de repetir padrões",
    "Quer se posicionar melhor profissionalmente",
    "Deseja liderar com consistência",
    "Precisa decidir sua próxima fase com firmeza"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="bg-forest text-white p-10 rounded-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold opacity-20 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-3xl mb-6">Este processo é para você que:</h3>
            <ul className="space-y-4 font-light">
              {points.map((text, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        
        <Reveal className="text-center md:text-left">
          <h2 className="font-serif text-4xl text-forest mb-6">Encontre seu Norte.</h2>
          <p className="text-gray-600 text-lg mb-8">
            Se você quer clareza para avançar, este processo não é um luxo, é uma necessidade estratégica.
          </p>
          <a href="#oferta" className="inline-block border-b-2 border-gold text-forest font-bold hover:text-gold transition-colors pb-1">
            GARANTIR MINHA VAGA &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default TargetAudience;