import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa o roteamento do React Router
import Home from "./pages/home";               // Página Home
import ServicePage from "./pages/servicePage"; // Página de Serviços
import ContactPage from "./pages/contactPage"; // Página de Contato
import AboutPage from "./pages/aboutPage";     // Página Sobre
import LoginPage from "./pages/loginPage";     // Página de Login
import RegisterPage from "./pages/registerPage"; // Página de Registro
import KnowPage from "./pages/knowPage";       // Página de Conhecimento/Sobre

function App() {
  return (
    // Router envolve toda a aplicação para ativar o roteamento
    <Router>
      {/* Define as rotas da aplicação */}
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a página de serviços */}
        <Route path="/service" element={<ServicePage />} />

        {/* Rota para a página de contato */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Rota para a página sobre */}
        <Route path="/about" element={<AboutPage />} />

        {/* Rota para a página de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rota para a página de registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Rota para a página de conhecimento (Know) */}
        <Route path="/Know" element={<KnowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
