import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div className="hero-layout">
        <div className="hero-text">
          <p>{t("hero.label")}</p>
          <h2>{t("hero.name")}</h2>
          <h3>{t("hero.title")}</h3>
          <p>
            {t("hero.description")}
          </p>

          <div className="button-group">
            <a href="#contact" className="btn btn-light">
              {t("hero.contact")}
            </a>
            <a
              href="/cv-esteban-web/Brand/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              {t("hero.cv")}
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/cv-esteban-web/Brand/foto_esteban.png"
            alt="Foto de Esteban Rivera"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;