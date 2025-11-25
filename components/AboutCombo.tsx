import React from 'react';
import Reveal from './ui/Reveal';

const AboutCombo: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">
            O que é o <span className="italic text-gold">Combo</span> Identidade & Direção
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Um processo completo para organizar sua identidade e ganhar direção prática para 2026.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Análise de Identidade</h3>
              <p className="text-gray-600">Devolutiva individual + quatro relatórios profundos sobre seu perfil.</p>
            </div>
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Dossiê Pessoal</h3>
              <p className="text-gray-600">Mapeamento de padrões, forças, âncoras e motivadores reais.</p>
            </div>
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Direcionamento</h3>
              <p className="text-gray-600">Visão estratégica profissional para tomadas de decisões mais firmes.</p>
            </div>
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Ebook Linkedin Estratégico</h3>
              <p className="text-gray-600">Clareza interna convertida em posicionamento externo de autoridade.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutCombo;