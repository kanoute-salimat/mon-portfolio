import "./Footer.css";

function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="footer" id="footer"> <div className="footer-container">

```
    {/* IDENTITÉ */}
    <div className="footer-brand">
      <a href="#accueil" className="footer-logo">
        KANOUTE<span>SALIMATA.</span>
      </a>

      <p className="footer-role">
        Développeuse Full Stack
      </p>

      <p className="footer-description">
        Je conçois et développe des applications web
        modernes, fonctionnelles et adaptées aux besoins
        des utilisateurs.
      </p>

      <span className="footer-availability">
        <span className="availability-dot"></span>
        Ouverte aux opportunités professionnelles
      </span>
    </div>

    {/* NAVIGATION */}
    <div className="footer-column">
      <h3>Navigation</h3>

      <nav className="footer-nav" aria-label="Navigation de pied de page">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#experience">Expérience</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>

    {/* RÉSEAUX ET CONTACT */}
    <div className="footer-column">
      <h3>Me retrouver</h3>

      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/salimata-kanouté-a143a027b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter mon profil LinkedIn"
        >
          LinkedIn <span>↗</span>
        </a>

        <a
          href="https://github.com/kanoute-salimat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter mon profil GitHub"
        >
          GitHub <span>↗</span>
        </a>

        <a href="mailto:salikanoute30@gmail.com">
          E-mail <span>↗</span>
        </a>
      </div>

      <a
        className="footer-contact-link"
        href="mailto:salikanoute30@gmail.com"
      >
        Parlons de votre projet
        <span>→</span>
      </a>
    </div>

  </div>

  {/* BAS DU FOOTER */}
  <div className="footer-bottom">
    <p>
      © {currentYear} KANOUTE SALIMATA.
      Tous droits réservés.
    </p>

    <p className="footer-built">
      Conçu avec <span>♥</span> et développé avec React
    </p>

    <a href="#accueil" className="back-to-top">
      Retour en haut ↑
    </a>
  </div>
</footer>


);
}

export default Footer;
