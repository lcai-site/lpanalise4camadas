import React from 'react';
import Reveal from './ui/Reveal';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-navy-900 rounded-full flex items-center justify-center border-4 border-gold">
              <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-navy-900 mb-2">Garantia de Clareza e Compromisso</h3>
            <p className="text-gray-600 mb-4">
              Se a devolutiva não te entregar clareza real sobre você e sua direção, devolvo 100% do investimento.
            </p>
            <p className="font-bold text-navy-900 text-sm tracking-wide">SIMPLES. RESPONSÁVEL. HONESTO.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Guarantee;