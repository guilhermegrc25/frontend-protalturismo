import React from "react";
import Navbar from "../components/navbar";
import BgAbout from "../assets/imagens/sexygarro.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgAbout})` }}
    >
      <Navbar />

      <main className="flex-grow flex justify-center m-8 mt-16 h-[630px]">
       <div className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white py-0 px-2 shadow-lg">
    <h1 className="text-center pt-8 text-3xl font-bold">Minha Experiência</h1>
    <p className="text-white font-semibold">
    A minha experiência construindo esse site foi uma jornada incrível de aprendizado com Tailwind CSS. Ao longo do processo, aprendi não só a utilizar utilitários de forma mais eficiente, mas também a estruturar componentes de forma mais responsiva e organizada. O Tailwind me permitiu focar mais no design e na experiência do usuário, tornando o desenvolvimento muito mais ágil e visualmente consistente. Sem dúvida, foi uma etapa marcante na minha evolução como desenvolvedor(a).
    </p>
  </div>
</main>


    </div>
  );
};

export default About;