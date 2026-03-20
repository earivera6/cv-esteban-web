import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
        <h2>{t("contact.title")}</h2>

        <div className="contact-card">
            <p>
            <strong>{t("contact.location")}</strong>{" "}
            </p>
            
            <p>
            <strong>{t("contact.emailLabel")}</strong>{" "}
            <a href="mailto:estebanrivera200039@gmail.com">
                estebanrivera200039@gmail.com
            </a>
            </p>

            <p>
            <strong>{t("contact.phoneLabel")}</strong>{" "}
            <a href="tel:+593995085634">+593 99 508 5634</a>
            </p>

            <div className="button-group">
            <a
                href="https://wa.me/593995085634"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                {t("contact.whatsapp")}
            </a>

            <a
                href="/cv-esteban-web/Brand/CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                {t("contact.cv")}
            </a>

            <a
                href="http://www.linkedin.com/in/estebanriveran"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                {t("contact.linkedin")}
            </a>

            <a
                href="https://github.com/earivera6/cv-esteban-web"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                {t("contact.github")}
            </a>
            </div>
        </div>
    </section>
  );
}

export default Contact;