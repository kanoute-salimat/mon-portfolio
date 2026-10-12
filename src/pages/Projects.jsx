import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">

      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section className="projects-intro">

        {/* Numéro de la page */}
        <span className="projects-number">
          01
        </span>

        {/* Petit titre */}
        <p className="projects-label">
          MES RÉALISATIONS
        </p>

        {/* Grand titre */}
        <h1>
          DES PROJETS
          <br />
          <span>CONCRETS.</span>
        </h1>

        {/* Introduction */}
        <p className="projects-description">
          Découvrez les applications web et solutions métier
          que j'ai conçues et développées avec Laravel.
        </p>

      </section>


      {/* =====================================================
          LISTE DES PROJETS
          ===================================================== */}

      <section className="projects-list">


        {/* =================================================
            PROJET 01 — KOMPTECH-CIMAT
            ================================================= */}

        <article className="project-item">

          {/* Aperçu du projet */}
          <div className="project-image">

            <div className="project-image-placeholder">
              KOMPTECH
              <br />
              CIMAT
            </div>

          </div>


          {/* Informations du projet */}
          <div className="project-info">

            {/* Numéro + statut */}
            <div className="project-meta">
              <span>01</span>
              <span>EN LIGNE</span>
            </div>


            {/* Nom */}
            <h2>
              KOMPTECH-CIMAT
            </h2>


            {/* Description */}
            <p>
              Site web institutionnel permettant de présenter
              l'entreprise, ses activités et les formations
              qu'elle propose.
            </p>

            <p>
              La plateforme permet également aux utilisateurs
              de s'inscrire aux formations et aux séminaires
              organisés par l'entreprise.
            </p>


            {/* Technologies */}
            <div className="project-technologies">

              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>

            </div>


            {/* Lien */}
            <a
              href="https://komptech-cimat.net/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VISITER LE PROJET ↗
            </a>

          </div>

        </article>


        {/* =================================================
            PROJET 02 — CIMAT IATA E-LEARNING
            ================================================= */}

        <article className="project-item">

          {/* Aperçu */}
          <div className="project-image">

            <div className="project-image-placeholder">
              CIMAT IATA
              <br />
              E-LEARNING
            </div>

          </div>


          {/* Informations */}
          <div className="project-info">

            <div className="project-meta">
              <span>02</span>
              <span>EN LIGNE</span>
            </div>


            <h2>
              CIMAT IATA — E-LEARNING
            </h2>


            <p>
              Plateforme de formation en ligne permettant aux
              apprenants de suivre des cours à distance grâce
              à la visioconférence.
            </p>

            <p>
              Les formateurs peuvent gérer les cours, exercices,
              corrections, formations et apprenants depuis leur
              espace dédié.
            </p>


            {/* Fonctionnalités */}
            <div className="project-features">

              <span>Cours en ligne</span>
              <span>Visioconférence</span>
              <span>Exercices</span>
              <span>Corrections</span>
              <span>Gestion des apprenants</span>
              <span>Tableaux de bord</span>

            </div>


            {/* Technologies */}
            <div className="project-technologies">

              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Jitsi Meet</span>
              <span>JavaScript</span>

            </div>


            {/* Lien */}
            <a
              href="#"
              className="project-link"
            >
              VISITER LE PROJET ↗
            </a>

          </div>

        </article>


        {/* =================================================
            PROJET 03 — FLYFRET SITE WEB
            ================================================= */}

        <article className="project-item">

          {/* Aperçu */}
          <div className="project-image">

            <div className="project-image-placeholder">
              FLYFRET
              <br />
              WEB
            </div>

          </div>


          {/* Informations */}
          <div className="project-info">

            <div className="project-meta">
              <span>03</span>
              <span>EN LIGNE</span>
            </div>


            <h2>
              FLYFRET
            </h2>


            <p>
              Site web permettant de présenter les services
              de l'entreprise et d'accompagner les clients
              dans l'enregistrement de leurs colis.
            </p>

            <p>
              Le client peut renseigner son colis, consulter
              le montant de l'expédition et prendre connaissance
              des conditions avant de valider sa demande.
            </p>


            {/* Technologies */}
            <div className="project-technologies">

              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>

            </div>


            {/* Lien */}
            <a
              href="https://flyfret.net/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              VISITER LE PROJET ↗
            </a>

          </div>

        </article>


        {/* =================================================
            PROJET 04 — FLYFRET APPLICATION INTERNE
            ================================================= */}

        <article className="project-item project-local">

          {/* Aperçu */}
          <div className="project-image">

            <div className="project-image-placeholder">
              FLYFRET
              <br />
              MANAGEMENT
            </div>

          </div>


          {/* Informations */}
          <div className="project-info">

            <div className="project-meta">
              <span>04</span>

              <span className="local-label">
                PROJET LOCAL
              </span>
            </div>


            <h2>
              FLYFRET — APPLICATION INTERNE
            </h2>


            <p>
              Application web interne destinée à gérer les
              opérations logistiques et à assurer la traçabilité
              des activités de l'entreprise.
            </p>

            <p>
              Elle permet notamment de gérer les colis, les
              clients, les lots, les opérations logistiques
              ainsi que les dépenses de l'entreprise.
            </p>


            {/* Fonctionnalités */}
            <div className="project-features">

              <span>Gestion des colis</span>
              <span>Gestion des lots</span>
              <span>Suivi logistique</span>
              <span>Gestion des clients</span>
              <span>Notifications e-mail</span>
              <span>Gestion des dépenses</span>
              <span>Traçabilité</span>
              <span>Tableaux de bord</span>

            </div>


            {/* Technologies */}
            <div className="project-technologies">

              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>JavaScript</span>

            </div>


            {/* Statut */}
            <span className="project-status">
              ● DISPONIBLE EN LOCAL
            </span>

          </div>

        </article>

      </section>


      {/* =====================================================
          FIN DE LA PAGE
          ===================================================== */}

      <section className="projects-end">

        <p>
          04 PROJETS — 01 TECHNOLOGIE PRINCIPALE
        </p>

        <h2>
          CONSTRUIRE DES SOLUTIONS
          <br />
          <span>UTILES.</span>
        </h2>

      </section>

    </main>
  );
}

export default Projects;