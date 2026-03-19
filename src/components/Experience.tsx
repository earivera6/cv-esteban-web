import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience">
      <h2>{t("experience.title")}</h2>

      <div className="experience-card">
        <h3>{t("experience.jobs.rhelec.role")}</h3>
        <p className="experience-company">{t("experience.jobs.rhelec.company")}</p>
        <p className="experience-meta">
          {t("experience.jobs.rhelec.period")} · {t("experience.jobs.rhelec.location")}
        </p>

        <ul className="experience-list">
          <li>{t("experience.jobs.rhelec.bullets.0")}</li>
          <li>{t("experience.jobs.rhelec.bullets.1")}</li>
          <li>{t("experience.jobs.rhelec.bullets.2")}</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>{t("experience.jobs.cec.role")}</h3>
        <p className="experience-company">{t("experience.jobs.cec.company")}</p>
        <p className="experience-meta">
          {t("experience.jobs.cec.period")} · {t("experience.jobs.cec.location")}
        </p>

        <ul className="experience-list">
          <li>{t("experience.jobs.cec.bullets.0")}</li>
          <li>{t("experience.jobs.cec.bullets.1")}</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
