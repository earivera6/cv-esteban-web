import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2>{t("profile.title")}</h2>
      <p>
        {t("profile.description")}
      </p>
    </section>
  );
}

export default Profile;
