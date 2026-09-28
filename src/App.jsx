// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Composants
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// CSS
import "./App.css";


function App() {
  return (
    <BrowserRouter>

      {/* ================================
          NAVIGATION
          ================================ */}
      <Navbar />


      {/* ================================
          PAGES
          ================================ */}

      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page À propos */}
        <Route path="/a-propos" element={<About />} />

      </Routes>


      {/* ================================
          FOOTER
          ================================ */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;