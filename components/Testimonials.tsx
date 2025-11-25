import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Reveal from './ui/Reveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "É como se tivessem acendido uma luz. Eu me enxerguei pela primeira vez." },
    { text: "Finalmente tive coragem de iniciar minha transição de carreira." },
    { text: "Recusei uma vaga porque agora sei o que faz sentido para a minha carreira." },
    { text: "Minha liderança mudou e isso refletiu de forma muito positiva no desempenho do meu time." },
    { text: "Depois de me conhecer realmente, passei a me posicionar melhor e fui promovido." },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-3xl text-center text-navy-900 mb-12">
            O que profissionais dizem após a Análise
          </h2>
        </Reveal>
        
        <Reveal delay={100} className="pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100',
              bulletClass: 'swiper-pagination-bullet !bg-gold !opacity-40',
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="mySwiper !pb-12"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-beige-light p-8 rounded shadow-sm border border-transparent hover:border-gold transition-colors h-full flex flex-col text-center md:text-left cursor-grab active:cursor-grabbing">
                  <div className="text-gold text-4xl font-serif mb-4 leading-none">“</div>
                  <p className="text-gray-700 italic text-lg flex-grow">{t.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;