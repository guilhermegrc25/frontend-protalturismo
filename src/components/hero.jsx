import React from "react";
import Background from "../assets/imagens/bg3.png"; // Imagem de fundo do hero
import { Link } from "react-router-dom"; // Componente Link para navegação interna (SPA)

const Hero = (props) => {
  return (
    // Container principal com altura fixa, background com imagem, centralizado com flexbox e texto branco
    <div
      className="relative h-[920px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Caixa interna para o conteúdo, com posicionamento relativo para ficar acima do background */}
      <div className="relative z-10 text-center p-4">
        {/* Título principal, com tamanho responsivo e sombra para melhor leitura */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {props.titulo}
        </h1>

        {/* Parágrafo com tamanho responsivo, margem inferior e limite máximo de largura, com sombra */}
        <p className="text-lg md:text-x1 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {props.paragrafo}
        </p>

        {/* Subtítulo destacado maior e negrito, também com sombra */}
        <h2 className="text-5xl font-bold mb-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Nova Serra Roxa
        </h2>

        {/* Botão/link estilizado com fundo roxo, hover, texto branco e cantos arredondados, usa Link do react-router */}
        <Link
          to="/know" // Navega para rota /know dentro da aplicação SPA
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

export default Hero;
