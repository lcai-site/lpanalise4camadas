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
            {/* Step 1 (Left - Gold) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right w-full pl-12 md:pl-0">
                <h3 className="font-bold text-navy-900 text-lg">1. Sua Jornada Após Garantir sua vaga</h3>
                <p className="text-sm text-gray-600">Você adquire o Combo Identidade & Direção.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0"></div>
            </Reveal>
            
            {/* Step 2 (Right - Navy) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0 order-2 md:order-2 w-full">
                 <h3 className="font-bold text-navy-900 text-lg">2. O Mapeamento</h3>
                <p className="text-sm text-gray-600">Você preenche a análise comportamental completa.</p>
              </div>
            </Reveal>

            {/* Step 3 (Left - Gold) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right w-full pl-12 md:pl-0">
                <h3 className="font-bold text-navy-900 text-lg">3. O Agendamento</h3>
                <p className="text-sm text-gray-600">Escolhe a melhor data para sua sessão exclusiva comigo.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0"></div>
            </Reveal>

            {/* Step 4 (Right - Navy) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0 order-2 md:order-2 w-full">
                 <h3 className="font-bold text-navy-900 text-lg">4. A Devolutiva</h3>
                <p className="text-sm text-gray-600">Realiza a sessão 1:1, onde traduzimos seus dados em clareza.</p>
              </div>
            </Reveal>

             {/* Step 5 (Left - Gold) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right w-full pl-12 md:pl-0">
                <h3 className="font-bold text-navy-900 text-lg">5. A Descoberta</h3>
                <p className="text-sm text-gray-600">Entende profundamente seu perfil dominante, forças e sabotadores.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0"></div>
            </Reveal>

            {/* Step 6 (Right - Navy) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0 order-2 md:order-2 w-full">
                 <h3 className="font-bold text-navy-900 text-lg">6. O Plano de Ação</h3>
                <p className="text-sm text-gray-600">Recebe diretrizes práticas e personalizadas para o seu momento.</p>
              </div>
            </Reveal>

            {/* Step 7 (Left - Gold) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right w-full pl-12 md:pl-0">
                <h3 className="font-bold text-navy-900 text-lg">7. A Visão de Futuro</h3>
                <p className="text-sm text-gray-600">Estabelece objetivos de carreira claros e alcançáveis.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0"></div>
            </Reveal>

            {/* Step 8 (Right - Navy) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1 md:order-1"></div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-navy-900 transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0 order-2 md:order-2 w-full">
                 <h3 className="font-bold text-navy-900 text-lg">8. O Dossiê</h3>
                <p className="text-sm text-gray-600">Recebe seus 4 relatórios completos para consulta vitalícia.</p>
              </div>
            </Reveal>

            {/* Step 9 (Left - Gold) */}
            <Reveal className="relative md:flex items-center justify-between group">
              <div className="md:w-[45%] mb-8 md:mb-0 md:text-right w-full pl-12 md:pl-0">
                <h3 className="font-bold text-navy-900 text-lg">9. A Execução</h3>
                <p className="text-sm text-gray-600">Aplica o Ebook LinkedIn Estratégico para posicionar sua nova versão no mercado.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-gold transform -translate-x-1.5 md:-translate-x-2 z-10 shadow"></div>
              <div className="md:w-[45%] pl-12 md:pl-0"></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;