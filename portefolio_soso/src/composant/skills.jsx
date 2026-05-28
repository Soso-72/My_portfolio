import "./skills.css";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.jpg";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import dockerImg from "../assets/docker.png";
import nextjsImg from "../assets/nextjs.webp";
import nodejsImg from "../assets/noddejs.png";
import sqlImg from "../assets/sql.jpeg";

export function Skills() {
    const hardSkills = [
        { name: "HTML", img: htmlImg },
        { name: "CSS / SCSS", img: cssImg },
        { name: "JavaScript", img: jsImg },
        { name: "React", img: reactImg },
        { name: "Docker", img: dockerImg },
        { name: "Next.js", img: nextjsImg },
        { name: "Node.js", img: nodejsImg },
        { name: "SQL", img: sqlImg },
    ];

    const softSkills = [
        "Travail en équipe",
        "Adaptabilité",
        "Motivation",
        "Communication",
        "Autonomie",
    ];

    return (
        <>
        <section className="skills" id="skills">
            <div className="skills-glow skills-glow-left" aria-hidden="true" />
            <div className="skills-glow skills-glow-right" aria-hidden="true" />
            <div className="skills-inner">
                <header className="skills-header">
                    <span className="skills-kicker">Compétences</span>
                    <h2>Un profil orienté front-end, UI et bases techniques solides</h2>
                    <p>
                        J'aime construire des interfaces propres, lisibles et efficaces, avec une attention particulière
                        à l'expérience utilisateur et à la qualité visuelle.
                    </p>
                </header>

                <div className="skills-grid">
                    <section className="skills-panel">
                        <div className="panel-heading">
                            <span>Technologies que j’utilise</span>
                        </div>

                        <ul className="hard-list">
                            {hardSkills.map((s) => (
                                <li className="skill-item" key={s.name}>
                                    <span className="skill-icon-wrap">
                                        <img src={s.img} alt={s.name} className="skill-icon" />
                                    </span>
                                    <div className="skill-meta">
                                        <span className="skill-name">{s.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="skills-panel soft-panel">
                        <div className="panel-heading">
                            <span>Ce que j’apporte à une équipe</span>
                        </div>

                        <ul className="soft-list">
                            {softSkills.map((s) => (
                                <li className="block-skill" key={s}>
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="skills-bottom-glow" aria-hidden="true" />
        </section>
        <div className="gradiand-skill-down"></div>
        </>
    );
}

