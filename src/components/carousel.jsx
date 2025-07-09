import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import catedral from "../assets/imagens/catedral.jpg";
import madrid from "../assets/imagens/santiago.jpg";
import corinthians from "../assets/imagens/corinthians.jpg";
import catedrala from "../assets/imagens/catedrala.jpg";
import paris from "../assets/imagens/paris.jpg";
import colisseu from "../assets/imagens/colisseu.jpg";

const tourist_places = [
  { image: catedral, title: "catedral de pouso alegre", description: "Ponto turístico religioso" },
  { image: madrid, title: "santiago bernabéu", description: "Hala Madrid!" },
  { image: corinthians, title: "Neo Química Arena", description: "A casa do Timão!" },
  { image: catedrala, title: "Kölner Dom", description: "Ponto turístico religioso" },
  { image: paris, title: "Torre Eiffel", description: "Ponto turístico de Paris" },
  { image: colisseu, title: "Coliseu", description: "Ponto turístico de Roma" },
];

const Carousel = () => {
  return (
    <div className="relative z-10 w-full">
      <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
        Lugares Turísticos
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // tempo entre slides (ms)
          disableOnInteraction: false, // continua mesmo se o usuário interagir
        }}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {tourist_places.map((place, index) => (
          <SwiperSlide key={index}>
            <CardService
              img={place.image}
              alt={place.title}
              titulo={place.title}
              descricao={place.description}
              link="#"
              botao="Saiba Mais"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;