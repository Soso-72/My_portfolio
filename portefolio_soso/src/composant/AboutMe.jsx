import "./AboutMe.css";

export function AboutMe() {
    return (

        <>
        <div className="about-me-gradients-up"></div>
        <section className="about-section" id="AboutMe">
            <div className="about-me-container">
                <div className="about-inner">
                    <header className="about-header">
                    </header>

                    <div className="about-content about-content--single">
                        <div className="about-text about-text--large">
                        <h1>À propos de moi</h1>
                        <p className="about-tag">Développeuse web • Étudiante Bachelor à Epitech</p>
                            <span className="accent-line" aria-hidden="true" />
                            <p>
                                Bonjour 👋 Je m'appelle Soraya. Passionnée par le développement web, j'aime transformer des idées
                                en interfaces fonctionnelles et esthétiques. Je privilégie la clarté, l'accessibilité et une expérience
                                visuelle soignée. Mon travail se concentre sur des interfaces performantes et agréables à utiliser.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
         <div className="about-me-gradients-down"></div>
        </>
    );
}

export default AboutMe;