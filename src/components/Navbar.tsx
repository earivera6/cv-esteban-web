import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const base = import.meta.env.BASE_URL;

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
    </header>
  );
}

export default Navbar;