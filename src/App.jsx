import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ServicePage from "./pages/servicePage";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import KnowPage from "./pages/knowPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Know" element={<KnowPage />} />
      </Routes>
    </Router>
  );
}

export default App;
