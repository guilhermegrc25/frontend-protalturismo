import React from "react";
import Footer from "../components/footer";          // Importa o rodapé da página
import Navbar from "../components/navbar";          // Importa a barra de navegação
import BgService from "../assets/imagens/bg4.png";  // Importa a imagem de fundo para a página de serviços
import Carousel from "../components/carousel";      // Importa o componente carrossel para mostrar serviços ou imagens

const ServicePage = () => {
  return (
    <>
      {/* Container principal com layout flexível em coluna, altura mínima da tela, 
          imagem de fundo com posicionamento e cobertura */}
      <div
        className="relative flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgService})` }} // Define a imagem de fundo do serviço
      >
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Main central, que ocupa espaço flexível,
            alinhando o conteúdo no centro vertical e horizontalmente */}
        <main className="flex-grow flex flex-col justify-center items-center px-6 py-12 md:py-20 bg-opacity-50">
          {/* Título principal da página */}
          <h1 className="text-4xl font-bold mb-8 text-white">
            Nossos Serviços
          </h1>

          {/* Descrição dos serviços, texto centralizado e com boa legibilidade */}
          <p className="max-w-3xl text-center text-white text-lg leading-relaxed">
            Descubra a variedade de serviços que oferecemos para ajudar você a alcançar seus objetivos.
          </p>
        </main>

        {/* Componente carrossel que pode mostrar vários serviços ou imagens */}
        <Carousel />

        {/* Rodapé fixado na parte inferior */}
        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
