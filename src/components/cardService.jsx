import React from "react";

const CardService = (props) => {
  return (
    <>
      {/* Container principal do card com largura responsiva, fundo branco,
          bordas arredondadas, sombra e efeito de hover para ampliar e destacar */}
      <div
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto
        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Imagem do card, que recebe o src e alt via props, com altura responsiva e ajuste de corte */}
        <img
          src={props.img}
          alt={props.alt}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        {/* Container do conteúdo textual e botão, com padding e flex para preencher o espaço */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Título do serviço, com fonte maior e cor escura */}
          <h1 className="text-lg sm:text-xl font-semibold text-gray-950">{props.titulo}</h1>
          {/* Descrição do serviço, com espaçamento superior e tamanho de fonte ajustado */}
          <p className="text-gray-800 mt-2 text-sm sm:text-base">{props.descricao}</p>
          {/* Botão que recebe link e texto via props, com estilo verde, cantos arredondados,
              alinhamento centralizado e efeito hover para clarear a cor */}
          <a
            href={props.link}
            className="mt-4 inline-block bg-green-500 text-white px-4 py-4 rounded-3xl text-center
              hover:bg-green-300 transition duration-300"
          >
            {props.botao}
          </a>
        </div>
      </div>
    </>
  );
};

export default CardService;
