import React from 'react';
import Reveal from './ui/Reveal';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-beige-light">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900">Como funciona na prática</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-900/10 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <h3 className="font-bold text-navy-900 text-lg">1. Você garante o Combo</h3>
                <p className="text-sm text-gray-600">Aproveite a condição de Black Friday.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-10 md:pl-0"></div>
            </Reveal>
            
            {/* Step 2 */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-10 md:pl-0 order-2 md:order-2">
                 <h3 className="font-bold text-navy-900 text-lg">2. Recebe o Ebook & Agenda</h3>
                <p className="text-sm text-gray-600">Acesso imediato ao material e link de agenda.</p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <h3 className="font-bold text-navy-900 text-lg">3. Análise Profunda</h3>
                <p className="text-sm text-gray-600">Você responde aos instrumentos e realizamos a devolutiva.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-10 md:pl-0"></div>
            </Reveal>

            {/* Step 4 */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-10 md:pl-0 order-2 md:order-2">
                 <h3 className="font-bold text-navy-900 text-lg">4. Entrega do Dossiê</h3>
                <p className="text-sm text-gray-600">Você sai com clareza interna e direção externa.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;