import { useTranslation } from "react-i18next";

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  details: string;
};

function Certifications() {
  const { t } = useTranslation();

  const items = t("certifications.items", {
    returnObjects: true,
  }) as CertificationItem[];

  return (
    <section id="certifications">
      <h2>{t("certifications.title")}</h2>

      <div className="certifications-grid">
        {items.map((item, index) => (
          <div key={index} className="education-card">
            <h3>{item.name}</h3>
            <p className="education-company">{item.issuer}</p>
            <p className="education-meta">{item.date}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;