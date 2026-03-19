import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-brand">
          <a href={import.meta.env.BASE_URL} className="nav-brand-link">
            <img
              src={`${base}Brand/logo_dark.png`}
              alt="Logo Esteban Rivera"
              className="nav-logo"
            />
            <h1>Esteban Rivera</h1>
          </a>
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
          <li><a href={`${import.meta.env.BASE_URL}#about`} type="button" className="btn btn-dark" onMouseEnter={() => setShowProjectsMenu(false)}>{t("nav.about")}</a></li>
          <li><a href={`${import.meta.env.BASE_URL}#experience`} type="button" className="btn btn-dark" onMouseEnter={() => setShowProjectsMenu(false)}>{t("nav.experience")}</a></li>
          <li><a href={`${import.meta.env.BASE_URL}#skills`} type="button" className="btn btn-dark" onMouseEnter={() => setShowProjectsMenu(false)}>{t("nav.skills")}</a></li>
          <li><a href={`${import.meta.env.BASE_URL}#education`} type="button" className="btn btn-dark" onMouseEnter={() => setShowProjectsMenu(false)}>{t("nav.education")}</a></li>
          <li><a href={`${import.meta.env.BASE_URL}#contact`} type="button" className="btn btn-dark" onMouseEnter={() => setShowProjectsMenu(false)}>{t("nav.contact")}</a></li>

          <li
            className="projects-dropdown"
            onMouseEnter={() => setShowProjectsMenu(true)}
            onClick={() => setShowProjectsMenu(false)}
            aria-label="Abrir submenú de proyectos"
          >
            <div className="projects-trigger">
              <Link to="/projects" type="button" className="btn btn-dark">
                {t("nav.projects")}
              </Link>
            </div>

            {showProjectsMenu && (
              <div className="projects-megamenu">
                <Link to="/projects#programacion" className="megamenu-item">
                  <h4>{t("nav.programming")}</h4>
                  <p>Apps web, interfaces, lógica y desarrollo de software.</p>
                </Link>

                <Link to="/projects#diseno-3d" className="megamenu-item">
                  <h4>{t("nav.design3d")}</h4>
                  <p>Modelado, prototipado e impresión 3D aplicada.</p>
                </Link>

                <Link to="/projects#automatizacion" className="megamenu-item">
                  <h4>{t("nav.automation")}</h4>
                  <p>Scripts, flujos automáticos e integraciones técnicas.</p>
                </Link>
              </div>
            )}
          </li>
        </ul>

        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLanguage}
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>

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

        <a href={`${base}`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.home")}</a>
        <a href={`${base}#about`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.about")}</a>
        <a href={`${base}#experience`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.experience")}</a>
        <a href={`${base}#skills`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.skills")}</a>
        <a href={`${base}#education`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.education")}</a>
        <a href={`${base}#contact`} onClick={closeMobileMenu} type="button" className="btn btn-dark">{t("nav.contact")}</a>

        <div className="mobile-projects">
          <a
            type="button"
            className="btn btn-dark"
            onClick={() => setShowMobileProjectsMenu((prev) => !prev)}
          >
            {t("nav.projects")}
          </a>

          {showMobileProjectsMenu && (
            <div className="mobile-projects-list">
              <Link to="/projects" onClick={closeMobileMenu} className="btn btn-light">
                {t("nav.allProjects")}
              </Link>
              <a href={`${base}projects#programacion`} onClick={closeMobileMenu} className="btn btn-light">
                {t("nav.programming")}
              </a>
              <a href={`${base}projects#diseno-3d`} onClick={closeMobileMenu} className="btn btn-light">
                {t("nav.design3d")}
              </a>
              <a href={`${base}projects#automatizacion`} onClick={closeMobileMenu} className="btn btn-light">
                {t("nav.automation")}
              </a>
            </div>
          )}
        </div>
      </aside>
    </header>
  );
}

export default Navbar;