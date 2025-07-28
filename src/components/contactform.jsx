import React, { useState } from "react";
import bg from "../assets/imagens/bg2.png"; // Imagem de fundo para o formulário
import axios from "axios"; // Biblioteca para fazer requisições HTTP

const ContactForm = () => {
  // Estado para armazenar os dados do formulário: nome, email e mensagem
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Função que atualiza o estado quando o usuário digita em qualquer input ou textarea
  const handleChange = (e) => {
    setFormData({
      ...formData,              // Mantém os dados atuais
      [e.target.name]: e.target.value, // Atualiza o campo que foi modificado
    });
  };

  // Função que será chamada quando o formulário for enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    try {
      // Envia os dados para a API no endpoint indicado usando POST
      const response = await axios.post("http://localhost:5000/api/contacts", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Exibe alerta de sucesso com nome e email enviados
      alert("menssagem cadastrada com sucesso!!" + `nome: ${formData.name} email: ${formData.email}`);

      // Redireciona o usuário para a página inicial após o envio
      window.location.href = "/";
    } catch (error) {
      // Se houve resposta do servidor mas com erro (ex: status 400, 500)
      if (error.response) {
        alert("Erro ao cadastrar usuário");
      } else {
        // Se não conseguiu conectar ao servidor (ex: servidor offline)
        alert("erro ao conectar ao servidor");
      }
    }
  };

  return (
    // Container principal com background configurado e centralização vertical e horizontal
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Caixa branca semi-transparente para o formulário com sombra e bordas arredondadas */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-lg w-full">
        {/* Título do formulário */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Entre em contato</h2>

        {/* Formulário que chama handleSubmit quando enviado */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo para nome */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange} // Atualiza o estado ao digitar
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite seu nome"
            />
          </div>

          {/* Campo para email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite seu e-mail"
            />
          </div>

          {/* Campo para mensagem */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite sua mensagem..."
            />
          </div>

          {/* Botão de envio */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-md transition duration-300 w-full"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
