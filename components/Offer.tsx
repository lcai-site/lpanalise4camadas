import React from 'react';
import Reveal from './ui/Reveal';

const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[600px] bg-navy-800 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 border border-gold text-gold text-xs tracking-widest mb-6">BLACK FRIDAY</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-2">Investimento</h2>
        <p className="text-gray-400 mb-10">Pela última vez neste valor.</p>

        <Reveal className="max-w-lg mx-auto bg-white text-navy-900 rounded-lg p-1 pb-0 shadow-2xl">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-100">
            <div className="flex justify-center items-baseline mb-8">
              <span className="text-xl text-gray-500 font-medium align-top">R$</span>
              <span className="text-6xl md:text-7xl font-bold text-navy-900 tracking-tight">497</span>
              <span className="text-xl text-gray-500 font-medium">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-10 text-gray-600">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Devolutiva Individual
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                4 Relatórios Completos
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Dossiê Completo
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Ebook Linkedin Estratégico
              </li>
              <li className="flex items-center gap-3 font-semibold text-navy-900">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Garantia de Clareza
              </li>
            </ul>

            <a href="#" className="btn-premium block w-full bg-gold text-navy-900 font-bold text-lg py-4 rounded-full shadow-lg mb-4 hover:shadow-xl hover:bg-gold-light transition-all">
              QUERO CLAREZA PARA 2026
            </a>
            <p className="text-xs text-gray-500">Pagamento seguro. Acesso imediato.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Offer;