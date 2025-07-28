import React from "react";
import Navbar from "../components/navbar";  // Importa a barra de navegação
import Footer from "../components/footer";  // Importa o rodapé
import Background from "../assets/imagens/bg3.png";  // Imagem de fundo para a página

const Know = () => {
  return (
    // Container principal com altura mínima da tela, fundo com imagem e texto branco
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Camada preta semi-transparente por cima da imagem para melhorar a leitura */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"> </div>

      {/* Conteúdo principal da página, posicionado acima da camada preta */}
      <div className="relative flex flex-col min-h-screen">
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Main central, flexível para ocupar espaço, com alinhamento centralizado */}
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          {/* Container do texto principal com largura máxima e espaçamento */}
          <div className="max-w-3xl text-center py-16">
            {/* Título principal da seção */}
            <h1 className="text-5xl font-bold mb-6">
              Sobre a Nova Serra Roxa
            </h1>
            {/* Parágrafo explicativo com espaçamento abaixo */}
            <p className="text-lg leading-relaxed mb-10">
              Aqui você encontra mais informações sobre este incrível projeto que
              une inovação, design e propósito. Criado com dedicação, o site
              representa uma jornada de aprendizado e criatividade. 🚀
            </p>
          </div>

          {/* Grid com 3 colunas (em telas pequenas e maiores), espaçamento entre cards */}
          <div className="grid sm:grid-cols-3 gap-8 px-4 pb-20 max-w-6xl">
            {/* Card 1: Tecnologia */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">💡 Tecnologia</h3>
              <p className="text-sm">
                Desenvolvido com React, Tailwind CSS e React Router para uma navegação fluida e moderna.
              </p>
            </div>

            {/* Card 2: Objetivo */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">🎯 Objetivo</h3>
              <p className="text-sm">
                Criar uma plataforma que represente visualmente a cidade fictícia Nova Serra Roxa, com foco em design e interatividade.
              </p>
            </div>

            {/* Card 3: Aprendizado */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">🚀 Aprendizado</h3>
              <p className="text-sm">
                Uma jornada de prática com ferramentas modernas e conceitos de UI/UX, reforçando habilidades em frontend.
              </p>
            </div>
          </div>
        </main>

        {/* Rodapé da página */}
        <Footer />
      </div>
    </div>
  );
};

export default Know;
