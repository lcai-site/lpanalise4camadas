import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 bg-navy-900 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href="#" className="block relative flex-shrink-0 group">
          <img
            src="http://midias.lcai.com.br/images/2025/11/24/Logo-RB-Branco.png"
            alt="Ricardo Borges"
            className="h-8 md:h-12 w-auto object-contain block group-hover:hidden"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                if(nextSibling) nextSibling.classList.remove('hidden');
            }}
          />
           <div className="hidden text-white font-serif tracking-widest text-xl uppercase font-bold group-hover:block">
            Ricardo <span className="text-gold">Borges</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
          <a href="#sobre" className="hover:text-gold transition-colors">
            O Processo
          </a>
          <a href="#relatorios" className="hover:text-gold transition-colors">
            Relatórios
          </a>
          <a href="#mentor" className="hover:text-gold transition-colors">
            Mentor
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#oferta"
          className="bg-transparent border border-gold text-gold px-4 py-2 text-xs md:text-sm md:px-6 font-semibold rounded-full hover:bg-gold hover:text-navy-900 transition-all duration-300 flex-shrink-0 text-center whitespace-nowrap"
        >
          GARANTIR VAGA
        </a>
      </div>
    </header>
  );
};

export default Header;