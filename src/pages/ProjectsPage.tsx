import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
};

function ProjectsPage() {
  const { t } = useTranslation();

  const programming = t("projects.categories.programming.items", {
    returnObjects: true,
  }) as ProjectItem[];

  const design3d = t("projects.categories.design3d.items", {
    returnObjects: true,
  }) as ProjectItem[];

  const automation = t("projects.categories.automation.items", {
    returnObjects: true,
  }) as ProjectItem[];

  return (
    <div>
      <Navbar />

      <main>
        <section>
          <h2>{t("projects.pageTitle")}</h2>
          <p>{t("projects.pageIntro")}</p>
        </section>

        <section id="programming">
          <h2>{t("projects.categories.programming.title")}</h2>
          <div className="projects-grid">
            {programming.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="skills-group">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="button-group">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    {t("projects.viewRepository")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="design3d">
          <h2>{t("projects.categories.design3d.title")}</h2>
          <div className="projects-grid">
            {design3d.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="skills-group">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="button-group">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    {t("projects.viewRepository")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="automation">
          <h2>{t("projects.categories.automation.title")}</h2>
          <div className="projects-grid">
            {automation.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="skills-group">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="button-group">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    {t("projects.viewRepository")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectsPage;