import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  const softwareItems = t("skills.groups.software.items", {
    returnObjects: true,
  }) as string[];

  const dataItems = t("skills.groups.data.items", {
    returnObjects: true,
  }) as string[];

  const automationItems = t("skills.groups.automation.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="skills">
      <h2>{t("skills.title")}</h2>

      <div className="skills-section">
        <h3>{t("skills.groups.software.title")}</h3>
        <div className="skills-group">
          {softwareItems.map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>{t("skills.groups.data.title")}</h3>
        <div className="skills-group">
          {dataItems.map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>{t("skills.groups.automation.title")}</h3>
        <div className="skills-group">
          {automationItems.map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;