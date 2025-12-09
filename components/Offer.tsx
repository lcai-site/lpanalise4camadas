import React, { useState } from 'react';
import Reveal from './ui/Reveal';

const Offer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // CORRECT HOTMART CHECKOUT URL
    const hotmartBaseUrl = "https://pay.hotmart.com/F103135995J";
    
    // Clean phone number (remove non-digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    let ddd = '';
    let number = '';

    if (cleanPhone.length >= 2) {
      ddd = cleanPhone.substring(0, 2);
      number = cleanPhone.substring(2);
    } else {
      number = cleanPhone;
    }

    // Construct URL with parameters (Hotmart uses 'name', 'email', 'phoneac' or 'tel')
    // Using standard mapping: name, email, phoneac, phonenumber
    const finalUrl = `${hotmartBaseUrl}?checkoutMode=10&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phoneac=${encodeURIComponent(ddd)}&phonenumber=${encodeURIComponent(number)}`;
    
    window.location.href = finalUrl;
  };

  return (
    <section id="oferta" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[600px] bg-navy-800 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <h2 className="font-serif text-3xl md:text-5xl mb-12">Investimento</h2>

        <Reveal className="max-w-lg mx-auto bg-white text-navy-900 rounded-lg p-1 pb-0 shadow-2xl">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-100">
            <div className="flex justify-center items-baseline mb-8">
              <span className="text-xl text-gray-500 font-medium align-top">R$</span>
              <span className="text-6xl md:text-7xl font-bold text-navy-900 tracking-tight">647</span>
              <span className="text-xl text-gray-500 font-medium">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-10 text-gray-600">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Devolutiva Individual
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                4 Relatórios Completos da sua Identidade
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🎁</span>
                Ebook Linkedin Estratégico
              </li>
              <li className="flex items-center gap-3 font-semibold text-navy-900">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Garantia de Clareza
              </li>
            </ul>

            <button onClick={openModal} className="btn-premium block w-full bg-gold text-navy-900 font-bold text-lg py-4 rounded-full shadow-lg mb-4 hover:shadow-xl hover:bg-gold-light transition-all">
              QUERO CLAREZA PARA 2026
            </button>
            <p className="text-xs text-gray-500">Pagamento seguro. Acesso imediato.</p>
          </div>
        </Reveal>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/80 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden relative animate-fade-in-up">
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-2">Quase lá...</h3>
                <p className="text-gray-600 text-sm">Preencha seus dados para finalizar sua inscrição.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <button type="submit" className="w-full bg-gold text-navy-900 font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gold-light transition-all transform hover:-translate-y-1 mt-4">
                  CONCLUIR
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  Você será redirecionado para o ambiente seguro da Hotmart.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offer;