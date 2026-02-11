interface Props {
  language: "es" | "en";
}

export default function Hero({ language }: Props) {
  return (
    <section className="hero">
      <h1>Esteban Andrés Rivera Novillo</h1>
      <h2>
        {language === "es"
          ? "Software Engineer (Frontend)"
          : "Software Engineer (Frontend)"}
      </h2>
      <p>
        {language === "es"
          ? "Especializado en React y TypeScript. Disponible para trabajo remoto."
          : "Specialized in React and TypeScript. Available for remote work."}
      </p>
    </section>
  );
}
