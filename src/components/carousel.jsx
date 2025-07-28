import React from "react";
import CardService from "./cardService"; // Componente do card que será usado para cada slide
import { Swiper, SwiperSlide } from "swiper/react"; // Componentes do Swiper para criar o carrossel
import { Autoplay } from "swiper/modules"; // Módulo para autoplay (deslizamento automático)
import "swiper/css"; // Importa estilos padrão do Swiper

// Importação das imagens usadas nos cards
import catedral from "../assets/imagens/catedral.jpg";
import madrid from "../assets/imagens/santiago.jpg";
import corinthians from "../assets/imagens/corinthians.jpg";
import catedrala from "../assets/imagens/catedrala.jpg";
import paris from "../assets/imagens/paris.jpg";
import colisseu from "../assets/imagens/colisseu.jpg";

// Array com dados dos lugares turísticos, contendo imagem, título e descrição
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
      {/* Título do carrossel, centralizado, com texto branco e sombra para destacar */}
      <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
        Lugares Turísticos
      </h1>

      {/* Componente Swiper que cria o carrossel */}
      <Swiper
        modules={[Autoplay]} // Habilita o autoplay
        autoplay={{
          delay: 3000, // Tempo entre as trocas de slides em milissegundos
          disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
        }}
        loop={true} // Faz o carrossel ser infinito, voltando ao primeiro slide após o último
        slidesPerView="auto" // Quantos slides aparecem por vez (auto para responsividade)
        spaceBetween={20} // Espaçamento entre os slides
        breakpoints={{ // Configurações responsivas para telas maiores
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
        {/* Mapeia o array tourist_places para gerar cada slide do carrossel */}
        {tourist_places.map((place, index) => (
          <SwiperSlide key={index}>
            {/* Usa o componente CardService para exibir as informações do lugar turístico */}
            <CardService
              img={place.image}
              alt={place.title}
              titulo={place.title}
              descricao={place.description}
              link="#" // Link fictício, pode ser alterado conforme necessidade
              botao="Saiba Mais" // Texto do botão
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
