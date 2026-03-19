import { useTranslation } from "react-i18next";

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  details: string;
  pdf: string;
  preview: string;
};

function Certifications() {
  const { t } = useTranslation();
  const base = import.meta.env.BASE_URL;

  const items = t("certifications.items", {
    returnObjects: true,
  }) as CertificationItem[];

  return (
    <section id="certifications">
      <h2>{t("certifications.title")}</h2>

      <div className="certifications-grid">
        {items.map((item, index) => (
          <div key={index} className="education-card certification-card">
            <img
              src={`${base}${item.preview.replace(/^\//, "")}`}
              alt={item.name}
              className="certificate-preview"
            />

            <h3>{item.name}</h3>
            <p className="education-company">{item.issuer}</p>
            <p className="education-meta">{item.date}</p>
            <p>{item.details}</p>

            <div className="button-group">
              <a
                href={`${base}${item.pdf.replace(/^\//, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                {t("certifications.viewCertificate")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;