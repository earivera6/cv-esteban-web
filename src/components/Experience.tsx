import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const rhelecBullets = t("experience.jobs.rhelec.bullets", {
    returnObjects: true,
  }) as string[];

  const cecBullets = t("experience.jobs.cec.bullets", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="experience">
      <h2>{t("experience.title")}</h2>

      <div className="experience-card">
        <h3>{t("experience.jobs.rhelec.role")}</h3>
        <p className="experience-company">
          {t("experience.jobs.rhelec.company")}
        </p>
        <p className="experience-meta">
          {t("experience.jobs.rhelec.period")} ·{" "}
          {t("experience.jobs.rhelec.location")}
        </p>

        <p className="experience-modality">
          {t("experience.jobs.rhelec.modality")}
        </p>

        <ul className="experience-list">
          {rhelecBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="experience-card">
        <h3>{t("experience.jobs.cec.role")}</h3>
        <p className="experience-company">
          {t("experience.jobs.cec.company")}
        </p>
        <p className="experience-meta">
          {t("experience.jobs.cec.period")} ·{" "}
          {t("experience.jobs.cec.location")}
        </p>

        <p className="experience-modality">
          {t("experience.jobs.rhelec.modality")}
        </p>

        <ul className="experience-list">
          {cecBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
