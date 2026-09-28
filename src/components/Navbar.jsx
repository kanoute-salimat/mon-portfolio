
// On importe le composant React
// Ici, on n'a pas besoin d'importer React avec les versions modernes de React
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // La balise <nav> représente la barre de navigation
    <nav className="navbar">

      {/* Logo / Nom du développeur */}
      <a href="#accueil" className="navbar-logo">
        SALIK
      </a>

      {/* Menu de navigation */}
      <ul className="navbar-menu">

      <Link to="/">
  ACCUEIL
</Link>

<Link to="/a-propos">
  À PROPOS
</Link>

        {/* Lien vers la section Compétences */}
        <li>
          <a href="#competences">Compétences</a>
        </li>

        {/* Lien vers la section Projets */}
        <li>
          <a href="#projets">Projets</a>
        </li>

        {/* Lien vers la section Expérience */}
        <li>
          <a href="#experience">Expérience</a>
        </li>

        {/* Lien vers la section Contact */}
        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Bouton qui servira plus tard à changer le thème */}
      <button className="theme-button" aria-label="Changer le thème">
        ☾
      </button>

    </nav>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans App.jsx
export default Navbar;

