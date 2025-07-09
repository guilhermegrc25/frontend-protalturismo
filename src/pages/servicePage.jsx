import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BgService from "../assets/imagens/bg4.png";
import Carousel from "../components/carousel";

const ServicePage = () => {
  return (
    <>
      <div
        className="relative flex flex-col min-h-screen bg-cover bg-center"
       style={{ backgroundImage: `url(${BgService})` }}
      >
        <Navbar />

        <main className="flex-grow flex flex-col justify-center items-center px-6 py-12 md:py-20 bg-opacity-50">
          {/* Camada escura semitransparente para contraste */}
          <h1 className="text-4xl font-bold mb-8 text-white">
            Nossos Serviços
          </h1>

          <p className="max-w-3xl text-center text-white text-lg leading-relaxed">
            Descubra a variedade de serviços que oferecemos para ajudar você a alcançar seus objetivos.
          </p>
        </main>

        <Carousel />

        <Footer />
      </div>
    </>
  );
};

export default ServicePage;