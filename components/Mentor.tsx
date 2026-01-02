import React from 'react';
import Reveal from './ui/Reveal';

const Mentor: React.FC = () => {
  return (
    <section id="mentor" className="py-24 bg-forest text-white relative overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <Reveal className="w-full md:w-1/3">
            <div className="aspect-[3/4] bg-gradient-to-t from-black to-forest-dark border-4 border-forest-dark shadow-2xl relative overflow-hidden">
              <img 
                src="http://midias.lcai.com.br/images/2025/11/24/2-Foto.webp" 
                alt="Ricardo Borges" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-gold font-serif text-xl">Ricardo Borges</p>
                <p className="text-xs tracking-widest uppercase text-gray-400">Mentor & Engenheiro</p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={100} className="w-full md:w-2/3">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Quem conduz sua <span className="italic text-gold">análise</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Com mais de 20 anos na engenharia, liderando projetos, equipes e operações, acumulei resultados sólidos. Mas percebi que a técnica explicava apenas uma parte. O comportamento humano completou o que faltava.
              </p>
              <p className="border-l-2 border-gold pl-6 italic text-white font-serif text-lg">
                "Minha missão é ajudar profissionais a encontrarem clareza, equilíbrio e propósito para destravar seu potencial."
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium text-white">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gold"></div>Mentor</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gold"></div>Analista Comportamental</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gold"></div>Especialista em IE</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-gold"></div>Neurociência & Performance</div>
              </div>
              
              <p>Do jovem profissional ao líder sênior, conecto lógica e humanidade para quem quer crescer de forma consistente.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Mentor;