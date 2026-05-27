import { useState } from "react";
import "./project.css";

const projects = [
    {
        title: "Portfolio immersif",
        description: "Une vitrine personnelle pensée pour la navigation fluide et l'effet waouh.",
        tech: ["React", "CSS 3D", "Responsive"],
        accent: "#7c3aed",
    },
    {
        title: "Etodo app",
        description: "Une application de gestion de tâches stockée dans une base de données.",
        tech: ["UI", "base de données"],
        accent: "#06b6d4",
    },
    {
        title: "Eliza",
        description: "Chatbot en bourse.",
        tech: ["IA", "marketing"],
        accent: "#f97316",
    },
    {
        title: "Yowl",
        description: "un site web qui ",
        tech: ["figma", "marketing", "design"],
        accent: "#22c55e",
    },
    {
        title: "JobAgregator",
        description: "Un agrégateur d'offres d'emploi pour les developpeur avec une interface épurée et des filtres intuitifs.",
        tech: ["Sécurité", "Design", "IA"],
        accent: "#ec4899",
    },
];

export function Project() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalProjects = projects.length;
    const step = 360 / totalProjects;

    const rotate = (direction) => {
        setActiveIndex((currentIndex) => (currentIndex + direction + totalProjects) % totalProjects);
    };

    return (
        <section className="project-container" id="project">
            <div className="project-shell">
                <div className="project-heading">
                    <div>
                        <h1 className="project-title">Mes projets</h1>
                    </div>

                    <div className="project-controls">
                        <button type="button" className="carousel-button" onClick={() => rotate(-1)} aria-label="Projet précédent">
                            ‹
                        </button>
                        <button type="button" className="carousel-button" onClick={() => rotate(1)} aria-label="Projet suivant">
                            ›
                        </button>
                    </div>
                </div>


                <div className="carousel-viewport">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateZ(-360px) rotateY(${activeIndex * -step}deg)` }}
                    >
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className={`project-card ${index === activeIndex ? "is-active" : "is-back"}`}
                                style={{
                                    transform: `rotateY(${index * step}deg) translateZ(360px) scale(${index === activeIndex ? 1.12 : 0.92})`,
                                    "--card-accent": project.accent,
                                }}
                            >
                                <div className="project-card-top">
                                    <span className="project-index">0{index + 1}</span>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="project-photo-frame" aria-label={`Aperçu photo du projet ${project.title}`}>
                                        <span className="project-photo-placeholder">Photo du projet</span>
                                    </div>
                                </div>

                                <div className="project-tags">
                                    {project.tech.map((item) => (
                                        <span key={item} className="project-tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="project-dots" aria-label="Position du carrousel">
                    {projects.map((project, index) => (
                        <button
                            key={project.title}
                            type="button"
                            className={`project-dot ${index === activeIndex ? "is-active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Aller au projet ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}