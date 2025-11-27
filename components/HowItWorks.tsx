import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Reveal from './ui/Reveal';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Sua Jornada Após Garantir sua Vaga",
      desc: "Você adquire o Combo Identidade & Direção."
    },
    {
      id: "02",
      title: "O Mapeamento",
      desc: "Você preenche a análise comportamental completa."
    },
    {
      id: "03",
      title: "O Agendamento",
      desc: "Escolhe a melhor data para sua sessão exclusiva comigo."
    },
    {
      id: "04",
      title: "A Devolutiva",
      desc: "Realiza a sessão 1:1, onde traduzimos seus dados em clareza."
    },
    {
      id: "05",
      title: "A Descoberta",
      desc: "Entende profundamente seu perfil dominante, forças e sabotadores."
    },
    {
      id: "06",
      title: "O Plano de Ação",
      desc: "Recebe diretrizes práticas e personalizadas para o seu momento."
    },
    {
      id: "07",
      title: "A Visão de Futuro",
      desc: "Estabelece objetivos de carreira claros e alcançáveis."
    },
    {
      id: "08",
      title: "A Execução",
      desc: "Aplica o Ebook LinkedIn Estratégico para posicionar sua nova versão no mercado."
    }
  ];

  return (
    <section className="py-20 bg-beige-light overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900">Como funciona na prática</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4"></div>
        </Reveal>

        <Reveal delay={100} className="!pb-12">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="processSwiper !pb-12"
          >
            {steps.map((step) => (
              <SwiperSlide key={step.id} className="h-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gold h-full flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  {/* Background Number */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-gold font-bold -mt-2 -mr-2">
                    {step.id}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-navy-900 text-xl mb-3 relative z-10">{step.title}</h3>
                  <p className="text-sm text-gray-600 relative z-10">{step.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;