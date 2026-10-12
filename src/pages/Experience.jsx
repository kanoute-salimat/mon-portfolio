import "./Experience.css";

function Experience() {
  return (
    <main className="experience-page">

      {/* ==================================================
          INTRODUCTION
      ================================================== */}
      <section className="experience-hero">

        <div className="experience-hero-number">
          01
        </div>

        <div className="experience-hero-content">

          <p className="experience-label">
            MON PARCOURS PROFESSIONNEL
          </p>

          <h1>
            EXPÉRIENCE
            <br />
            <span>&amp; ÉVOLUTION.</span>
          </h1>

          <p className="experience-hero-description">
            De mon premier stage à mon expérience en entreprise,
            chaque étape m'a permis de développer mes compétences
            en développement web et de travailler sur des projets
            concrets.
          </p>

        </div>

      </section>


      {/* ==================================================
          PARCOURS
      ================================================== */}
      <section className="career-section">

        <div className="career-heading">

          <div className="career-heading-number">
            02
          </div>

          <div>
            <p>MON PARCOURS</p>

            <h2>
              APPRENDRE.
              <br />
              <span>PRATIQUER.</span>
              <br />
              ÉVOLUER.
            </h2>
          </div>

        </div>


        {/* ==================================================
            TIMELINE
        ================================================== */}
        <div className="career-timeline">


          {/* ==================================================
              EXPÉRIENCE 01
          ================================================== */}
          <article className="career-item">

            <div className="career-marker">
              <span>01</span>
            </div>

            <div className="career-period">
              <span>STAGE D'ÉCOLE</span>
            </div>

            <div className="career-content">

              <div className="career-header">

                <div>
                  <p className="career-type">
                    PREMIÈRE EXPÉRIENCE
                  </p>

                  <h3>
                    KOMPTECH-CIMAT
                  </h3>

                  <p className="career-role">
                    Stagiaire — Développement Web
                  </p>
                </div>

                <span className="career-number">
                  01
                </span>

              </div>


              <p className="career-description">
                C'est au cours de mon stage d'école chez
                KOMPTECH-CIMAT que j'ai commencé à développer
                concrètement mes compétences en développement web.
              </p>

              <p className="career-description">
                Cette expérience m'a notamment permis d'apprendre
                et de pratiquer Laravel en travaillant directement
                sur des projets réels.
              </p>


              {/* Projets réalisés */}
              <div className="career-projects">

                <div className="career-project">

                  <span>01</span>

                  <div>
                    <h4>
                      SITE KOMPTECH-CIMAT
                    </h4>

                    <p>
                      Développement du site web de l'entreprise
                      avec présentation de ses activités et
                      inscription aux formations et séminaires.
                    </p>
                  </div>

                </div>


                <div className="career-project">

                  <span>02</span>

                  <div>
                    <h4>
                      CIMAT-IATA E-LEARNING
                    </h4>

                    <p>
                      Conception et développement d'une plateforme
                      de formation en ligne pour les apprenants,
                      formateurs et administrateurs.
                    </p>
                  </div>

                </div>

              </div>


              {/* Compétences */}
              <div className="career-skills">

                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>HTML / CSS</span>
                <span>Design graphique</span>

              </div>

            </div>

          </article>


          {/* ==================================================
              EXPÉRIENCE 02
          ================================================== */}
          <article className="career-item">

            <div className="career-marker">
              <span>02</span>
            </div>

            <div className="career-period">
              <span>STAGE DE PERFECTIONNEMENT</span>
            </div>

            <div className="career-content">

              <div className="career-header">

                <div>
                  <p className="career-type">
                    APPROFONDISSEMENT
                  </p>

                  <h3>
                    FLYFRET
                  </h3>

                  <p className="career-role">
                    Stagiaire — Développement Web
                  </p>
                </div>

                <span className="career-number">
                  02
                </span>

              </div>


              <p className="career-description">
                Après mon stage d'école, j'ai rejoint FlyFret
                dans le cadre d'un stage de perfectionnement.
                Cette nouvelle expérience m'a permis d'approfondir
                mes compétences et de travailler sur des besoins
                réels d'une entreprise.
              </p>


              <div className="career-missions">

                <div>
                  <span>01</span>
                  <p>
                    Développement et amélioration de fonctionnalités
                    avec Laravel.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Travail sur la gestion des colis et des
                    opérations logistiques.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Gestion des données et interactions avec
                    la base de données.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Participation à la création de supports
                    visuels et d'affiches.
                  </p>
                </div>

              </div>


              <div className="career-skills">

                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>Git</span>
                <span>Design</span>

              </div>

            </div>

          </article>


          {/* ==================================================
              EXPÉRIENCE 03
          ================================================== */}
          <article className="career-item career-current">

            <div className="career-marker">
              <span>03</span>
            </div>

            <div className="career-period">
              <span>CDD</span>
            </div>

            <div className="career-content">

              <div className="career-header">

                <div>
                  <p className="career-type">
                    EXPÉRIENCE PROFESSIONNELLE
                  </p>

                  <h3>
                    FLYFRET
                  </h3>

                  <p className="career-role">
                    Développeuse Web, Applications
                    &amp; Chargée de communication visuelle
                  </p>
                </div>

                <span className="career-number">
                  03
                </span>

              </div>


              <p className="career-description">
                Mon stage de perfectionnement chez FlyFret
                a ensuite abouti à un CDD. J'ai continué à
                travailler sur les applications web de
                l'entreprise et sur différentes fonctionnalités
                répondant aux besoins métier.
              </p>


              <div className="career-missions">

                <div>
                  <span>01</span>

                  <p>
                    Développement et évolution d'applications
                    web avec Laravel.
                  </p>
                </div>

                <div>
                  <span>02</span>

                  <p>
                    Gestion des colis, clients, lots et
                    opérations logistiques.
                  </p>
                </div>

                <div>
                  <span>03</span>

                  <p>
                    Développement de fonctionnalités de suivi
                    et de traçabilité.
                  </p>
                </div>

                <div>
                  <span>04</span>

                  <p>
                    Participation aux fonctionnalités liées
                    à la gestion interne et aux dépenses.
                  </p>
                </div>

                <div>
                  <span>05</span>

                  <p>
                    Création d'affiches et de supports de
                    communication visuelle.
                  </p>
                </div>

              </div>


              <div className="career-skills">

                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>Git</span>
                <span>Design graphique</span>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==================================================
          FORMATION
      ================================================== */}
      <section className="experience-education">

        <div className="education-number">
          03
        </div>

        <div className="education-content">

          <p className="experience-label">
            FORMATION
          </p>

          <h2>
            TECHNOLOGIES DU WEB
            <br />
            <span>ET IMAGES NUMÉRIQUES.</span>
          </h2>

          <div className="education-details">

            <div>
  <span>ÉTABLISSEMENT</span>
  <strong>ESATIC  </strong>
  
</div>

            <div>
              <span>NIVEAU</span>
              <strong>LICENCE 3</strong>
            </div>

            <div>
              <span>DOMAINE</span>
              <strong>WEB &amp; NUMÉRIQUE</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CE QUE J'AI APPRIS
      ================================================== */}
      <section className="experience-learning">

        <div className="learning-heading">

          <span>04</span>

          <div>
            <p>AU FIL DES EXPÉRIENCES</p>

            <h2>
              CE QUE
              <br />
              <span>J'AI APPRIS.</span>
            </h2>
          </div>

        </div>


        <div className="learning-grid">

          <div className="learning-item">
            <span>01</span>
            <h3>APPRENDRE</h3>
            <p>
              Acquérir de nouvelles compétences en travaillant
              sur des projets concrets.
            </p>
          </div>

          <div className="learning-item">
            <span>02</span>
            <h3>CONCEVOIR</h3>
            <p>
              Comprendre un besoin et réfléchir à une solution
              adaptée avant de la développer.
            </p>
          </div>

          <div className="learning-item">
            <span>03</span>
            <h3>DÉVELOPPER</h3>
            <p>
              Transformer une idée en application web
              fonctionnelle et évolutive.
            </p>
          </div>

          <div className="learning-item">
            <span>04</span>
            <h3>ÉVOLUER</h3>
            <p>
              Continuer à apprendre et améliorer mes compétences
              à travers chaque nouveau projet.
            </p>
          </div>

        </div>

      </section>


      {/* ==================================================
          CONCLUSION
      ================================================== */}
   

    </main>
  );
}

export default Experience;