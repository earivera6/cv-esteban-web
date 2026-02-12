import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const content = {
    es: {
      heroRole: "Software Engineer (Frontend)",
      heroDesc:
        "Ingeniero en Electrónica y Automatización especializado en React y TypeScript. Disponible para trabajo remoto.",
      aboutTitle: "Perfil",
      aboutDesc:
        "Profesional con formación en ingeniería y fuerte orientación al desarrollo de software. Experiencia en mantenimiento industrial y enseñanza técnica. Enfocado actualmente en desarrollo web moderno y tecnologías frontend.",
      experienceTitle: "Experiencia Profesional",
      skillsTitle: "Habilidades Técnicas",
      educationTitle: "Educación",
      contactTitle: "Contacto",
      contactBtn: "Contactar",
      downloadBtn: "Descargar CV",
    },
    en: {
      heroRole: "Frontend Software Engineer",
      heroDesc:
        "Electronics and Automation Engineer specialized in React and TypeScript. Available for remote work.",
      aboutTitle: "Profile",
      aboutDesc:
        "Engineering professional with strong focus on software development. Experience in industrial maintenance and technical instruction. Currently focused on modern web technologies and frontend development.",
      experienceTitle: "Professional Experience",
      skillsTitle: "Technical Skills",
      educationTitle: "Education",
      contactTitle: "Contact",
      contactBtn: "Contact",
      downloadBtn: "Download CV",
    },
  };

  const t = content[language];

  return (
    <>
      <Navbar
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        language={language}
        theme={theme}
      />

      <main className="main">

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1>Esteban Andrés Rivera Novillo</h1>
              <h2>{t.heroRole}</h2>
              <p>{t.heroDesc}</p>

              <div className="hero-buttons">
                <a href="#contact" className="btn primary">
                  {t.contactBtn}
                </a>
                <a
                  href="/cv-esteban-web/brand/CV.pdf"
                  className="btn secondary"
                >
                  {t.downloadBtn}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutDesc}</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <h2>{t.experienceTitle}</h2>

            <div className="experience-item">
              <h3>Operador de Mantenimiento</h3>
              <span className="company">
                Rhelec Ingeniería Cía. Ltda.
              </span>
              <span className="meta">
                Diciembre 2023 – Noviembre 2024 · Sangolquí, Ecuador
              </span>

              <ul>
                <li>Mantenimiento eléctrico de media y baja tensión.</li>
                <li>Supervisión de grupos electrógenos y tableros.</li>
                <li>Gestión de alarmas y coordinación técnica.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <h2>{t.skillsTitle}</h2>
            <ul className="skills-list">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="container">
            <h2>{t.educationTitle}</h2>
            <h3>Ingeniería en Electrónica y Automatización</h3>
            <p>
              Universidad de las Fuerzas Armadas – ESPE · Quito, Ecuador
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2>{t.contactTitle}</h2>
            <p>Email: estebanrivera200039@gmail.com</p>
            <p>Teléfono: 0995085634</p>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;