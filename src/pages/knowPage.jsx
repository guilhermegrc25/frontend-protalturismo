import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../assets/imagens/bg3.png";


const Know = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Background})` }}
    >
     
      <div className="absolute inset-0 bg-black opacity-70 z-0"> </div>

      <div className="relative flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center px-4">
  <div className="max-w-3xl text-center py-16">
    <h1 className="text-5xl font-bold mb-6">
      Sobre a Nova Serra Roxa
    </h1>
    <p className="text-lg leading-relaxed mb-10">
      Aqui você encontra mais informações sobre este incrível projeto que
      une inovação, design e propósito. Criado com dedicação, o site
      representa uma jornada de aprendizado e criatividade. 🚀
    </p>
  </div>

  <div className="grid sm:grid-cols-3 gap-8 px-4 pb-20 max-w-6xl">

    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2">💡 Tecnologia</h3>
      <p className="text-sm">
        Desenvolvido com React, Tailwind CSS e React Router para uma navegação fluida e moderna.
      </p>
    </div>


    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2">🎯 Objetivo</h3>
      <p className="text-sm">
        Criar uma plataforma que represente visualmente a cidade fictícia Nova Serra Roxa, com foco em design e interatividade.
      </p>
    </div>

 
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2">🚀 Aprendizado</h3>
      <p className="text-sm">
        Uma jornada de prática com ferramentas modernas e conceitos de UI/UX, reforçando habilidades em frontend.
      </p>
    </div>
  </div>
</main>

        <Footer />
      </div>
    </div>
  )
}

export default Know;