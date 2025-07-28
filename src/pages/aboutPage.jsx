import React from "react";
import Navbar from "../components/navbar";
import BgAbout from "../assets/imagens/sexygarro.jpg";

const About = () => {
  return (
    // Container principal com estilo flex para coluna, altura mínima da tela, e background com imagem
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgAbout})` }} // Define a imagem de fundo
    >
      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex-grow flex justify-center mt-16 px-4 md:px-8 py-8 h-[630px]">
        {/* Box centralizado com largura máxima, fundo gradiente, texto branco, padding e borda arredondada */}
        <div className="w-full max-w-4xl bg-gradient-to-r from-purple-500 to-purple-800 text-white p-6 rounded-lg shadow-lg">
          {/* Título da seção */}
          <h1 className="text-center text-3xl font-bold mb-6">Minha Experiência</h1>

          {/* Parágrafo com texto branco, fonte semi-negrito, espaçamento entre linhas confortável e texto justificado */}
          <p className="text-white font-semibold leading-relaxed text-justify">
            A minha experiência construindo esse site foi uma jornada incrível de aprendizado com Tailwind CSS. Ao longo do processo, aprendi não só a utilizar utilitários de forma mais eficiente, mas também a estruturar componentes de forma mais responsiva e organizada. O Tailwind me permitiu focar mais no design e na experiência do usuário, tornando o desenvolvimento muito mais ágil e visualmente consistente. Sem dúvida, foi uma etapa marcante na minha evolução como desenvolvedor(a).
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
