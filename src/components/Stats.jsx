function Stats() {
  return (
    <section className="stats-section" id="parcours">

      {/* ==========================================
          EN-TÊTE DE LA SECTION
      ========================================== */}

    <div className="stats-heading">

  {/* Numéro de section */}
  <div className="heading-number">
    01
  </div>

  {/* Titre principal */}
  <div className="heading-content">

    <span>EXPÉRIENCE &amp; PARCOURS</span>

    <h2>
      Des idées transformées
      <br />
      en <em>expériences digitales.</em>
    </h2>

  </div>

  {/* Description */}
  <div className="heading-description">

    <p>
      Chaque projet représente une nouvelle étape dans mon parcours.
      Je conçois et développe des applications web modernes, pensées
      pour répondre à des besoins réels et offrir une expérience simple,
      fluide et efficace aux utilisateurs.
    </p>

    <div className="heading-line">
      <span></span>
    </div>

    <small>
      DÉVELOPPEMENT WEB · UI · TECHNOLOGIES
    </small>

  </div>

</div>


      {/* ==========================================
          STATISTIQUES
      ========================================== */}

      <div className="stats-container">


        {/* ==============================
            STAT 01
        ============================== */}

        <article className="stat-card">

          <div className="stat-top">
            <span className="stat-number-small">
              01
            </span>

            <span className="stat-symbol">
              ↗
            </span>
          </div>

          <div className="stat-main">
            <strong>
              03<span>+</span>
            </strong>
          </div>

          <div className="stat-bottom">
            <h3>ANNÉES</h3>
            <p>de pratique</p>
          </div>

          <div className="stat-line"></div>

        </article>


        {/* ==============================
            STAT 02
        ============================== */}

        <article className="stat-card">

          <div className="stat-top">
            <span className="stat-number-small">
              02
            </span>

            <span className="stat-symbol">
              ◇
            </span>
          </div>

          <div className="stat-main">
            <strong>
              04<span>+</span>
            </strong>
          </div>

          <div className="stat-bottom">
            <h3>PROJETS</h3>
            <p>réalisés</p>
          </div>

          <div className="stat-line"></div>

        </article>


        {/* ==============================
            STAT 03
        ============================== */}

        <article className="stat-card">

          <div className="stat-top">
            <span className="stat-number-small">
              03
            </span>

            <span className="stat-symbol">
              ◎
            </span>
          </div>

          <div className="stat-main">
            <strong>
              06<span>+</span>
            </strong>
          </div>

          <div className="stat-bottom">
            <h3>TECHNOLOGIES</h3>
            <p>utilisées</p>
          </div>

          <div className="stat-line"></div>

        </article>


        {/* ==============================
            STAT 04
        ============================== */}

        <article className="stat-card stat-card-last">

          <div className="stat-top">
            <span className="stat-number-small">
              04
            </span>

            <span className="stat-symbol">
              ∞
            </span>
          </div>

          <div className="stat-main">
            <strong>∞</strong>
          </div>

          <div className="stat-bottom">
            <h3>APPRENTISSAGE</h3>
            <p>en continu</p>
          </div>

          <div className="stat-line"></div>

        </article>

      </div>


      {/* ==========================================
          PETITE LIGNE DE FIN
      ========================================== */}

      

    </section>
  );
}

export default Stats;