import { useTranslation } from "react-i18next";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  senescyt: string;
};

function Education() {
  const { t } = useTranslation();

  const items = t("education.items", {
    returnObjects: true,
  }) as EducationItem[];

  return (
    <section id="education">
      <h2>{t("education.title")}</h2>

      {items.map((item, index) => (
        <div key={index} className="education-card">
          <h3>{item.degree}</h3>
          <p className="education-company">{item.institution}</p>
          <p className="education-meta">
            {item.period} · {item.location}
          </p>
          <p className="education-senescyt">{item.senescyt}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;