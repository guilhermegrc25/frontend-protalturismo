import React from "react";
import Navbar from "../components/navbar";          // Importa a barra de navegação
import Footer from "../components/footer";          // Importa o rodapé
import bgRegister from "../assets/imagens/bg2.png"; // Importa a imagem de fundo
import RegisterForm from "../components/registerForm"; // Importa o formulário de cadastro

const RegisterPage = () => {
  return (
    <>
      {/* Container principal com layout flexível em coluna, altura mínima da tela, 
          imagem de fundo, e centralização dos conteúdos */}
      <div
        className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${bgRegister})` }} // Define a imagem de fundo
      >
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Área que cresce para ocupar o espaço disponível,
            centralizando vertical e horizontalmente o formulário de cadastro */}
        <div className="flex-grow flex items-center justify-center">
          <RegisterForm /> {/* Componente do formulário de cadastro */}
        </div>

        {/* Rodapé fixado na parte inferior */}
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
