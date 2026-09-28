function Expertise() {
  return (
    <section id="competences" className="expertise-section">

      {/* =====================================================
          EN-TÊTE DE LA SECTION
          ===================================================== */}

      <div className="expertise-heading">

        {/* Numéro de la section */}
        <span>02</span>

        {/* Titre */}
        <div>
          <p className="expertise-label">
            MON EXPERTISE
          </p>

          <h2>
            Ce que je peux <span>construire.</span>
          </h2>
        </div>

      </div>


      {/* =====================================================
          CONTENU DES COMPÉTENCES
          ===================================================== */}

      <div className="expertise-grid">


        {/* =================================================
            FRONTEND
            ================================================= */}

        <div className="expertise-item">

          <div className="expertise-number">
            01
          </div>

          <div className="expertise-content">

            <h3>FRONTEND</h3>

            <p>
              Création d'interfaces web modernes,
              responsives et adaptées aux utilisateurs.
            </p>

            <div className="technology-list">
              <span>React</span>
              <span>Angular</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>

        </div>


        {/* =================================================
            BACKEND
            ================================================= */}

        <div className="expertise-item">

          <div className="expertise-number">
            02
          </div>

          <div className="expertise-content">

            <h3>BACKEND</h3>

            <p>
              Développement de fonctionnalités,
              API et logique métier pour les applications web.
            </p>

            <div className="technology-list">
              <span>Laravel</span>
              <span>PHP</span>
              <span>API REST</span>
            </div>

          </div>

        </div>


        {/* =================================================
            BASE DE DONNÉES
            ================================================= */}

        <div className="expertise-item">

          <div className="expertise-number">
            03
          </div>

          <div className="expertise-content">

            <h3>DATABASE</h3>

            <p>
              Organisation et gestion des données
              nécessaires au fonctionnement des applications.
            </p>

            <div className="technology-list">
              <span>MySQL</span>
              <span>SQL</span>
              <span>Relations</span>
            </div>

          </div>

        </div>


        {/* =================================================
            OUTILS
            ================================================= */}

        <div className="expertise-item">

          <div className="expertise-number">
            04
          </div>

          <div className="expertise-content">

            <h3>OUTILS</h3>

            <p>
              Utilisation d'outils permettant de développer,
              versionner et organiser les projets.
            </p>

            <div className="technology-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Expertise;