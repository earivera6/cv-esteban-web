import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();


  return (
    <section id="projects">
      <h2>{t("projects.homeTitle")}</h2>

      <div className="projects-grid">
        <article className="project-card">
          <h3>{t("projects.categories.programming.title")}</h3>
          <p>
            {t("projects.categories.programming.description")}
          </p>
          <Link to="/projects#programacion" className="btn btn-dark">
            {t("projects.viewProjects")}
          </Link>
        </article>

        <article className="project-card">
          <h3>{t("projects.categories.design3d.title")}</h3>
          <p>
            {t("projects.categories.design3d.description")}
          </p>
          <Link to="/projects#diseno-3d" className="btn btn-dark">
            {t("projects.viewProjects")}
          </Link>
        </article>

        <article className="project-card">
          <h3>{t("projects.categories.automation.title")}</h3>
          <p>
            {t("projects.categories.automation.description")}
          </p>
          <Link to="/projects#automatizacion" className="btn btn-dark">
            {t("projects.viewProjects")}
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Projects;