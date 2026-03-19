function Navbar() {
  return (
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
            <li><a href="#about" className="btn btn-dark">Sobre mí</a></li>
            <li><a href="#experience" className="btn btn-dark">Experiencia</a></li>
            <li><a href="#skills" className="btn btn-dark">Habilidades</a></li>
            <li><a href="#education" className="btn btn-dark">Educación</a></li>
            <li><a href="#contact" className="btn btn-dark">Contacto</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default Navbar;