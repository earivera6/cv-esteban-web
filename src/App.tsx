import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <>
      <Navbar
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        language={language}
      />

      <main>
        <section id="hero" className="section hero">
          <h1>
            Esteban Andrés Rivera Novillo
          </h1>
          <h2>Software Engineer (Frontend)</h2>
          <p>
            Ingeniero en Electrónica y Automatización especializado en React y
            TypeScript. Disponible para trabajo remoto.
          </p>
        </section>

        <section id="about" className="section">
          <h2>Perfil</h2>
          <p>
            Profesional con formación en ingeniería y fuerte orientación al
            desarrollo de software. Experiencia en mantenimiento industrial y
            enseñanza técnica. Enfocado actualmente en desarrollo web moderno y
            tecnologías frontend.
          </p>
        </section>

        <section id="experience" className="section">
          <h2>Experiencia Profesional</h2>
          <h3>Operador de Mantenimiento – Rhelec Ingeniería Cía. Ltda.</h3>
          <p>Diciembre 2023 – Noviembre 2024 · Sangolquí, Ecuador</p>
          <ul>
            <li>Mantenimiento eléctrico de media y baja tensión.</li>
            <li>Supervisión de grupos electrógenos y tableros.</li>
            <li>Gestión de alarmas y coordinación técnica.</li>
          </ul>
        </section>

        <section id="skills" className="section">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="education" className="section">
          <h2>Educación</h2>
          <h3>Ingeniería en Electrónica y Automatización</h3>
          <p>Universidad de las Fuerzas Armadas – ESPE · Quito, Ecuador</p>
        </section>

        <section id="contact" className="section">
          <h2>Contacto</h2>
          <p>Email: estebanrivera200039@gmail.com</p>
          <p>Teléfono: 0995085634</p>
        </section>
      </main>
    </>
  );
}

export default App;