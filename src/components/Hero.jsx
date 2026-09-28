function Hero() {
  return (
    <section id="accueil" className="hero">
      
      {/* Partie gauche : présentation */}
      <div className="hero-content">
<br /><br /><br />

       
        {/* Nom principal */}
        <h1>
         KANOUTE<span>SALIMATA.</span>
        </h1>

        {/* Métier */}
        <h2>
         DÉVELOPPEUSE <span> FULL STACK</span>
        </h2>

        {/* Présentation courte */}
        <p className="hero-description">
          Je transforme les idées en applications web modernes,
          fonctionnelles et adaptées aux besoins des utilisateurs.
        </p>

        {/* Boutons */}
        <div className="hero-actions">
          <a href="#projets" className="btn-primary">
            MES PROJETS
          </a>

          <a href="/cv.pdf" className="btn-secondary">
            MON CV 
          </a>
        </div>

        {/* Technologies */}
       

      </div>

      {/* Partie droite : interface développeur */}
      <div className="developer-interface">
 <div className="hero-tech">
          <span>Laravel</span>
          <span>React</span>
         
          <span>JavaScript</span>
          <span>MySQL</span> 
          <span>...</span> 
        </div>
        {/* Barre supérieure de la fausse interface */}
        <div className="interface-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="file-name">
            developer.js
          </span>
        </div>

        {/* Contenu façon code */}
        <div className="code-content">

          <p>
            <span className="code-number">01</span>
            <span className="code-purple">const</span>{" "}
            <span className="code-blue">developer</span> = {"{"}
          </p>

          <p className="code-indent">
            <span className="code-key">name:</span>{" "}
            <span className="code-green">'Salik'</span>,
          </p>

          <p className="code-indent">
            <span className="code-key">role:</span>{" "}
            <span className="code-green">'Full Stack Developer'</span>,
          </p>

          <p className="code-indent">
            <span className="code-key">frontend:</span> [
          </p>

          <p className="code-double-indent">
            <span className="code-green">'React'</span>,
          </p>

          <p className="code-double-indent">
            <span className="code-green">'Angular'</span>,
          </p> 

          <p className="code-double-indent">
            <span className="code-green">'JavaScript'</span>
          </p>

          <p className="code-indent">
            ],
          </p>

          <p className="code-indent">
            <span className="code-key">backend:</span>{" "}
            <span className="code-green">'Laravel'</span>,
          </p>

          <p className="code-indent">
            <span className="code-key">database:</span>{" "}
            <span className="code-green">'MySQL'</span>
          </p>

          <p>
            {"}"};
          </p>

          <p className="code-comment">
            // Toujours en train d'apprendre...
          </p>

          <p className="code-cursor">
            ▌
          </p>

        </div>

        {/* Petit indicateur en bas */}
        

      </div>

      

    </section>
  );
}

export default Hero;