import React from 'react';
import Reveal from './ui/Reveal';

const AboutCombo: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">
            O que é o <span className="italic text-gold">Combo</span> Identidade & Direção
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Um processo completo para organizar sua identidade e ganhar direção prática para 2026.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Análise de perfil de identidade</h3>
              <p className="text-gray-600">
                4 relatórios completos que fazem uma leitura profunda de como você está se posicionando com relação às pessoas e ao ambiente + Devolutiva Individual com mentor, mostrando todos os nuances do seu perfil predominante.
              </p>
            </div>
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Direcionamento</h3>
              <p className="text-gray-600">
                Para quem não sabe para onde está indo, qualquer caminho serve... Mas a sua carreira exige direção. Aqui, definimos sua rota com estratégia e consistência para que você faça as escolhas certas, alinhadas ao seu propósito.
              </p>
            </div>
            <div className="bg-beige-light p-8 border-l-4 border-gold">
              <h3 className="font-bold text-navy-900 text-xl mb-2">Ebook Linkedin Estratégico</h3>
              <p className="text-gray-600">
                Domine seu posicionamento profissional. Seja para crescer onde está ou buscar novos desafios, este guia ensina a transformar sua autoridade em oportunidades reais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutCombo;