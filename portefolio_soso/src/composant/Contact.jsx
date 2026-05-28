import "./Contact.css";

export function Contact() {
    const email = "soraya.catherine@epitech.eu";
    const phone = "+262 06 92 22 41 60";
    const github = "https://github.com/Soso-72";
    const linkedin = "https://www.linkedin.com/in/soraya-catherine-27b7a1335";

    return (
        <>
        <div className="gradient-contact"></div>
        <section className="contact-page" id="contact">
            <div className="contact-page-inner">
                <div className="contact-hero">
                    <span className="contact-kicker">Contact</span>
                    <h2>Discutons de votre projet</h2>
                    <p>
                        Si vous souhaitez me contacter pour un projet, une opportunité ou une collaboration,
                        vous pouvez me joindre directement via les moyens ci-dessous.
                    </p>
                </div>

                <div className="contact-grid">
                    <article className="contact-card contact-highlight">
                        <h3>Me contacter</h3>
                        <div className="contact-methods">
                            <a className="contact-method" href={`mailto:${email}`}>
                                <span className="contact-label">Email</span>
                                <span className="contact-value">{email}</span>
                            </a>

                            <a className="contact-method" href={`tel:${phone.replace(/\s/g, "")}`}>
                                <span className="contact-label">Téléphone</span>
                                <span className="contact-value">{phone}</span>
                            </a>
                        </div>
                    </article>

                    <article className="contact-card">
                        <h3>Réseaux</h3>
                        <div className="contact-links">
                            <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </article>

                    <article className="contact-card">
                        <h3>Disponibilité</h3>
                        <p>
                            Je suis ouverte aux stages, alternances et projets freelance.
                        </p>
                        <p className="contact-note">
                            Réponse rapide par email en priorité.
                        </p>
                    </article>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;
