import React from "react";
import Navbar from "../components/navbar";      // Importa a barra de navegação
import Footer from "../components/footer";      // Importa o rodapé da página
import ContactForm from "../components/contactform";  // Importa o formulário de contato

const ContactPage = () => {
    return (
        // Container principal: usa flexbox em coluna e ocupa a altura mínima da tela
        <div className="flex flex-col min-h-screen">
            {/* Componente Navbar fixo no topo */}
            <Navbar />
            
            {/* Container para o formulário e rodapé, com margin-top automática para empurrar para baixo */}
            <div className="mt-auto">
                {/* Formulário de contato */}
                <ContactForm/>
                
                {/* Rodapé da página */}
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;
