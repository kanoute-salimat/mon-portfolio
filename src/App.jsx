import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import "./App.css";


function App() {
  return (
    <BrowserRouter>

      {/* Navigation présente sur toutes les pages */}
      <Navbar />

      {/* Pages du portfolio */}
      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page À propos */}
        <Route path="/a-propos" element={<About />} />

        {/* Page Projets */}
        <Route path="/projets" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Pied de page présent sur toutes les pages */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;