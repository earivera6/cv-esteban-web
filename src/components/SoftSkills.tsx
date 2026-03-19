import { useTranslation } from "react-i18next";

function SoftSkills() {
  const { t } = useTranslation();

  const items = t("softSkills.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="soft-skills">
      <h2>{t("softSkills.title")}</h2>

      <div className="skills-group">
        {items.map((item, index) => (
          <span key={index} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SoftSkills;