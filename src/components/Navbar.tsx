import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileProjectsMenu, setShowMobileProjectsMenu] = useState(false);
  const base = import.meta.env.BASE_URL;

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setShowMobileProjectsMenu(false);
    setShowProjectsMenu(false);
  };

  return (
    <header>
      <nav>
        <div className="nav-brand">
          <Link to="/" className="nav-brand-link">
            <img
              src={`${base}Brand/logo_dark.png`}
              alt="Logo Esteban Rivera"
              className="nav-logo"
            />
            <h1>Esteban Rivera</h1>
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setShowMobileMenu(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className="nav-menu">
          <li><a href={`${base}#about`} className="btn btn-dark" onMouseLeave={() => setShowProjectsMenu(false)}>Sobre mí</a></li>
          <li><a href={`${base}#experience`} className="btn btn-dark" onMouseLeave={() => setShowProjectsMenu(false)}>Experiencia</a></li>
          <li><a href={`${base}#skills`} className="btn btn-dark" onMouseLeave={() => setShowProjectsMenu(false)}>Habilidades</a></li>
          <li><a href={`${base}#education`} className="btn btn-dark" onMouseLeave={() => setShowProjectsMenu(false)}>Educación</a></li>
          <li><a href={`${base}#contact`} className="btn btn-dark" onMouseLeave={() => setShowProjectsMenu(false)}>Contacto</a></li>

          <li
            className="projects-dropdown"
            onMouseEnter={() => setShowProjectsMenu(true)}
          >
            <div className="projects-trigger">
              <Link to="/projects" className="btn btn-dark">
                Proyectos
              </Link>

              <button
                type="button"
                className="projects-toggle"
                onClick={() => setShowProjectsMenu((prev) => !prev)}
                aria-label="Abrir submenú de proyectos"
              >
                ▼
              </button>
            </div>

            {showProjectsMenu && (
              <div className="projects-megamenu">
                <Link to="/projects#programacion" className="megamenu-item">
                  <h4>Programación</h4>
                  <p>Apps web, interfaces, lógica y desarrollo de software.</p>
                </Link>

                <Link to="/projects#diseno-3d" className="megamenu-item">
                  <h4>Diseño 3D</h4>
                  <p>Modelado, prototipado e impresión 3D aplicada.</p>
                </Link>

                <Link to="/projects#automatizacion" className="megamenu-item">
                  <h4>Automatización</h4>
                  <p>Scripts, flujos automáticos e integraciones técnicas.</p>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <div
        className={`mobile-overlay ${showMobileMenu ? "show" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      <aside className={`mobile-sidebar ${showMobileMenu ? "open" : ""}`}>
        <button
          type="button"
          className="mobile-close"
          onClick={closeMobileMenu}
          aria-label="Cerrar menú"
        >
          ×
        </button>

        <a href={`${base}`} onClick={closeMobileMenu}>Inicio</a>
        <a href={`${base}#about`} onClick={closeMobileMenu}>Sobre mí</a>
        <a href={`${base}#experience`} onClick={closeMobileMenu}>Experiencia</a>
        <a href={`${base}#skills`} onClick={closeMobileMenu}>Habilidades</a>
        <a href={`${base}#education`} onClick={closeMobileMenu}>Educación</a>
        <a href={`${base}#contact`} onClick={closeMobileMenu}>Contacto</a>

        <div className="mobile-projects">
          <button
            type="button"
            className="mobile-projects-toggle"
            onClick={() => setShowMobileProjectsMenu((prev) => !prev)}
          >
            Proyectos ▼
          </button>

          {showMobileProjectsMenu && (
            <div className="mobile-projects-list">
              <Link to="/projects" onClick={closeMobileMenu}>
                Todos los proyectos
              </Link>
              <a href={`${base}projects#programacion`} onClick={closeMobileMenu}>
                Programación
              </a>
              <a href={`${base}projects#diseno-3d`} onClick={closeMobileMenu}>
                Diseño 3D
              </a>
              <a href={`${base}projects#automatizacion`} onClick={closeMobileMenu}>
                Automatización
              </a>
            </div>
          )}
        </div>
      </aside>
    </header>
  );
}

export default Navbar;