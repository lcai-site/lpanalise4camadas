import React from 'react';
import Reveal from './ui/Reveal';

const Reports: React.FC = () => {
  const items = [
    {
      id: "01",
      title: "Perfil Pessoal (DISC)",
      desc: "Seu comportamento sob pressão, como decide, como se comunica e onde se desgasta.",
      borderColor: "border-navy-900"
    },
    {
      id: "02",
      title: "Forças Pessoais",
      desc: "Seus talentos naturais e como utilizá-los para aumentar sua performance e bem-estar.",
      borderColor: "border-gold"
    },
    {
      id: "03",
      title: "Linguagem de Valorização",
      desc: "O que faz você se sentir visto e motivado — essencial para relações profissionais saudáveis.",
      borderColor: "border-navy-900"
    },
    {
      id: "04",
      title: "Âncoras de Carreira",
      desc: "O que sustenta suas escolhas e onde você realmente se realiza no trabalho.",
      borderColor: "border-gold"
    }
  ];

  return (
    <section id="relatorios" className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-4">
            Os 4 relatórios que revelam <span className="italic text-gold">quem você é</span>
          </h2>
          <p className="text-gray-600">— e para onde faz sentido ir.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} className={`bg-white p-8 shadow-lg border-t-4 ${item.borderColor} hover:-translate-y-2 transition-transform duration-300 h-full`}>
              <div className="text-gold font-serif text-5xl mb-4 opacity-20">{item.id}</div>
              <h3 className="font-bold text-navy-900 text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-navy-900 font-medium">
            Em resumo: Você recebe um <span className="font-bold border-b border-gold">dossiê completo</span> da sua identidade.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Reports;