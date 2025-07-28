import React from "react";
import Navbar from "../components/navbar";  // Importa a barra de navegação
import Footer from "../components/footer";  // Importa o rodapé da página
import Hero from "../components/hero";      // Importa o componente Hero (seção principal com imagem e texto)

const Home = () => {
    return (
        // Container principal com flexbox em coluna e altura mínima da tela
        <div className="flex flex-col min-h-screen">
            {/* Barra de navegação no topo */}
            <Navbar />
            
            {/* Seção principal (Hero) com imagem de fundo e chamada */}
            <Hero />
            
            {/* Rodapé fica no final da página, empurrado para baixo pelo mt-auto */}
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
