import { useTranslation } from "react-i18next";

type LanguageItem = {
  name: string;
  level: string;
  description: string;
  resume: string;
};

function Languages() {
  const { t } = useTranslation();

  const items = t("languages.items", {
    returnObjects: true,
  }) as LanguageItem[];

  return (
    <section id="languages">
      <h2>{t("languages.title")}</h2>

      <div className="languages-grid">
        {items.map((item, index) => (
          <div key={index} className="education-card">
            <h3>{item.name}</h3>
            <p className="stars">{item.level}</p>
            <p className="language-level">{item.resume}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;