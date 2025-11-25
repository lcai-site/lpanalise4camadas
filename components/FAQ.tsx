import React, { useState } from 'react';
import Reveal from './ui/Reveal';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left font-semibold text-navy-900 flex justify-between items-center focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-gold text-xl transition-transform duration-300">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out px-6 bg-white text-gray-600 overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 pt-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Quanto tempo dura a devolutiva?", a: "Entre 60 e 90 minutos, dependendo da profundidade necessária." },
    { q: "Eu recebo os relatórios depois da sessão?", a: "Sim. Todos os relatórios e o dossiê ficam com você para consultas futuras." },
    { q: "Posso fazer mesmo sem estar em transição?", a: "Sim. A análise é para qualquer profissional que deseja clareza interna e direção estratégica." },
    { q: "Preciso ter conhecimento prévio sobre comportamento?", a: "Não. Todo o processo é guiado, claro e aplicado à sua realidade." },
    { q: "Como funciona o agendamento?", a: "Após a compra, enviamos o link para marcar sua devolutiva no horário que preferir." },
  ];

  return (
    <section className="py-20 bg-beige-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal>
          <h2 className="font-serif text-3xl text-navy-900 text-center mb-12">Perguntas Frequentes</h2>
        </Reveal>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <FAQItem question={`${idx + 1}. ${faq.q}`} answer={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;