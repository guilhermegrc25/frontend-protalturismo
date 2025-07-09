import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-black py-2 px-3 shadow-lg mt-auto">
        <div>
          <div className="w-full mx-auto flex flex-col justify-between items-center">
            <div className="text-center mb-4 md:mb-0">
              <p className="text-sm text-white">
                &copy; Nova serra Roxa. Todos os direitos reservados Guilherme
              </p>
            </div>
            <div>
              <div className="flex space-x-4 text-white text-xl">
                <a href="#" className="hover:text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-white">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-white">
                  <FaWhatsapp />
                </a>

                {/* Spotify com link direto */}
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