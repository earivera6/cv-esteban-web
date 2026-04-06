import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  status: "published" | "draft" | "planned";
};

type ProjectCategory = {
  title: string;
  description: string;
  items: ProjectItem[];
};

function Projects() {
  const { t } = useTranslation();

  const categoryConfig = [
    { key: "programming", hash: "programacion" },
    { key: "design3d", hash: "diseno-3d" },
    { key: "automation", hash: "automatizacion" }
  ];

  const visibleCategories = categoryConfig
    .map(({ key, hash }) => {
      const category = t(`projects.categories.${key}`, {
        returnObjects: true
      }) as ProjectCategory;

      const publishedItems =
        category?.items?.filter((item) => item.status === "published") || [];

      return {
        key,
        hash,
        title: category?.title,
        description: category?.description,
        items: publishedItems
      };
    })
    .filter((category) => category.items.length > 0);

  if (visibleCategories.length === 0) {
    return null;
  }

  return (
    <section id="projects">
      <h2>{t("projects.homeTitle")}</h2>

      <div className="projects-grid">
        {visibleCategories.map((category) => (
          <article className="project-card" key={category.key}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <Link to={`/projects#${category.hash}`} className="btn btn-dark">
              {t("projects.viewProjects")}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;