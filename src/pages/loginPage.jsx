import React from "react";
import Navbar from "../components/navbar";       // Importa a barra de navegação
import Footer from "../components/footer";       // Importa o rodapé
import LoginForm from "../components/loginForm"; // Importa o formulário de login

const LoginPage = () => {
  return (
    <>
      {/* Container principal com layout flexível em coluna e altura mínima da tela */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar fixa no topo da página */}
        <Navbar />

        {/* Área principal que cresce para ocupar o espaço disponível,
            centralizando vertical e horizontalmente o formulário de login,
            com fundo cinza claro */}
        <div className="flex-grow flex items-center justify-center bg-gray-100">
          <LoginForm /> {/* Componente do formulário de login */}
        </div>

        {/* Rodapé fixado no final da página */}
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
