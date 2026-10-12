import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Identité */}
        <div className="footer-brand">
          <h2>
            KANOUTE<span>SALIMATA.</span>
          </h2>

          <p>
            Développeuse Full Stack
          </p>
        </div>


        {/* Navigation */}
    


        {/* Réseaux */}
        <div className="footer-socials">

          <a
            href="https://www.linkedin.com/in/salimata-kanouté-a143a027b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>


      {/* Ligne du bas */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} KANOUTE SALIMATA
        </span>

        <span>
          Conçu & développé avec React
        </span>

      </div>

    </footer>
  );
}

export default Footer;