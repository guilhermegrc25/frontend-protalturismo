import React from "react";
import Background from "../assets/imagens/bg3.png";

const Hero = (props) => {
  return (
    <>
      <div
        className="relative h-[920px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.titulo}
          </h1>

          <p className="text-lg md:text-x1 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.paragrafo}
          </p>

          <h2 className="text-5xl font-semibold mb-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  Nova Serra Roxa
</h2>

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