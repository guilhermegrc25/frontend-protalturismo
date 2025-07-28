import React from "react";
// Importação dos ícones das redes sociais da biblioteca react-icons
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Rodapé com largura total, fundo em gradiente roxo e sombra */}
      <footer className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-black py-2 px-3 shadow-lg mt-auto">
        <div>
          {/* Container flexível para organizar conteúdo centralizado */}
          <div className="w-full mx-auto flex flex-col justify-between items-center">
            {/* Texto centralizado com direitos autorais */}
            <div className="text-center mb-4 md:mb-0">
              <p className="text-sm text-white">
                &copy; Nova serra Roxa. Todos os direitos reservados Guilherme
              </p>
            </div>

            {/* Container dos ícones das redes sociais */}
            <div>
              <div className="flex space-x-4 text-white text-xl">
                {/* Link do Instagram */}
                <a href="#" className="hover:text-white">
                  <FaInstagram />
                </a>

                {/* Link do Facebook */}
                <a href="#" className="hover:text-white">
                  <FaFacebook />
                </a>

                {/* Link do Whatsapp */}
                <a href="#" className="hover:text-white">
                  <FaWhatsapp />
                </a>

                {/* Link direto para o Spotify, abre em nova aba, com título para acessibilidade */}
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                  title="Ouça no Spotify"
                >
                  <FaSpotify />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
