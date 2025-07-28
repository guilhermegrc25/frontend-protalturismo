import axios from "axios";
import React, { useState } from "react";

const RegisterForm = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função executada ao submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
    try {
      // Faz a requisição POST para o backend com os dados do usuário
      const response = await axios.post("http://localhost:5000/api/users", {
        name: nome,
        email,
        password: senha,
      });

      // Exibe uma mensagem de sucesso com o nome e email retornados pelo backend
      alert(
        "Usuário cadastrado com sucesso!!" +
          ` Nome: ${response.data.name} Email: ${response.data.email}`
      );

      // Redireciona o usuário para a página de login após o cadastro
      window.location.href = "/login";
    } catch (error) {
      // Em caso de erro na resposta do servidor
      if (error.response) {
        alert("Erro ao cadastrar usuário");
      } else {
        // Caso o erro seja na conexão com o servidor
        alert("Erro ao conectar ao servidor");
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      {/* Título do formulário */}
      <h2 className="text-2xl font-semibold text-center mb-6">Cadastrar</h2>

      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <div className="mb-4">
          <label htmlFor="nome" className="block mb-1 font-medium">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Atualiza o estado 'nome' ao digitar
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            placeholder="Digite seu Nome"
          />
        </div>

        {/* Campo E-mail */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email'
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            placeholder="Digite seu Email"
          />
        </div>

        {/* Campo Senha */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">
            Senha
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado 'senha'
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão de submit */}
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full mt-2"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
