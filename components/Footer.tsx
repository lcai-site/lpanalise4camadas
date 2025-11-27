import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Se 2026 precisa ser diferente, comece pela <span className="italic text-gold">clareza</span> que sustenta todas as suas decisões.
        </h2>
        
        <a href="#oferta" className="inline-block bg-gold text-navy-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 mb-16">
          QUERO CLAREZA E DIREÇÃO PARA 2026
        </a>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <img src="http://midias.lcai.com.br/images/2025/11/24/Logo-RB-Branco.png" alt="Ricardo Borges" className="h-8 md:h-10 w-auto" />
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; 2025 Ricardo Borges.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;