function App() {
  return (
    <div>
      <header>
        <nav>
          <h1>Esteban Rivera</h1>
          <ul>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h2>Ingeniero y desarrollador</h2>
          <p>
            Sitio personal para mostrar mi perfil, experiencia y portafolio técnico.
          </p>
          <a href="#projects">Ver proyectos</a>
        </section>

        <section id="about">
          <h2>Sobre mí</h2>
          <p>
            Soy Esteban Rivera y este sitio reúne mi perfil profesional, mis habilidades
            y ejemplos de trabajos en programación, diseño 3D y automatización.
          </p>
        </section>

        <section id="skills">
          <h2>Habilidades</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git y GitHub</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Proyectos</h2>
          <p>Aquí luego iremos agregando tus proyectos y categorías del portafolio.</p>
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <p>Email: estebanrivera200039@gmail.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;