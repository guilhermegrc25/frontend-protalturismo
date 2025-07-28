import React from "react";
// Importa a imagem de fundo para o componente
import Background from "../assets/imagens/bg3.png";

const Hero = (props) => {
  return (
    <>
      {/* Container principal do Hero, com altura fixa, background configurado com a imagem importada,
          e estilo para centralizar o conteúdo */}
      <div
        className="relative h-[920px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Conteúdo do texto dentro do Hero, posicionado acima do background */}
        <div className="relative z-10 text-center p-4">
          {/* Título principal, texto grande e negrito, com sombra para melhor legibilidade */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.titulo} {/* Recebe o título via props */}
          </h1>

          {/* Parágrafo descritivo abaixo do título, com tamanho de fonte responsivo e sombra */}
          <p className="text-lg md:text-x1 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.paragrafo} {/* Recebe o parágrafo via props */}
          </p>

          {/* Subtítulo fixo "Nova Serra Roxa" com fonte maior e sombra */}
          <h2 className="text-5xl font-semibold mb-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Nova Serra Roxa
          </h2>

          {/* Botão com fundo roxo, efeito hover para clarear a cor e bordas arredondadas */}
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-300 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;