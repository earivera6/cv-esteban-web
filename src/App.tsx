function App() {
  return (
    <div>
      <header>
        <nav>
          <h1>Esteban Rivera</h1>
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
          <h2>Software Engineer (Frontend)</h2>
          <p>
            Ingeniero en Electrónica y Automatización especializado en React y
            TypeScript. Disponible para trabajo remoto.
          </p>
          <a href="#contact">Contactar</a>
        </section>

        <section id="about">
          <h2>Perfil</h2>
          <p>
            Profesional con formación en ingeniería y fuerte orientación al
            desarrollo de software. Experiencia en mantenimiento industrial y
            enseñanza técnica. Enfocado actualmente en desarrollo web moderno y
            tecnologías frontend.
          </p>
        </section>

        <section id="experience">
          <h2>Experiencia Profesional</h2>

          <h3>Operador de Mantenimiento</h3>
          <p><strong>Rhelec Ingeniería Cía. Ltda.</strong></p>
          <p>Diciembre 2023 – Noviembre 2024 · Sangolquí, Ecuador</p>

          <ul>
            <li>Mantenimiento eléctrico de media y baja tensión.</li>
            <li>Supervisión de grupos electrógenos y tableros.</li>
            <li>Gestión de alarmas y coordinación técnica.</li>
          </ul>
        </section>

        <section id="skills">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="education">
          <h2>Educación</h2>
          <h3>Ingeniería en Electrónica y Automatización</h3>
          <p>Universidad de las Fuerzas Armadas – ESPE · Quito, Ecuador</p>
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <p>Email: estebanrivera200039@gmail.com</p>
          <p>Teléfono: 0995085634</p>
          <p>
            <a href="/cv-esteban-web/Brand/CV.pdf" target="_blank" rel="noreferrer">
              Ver CV en PDF
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;