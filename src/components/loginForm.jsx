import React, { useState } from "react";
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import { useNavigate } from "react-router-dom"; // Hook para navegação programada

const LoginForm = () => {
  // Estado para armazenar o email digitado pelo usuário
  const [email, setEmail] = useState('');
  // Estado para armazenar a senha digitada pelo usuário
  const [password, setSenha] = useState('');
  // Hook do React Router para navegar para outra rota após login
  const navigate = useNavigate();

  // Função chamada quando o formulário é submetido
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarregar a página

    try {
      // Envia uma requisição POST para a API de autenticação com email e senha
      const response = await axios.post("https://backend-portalturismo-kcl1.onrender.com/api/auth/login", {
        email,
        password
      });

      // Captura os dados do usuário retornados pela API (ex: token, nome, etc)
      const userData = response.data;

      // Armazena os dados do usuário no localStorage para persistência local
      localStorage.setItem("user", JSON.stringify(userData));

      // Alerta de sucesso para o usuário
      alert("usuario logado com sucesso!!");

      // Redireciona o usuário para a página inicial após login bem sucedido
      navigate("/");
    } catch (error) {
      // Se o servidor respondeu com erro (ex: credenciais incorretas)
      if (error.response) {
        alert("Erro ao logar usuário email ou senha incorretos");
      } else {
        // Se não foi possível conectar ao servidor (ex: backend offline)
        alert("erro ao conectar ao servidor");
      }
    }
  };

  return (
    // Container do formulário com estilo e largura máxima definida
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      {/* Título do formulário */}
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      {/* Formulário que chama handleSubmit quando enviado */}
      <form onSubmit={handleSubmit}>
        {/* Campo para email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email} // valor controlado pelo estado
            onChange={(e) => setEmail(e.target.value)} // atualiza estado ao digitar
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 text-sm sm:text-base"
            placeholder="Digite seu email"
          />
        </div>

        {/* Campo para senha */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 text-sm sm:text-base"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão para enviar o formulário */}
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full mt-2"
        >
          Entrar
        </button>
      </form>

      {/* Link para página de cadastro, caso o usuário não tenha conta */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem conta?{' '}
        <a href="/register" className="text-purple-600 hover:underline p-2">
          Cadastre-se
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
