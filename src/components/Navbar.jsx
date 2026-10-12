
// On importe le composant React
// Ici, on n'a pas besoin d'importer React avec les versions modernes de React
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // La balise <nav> représente la barre de navigation
    <nav className="navbar">

      {/* Logo / Nom du développeur */}
     <a href="/" className="navbar-logo">
  <span className="logo-illustration">
    <span className="logo-screen">
      &lt;/&gt;
    </span>
  </span>

  
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
       

        {/* Lien vers la section Projets */}
      <Link to="/projets">
  PROJETS
</Link>

        {/* Lien vers la section Expérience */}
       <Link to="/experience">EXPÉRIENCE</Link>

        {/* Lien vers la section Contact */}
        <Link to="/contact">CONTACT</Link>
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

