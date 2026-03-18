function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-brand">
            <a href="#hero" className="nav-brand-link">
              <img
                src="/cv-esteban-web/Brand/logo_dark.png"
                alt="Logo Esteban Rivera"
                className="nav-logo"
              />
              <h1>Esteban Rivera</h1>
            </a>
          </div>

          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#education">Educación</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <p>Portafolio profesional</p>
          <h2>Esteban Andrés Rivera Novillo</h2>
          <h3>Software Engineer (Frontend)</h3>
          <p>
            Ingeniero en Electrónica y Automatización especializado en React,
            TypeScript y desarrollo web moderno. Este sitio reúne mi perfil,
            habilidades técnicas y proyectos.
          </p>
          
          <div className="button-group">
            <a href="#contact" className="btn btn-light">Contactar</a>
            <a
              href="/cv-esteban-web/Brand/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Ver CV en PDF
            </a>
          </div>
        </section>

        <section id="about">
          <h2>Perfil</h2>
          <p>
            Profesional con formación en ingeniería y fuerte orientación al
            desarrollo de software, con experiencia en mantenimiento industrial y
            enseñanza técnica, enfocado actualmente en desarrollo web moderno y
            tecnologías frontend.
          </p>
        </section>

        <section id="experience">
          <h2>Experiencia Profesional</h2>

          <div className="experience-card">
            <h3>Operador de Mantenimiento</h3>
            <p className="experience-company">Rhelec Ingeniería Cía. Ltda.</p>
            <p className="experience-meta">
              Diciembre 2023 – Noviembre 2024 · Sangolquí, Ecuador
            </p>

            <ul className="experience-list">
              <li>Mantenimiento eléctrico de media y baja tensión.</li>
              <li>Supervisión de grupos electrógenos y tableros.</li>
              <li>Gestión de alarmas y coordinación técnica.</li>
            </ul>
          </div>
        </section>

        <section id="skills">
          <h2>Habilidades Técnicas</h2>

          <div className="skills-group">
            <span className="skill-tag">React</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">Git & GitHub</span>
          </div>
        </section>

        <section id="education">
          <h2>Educación</h2>

          <div className="education-card">
            <h3>Ingeniería en Electrónica y Automatización</h3>
            <p className="education-company">
              Universidad de las Fuerzas Armadas – ESPE
            </p>
            <p className="education-meta">Quito, Ecuador</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contacto</h2>

          <div className="contact-card">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:estebanrivera200039@gmail.com">
                estebanrivera200039@gmail.com
              </a>
            </p>

            <p>
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+593995085634">+593 99 508 5634</a>
            </p>

            <div className="button-group">
              <a
                href="https://wa.me/593995085634"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Escribirme por WhatsApp
              </a>

              <a
                href="/cv-esteban-web/Brand/CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Ver CV en PDF
              </a>

              <a
                href="http://www.linkedin.com/in/estebanriveran"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Mi LinkedIn
              </a>

              <a
                href="https://github.com/earivera6/cv-esteban-web"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Mi GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;