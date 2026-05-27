import "./skills.css";

export function Skills() {
    const hardSkills = [
        { name: "HTML", level: 92 },
        { name: "CSS / SCSS", level: 90 },
        { name: "JavaScript", level: 86 },
        { name: "React", level: 84 },
        { name: "Docker", level: 70 },
    ];

    const softSkills = [
        "Travail en équipe",
        "Adaptabilité",
        "Motivation",
        "Communication",
        "Autonomie",
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-inner">
                <div className="skills-column hard">
                    <h2>Hard Skills</h2>
                    <ul className="hard-list">
                        {hardSkills.map((s) => (
                            <li className="skill-item" key={s.name}>
                                <div className="skill-meta">
                                    <span className="skill-name">{s.name}</span>
                                    <span className="skill-level">{s.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: `${s.level}%` }} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
         
                <div className="skills-column soft">
                    <h2>Soft Skills</h2>
                    <ul className="soft-list">
                        {softSkills.map((s) => (
                            <li className="block-skill" key={s}>
                                <h5>{s}</h5>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

