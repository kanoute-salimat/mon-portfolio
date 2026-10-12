import { FaLinkedinIn } from "react-icons/fa";

import "./Contact.css";

function Contact() {
return ( <main className="contact-page">

```
  {/* Fond décoratif avec le titre en arrière-plan */}
  <div className="contact-background-title" aria-hidden="true">
    CONTACT
  </div>

  {/* Panneau principal */}
  <section className="contact-panel">

    {/* Partie supérieure : coordonnées et formulaire */}
    <div className="contact-panel-top">

      {/* Coordonnées */}
      <div className="contact-information">
        <span className="contact-eyebrow">
         CONTACTEZ-NOUS.
        </span>

        <h1>
          GET IN
          <br />
          <span>TOUCH.</span>
        </h1>

        <p className="contact-description">
          Vous avez un projet web, une idée ou une opportunité
          professionnelle ? Contactez-moi pour que nous puissions
          échanger sur vos besoins.
        </p>

        <div className="contact-details">

          <a href="mailto:salikanoute30@gmail.com">
            <span className="contact-detail-icon">@</span>
            <span>salikanoute30@gmail.com</span>
          </a>

          <a href="tel:+2250789648493">
            <span className="contact-detail-icon">↗</span>
            <span>+225 07 89 64 84 93</span>
          </a>

          <a
            href="https://www.linkedin.com/in/salimata-kanouté-a143a027b/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-icon linkedin-icon">
  <FaLinkedinIn />
</span>

<span>Mon profil LinkedIn</span>
          </a>

          <a
            href="https://github.com/kanoute-salimat"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-icon">⌘</span>
            <span>GitHub — kanoute-salimat</span>
          </a>

        </div>
      </div>

      {/* Formulaire flottant */}
      <div className="contact-form-box">

        <div className="contact-form-heading">
          <span className="contact-form-number">01 / MESSAGE</span>
          <h2>DITES-MOI TOUT.</h2>
          <p>Parlons de votre projet.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();

            const form = event.currentTarget;
            const data = new FormData(form);

            const name = data.get("name");
            const email = data.get("email");
            const subject = data.get("subject");
            const message = data.get("message");

            const body =
              `Nom : ${name}\n` +
              `Email : ${email}\n\n` +
              `${message}`;

            const mailto =
              `mailto:salikanoute30@gmail.com` +
              `?subject=${encodeURIComponent(subject)}` +
              `&body=${encodeURIComponent(body)}`;

            window.location.href = mailto;
          }}
        >

          <label htmlFor="contact-name">VOTRE NOM</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Ex. : Aminata Traoré"
            required
          />

          <label htmlFor="contact-email">VOTRE EMAIL</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="nom@exemple.com"
            required
          />

          <label htmlFor="contact-subject">SUJET</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Objet de votre message"
            required
          />

          <label htmlFor="contact-message">VOTRE MESSAGE</label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="Parlez-moi de votre projet..."
            required
          />

          <button type="submit" className="contact-submit">
            <span>ENVOYER LE MESSAGE</span>
            <span className="contact-submit-arrow">↗</span>
          </button>

          <p className="contact-form-note">
            Votre application de messagerie s'ouvrira pour envoyer le message.
          </p>

        </form>
      </div>
    </div>

   
  </section>
</main>


);
}

export default Contact;
