import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  preview?: string;
  status: "published" | "draft" | "planned";
};

type ProjectCategory = {
  title: string;
  description: string;
  items: ProjectItem[];
};

function ProjectsPage() {
  const { t } = useTranslation();

  const categoryConfig = [
    { key: "programming", sectionId: "programming" },
    { key: "design3d", sectionId: "design3d" },
    { key: "automation", sectionId: "automation" },
  ] as const;

  const visibleCategories = categoryConfig
    .map(({ key, sectionId }) => {
      const category = t(`projects.categories.${key}`, {
        returnObjects: true,
      }) as ProjectCategory;

      const publishedItems =
        category?.items?.filter((project) => project.status === "published") || [];

      return {
        key,
        sectionId,
        title: category?.title || "",
        description: category?.description || "",
        items: publishedItems,
      };
    })
    .filter((category) => category.items.length > 0);

  return (
    <div>
      <Navbar />

      <main>
        <section>
          <h2>{t("projects.pageTitle")}</h2>
          <p>{t("projects.pageIntro")}</p>
        </section>

        {visibleCategories.map((category) => (
          <section key={category.key} id={category.sectionId}>
            <h2>{category.title}</h2>

            <div className="projects-grid">
              {category.items.map((project) => (
                <article key={project.title} className="project-card">
                  {project.preview && (
                    <div className="project-preview">
                      <img
                        src={project.preview}
                        alt={`Preview de ${project.title}`}
                        className="project-preview-image"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="skills-group">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="button-group">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-light"
                      >
                        {t("projects.viewDemo")}
                      </a>
                    )}

                    {project.repo && project.repo !== "#" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-dark"
                      >
                        {t("projects.viewRepository")}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProjectsPage;