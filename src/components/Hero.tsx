function Hero() {
  return (
    <section id="hero">
      <p>Portafolio profesional</p>
      <h2>Esteban Andrés Rivera Novillo</h2>
      <h3>Software Engineer (Frontend)</h3>
      <p>
        Ingeniero en Electrónica y Automatización especializado en React,
        TypeScript y desarrollo web moderno. 
      </p>
      <p>
        Este sitio reúne mi perfil,
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
  );
}

export default Hero;