import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Estado para controlar se o menu móvel está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para saber se o usuário está autenticado (logado)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect roda uma vez ao montar o componente para verificar se o usuário está logado
  useEffect(() => {
    // Busca dados do usuário no localStorage (pode ser um token ou objeto de usuário)
    const user = localStorage.getItem('user');
    // Se existir, marca como autenticado, senão não está autenticado
    setIsAuthenticated(!!user);
  }, []);

  // Função para abrir/fechar o menu móvel ao clicar no botão hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para deslogar o usuário
  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove dados do usuário do armazenamento local
    setIsAuthenticated(false);         // Atualiza estado para não autenticado
    window.location.href = '/';        // Redireciona para a página inicial (Home)
  };

  // JSX com os links de navegação, que muda se o usuário está logado ou não
  const menuLinks = (
    <>
      <a
        href="/"
        className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium mr-6"
      >
        Home
      </a>

      <a
        href="/about"
        className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium mr-6"
      >
        Sobre
      </a>

      <a
        href="/service"
        className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium mr-6"
      >
        Serviços
      </a>

      <a
        href="/contact"
        className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium mr-6"
      >
        Contato
      </a>

      {isAuthenticated ? (
        <>
          <a
            href="/profile"
            className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium mr-6"
          >
            Perfil
          </a>

          <button
            onClick={handleLogout}
            className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium"
          >
            Sair
          </button>
        </>
      ) : (
        <a
          href="/login"
          className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium"
        >
          Login
        </a>
      )}
    </>
  );

  return (
    // Container principal da navbar com background degradê e fixada no topo
    <nav className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-gray-800 py-0 px-2 shadow-lg fixed top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo ou nome do site */}
        <div className="flex items-center">
          <a
            href="/"
            className="ml-[7.5px] text-2xl font-extrabold text-white hover:text-purple-300 transition-colors duration-300"
          >
            Nova Serra Roxa
          </a>
        </div>

        {/* Links para desktop - aparecem em telas grandes */}
        <div className="hidden lg:flex space-x-8">{menuLinks}</div>

        {/* Botão para abrir/fechar menu móvel - aparece em telas pequenas */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Ícone hamburger */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu móvel - aparece quando o menu está aberto e em telas pequenas */}
      <div
        className={`lg:hidden bg-gradient-to-r from-purple-500 to-purple-800 p-4 transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {menuLinks}
      </div>
    </nav>
  );
};

export default Navbar;
