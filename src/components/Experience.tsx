function Experience() {
  return (
    <section id="experience">
      <h2>Experiencia Profesional</h2>

      <div className="experience-card">
        <h3>Operador de Mantenimiento</h3>
        <p className="experience-company">Rhelec Ingeniería Cía. Ltda.</p>
        <p className="experience-meta">
          Diciembre 2023 – Noviembre 2024 · Sangolquí, Ecuador
        </p>

        <ul className="experience-list">
          <li>Mantenimiento eléctrico de media y baja tensión.</li>
          <li>Supervisión de grupos electrógenos y tableros.</li>
          <li>Gestión de alarmas y coordinación técnica.</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Capacitador Académico</h3>
        <p className="experience-company">Club de Entrenamiento Cerebral (CEC)</p>
        <p className="experience-meta">
          Febrero 2019 – Diciembre 2023 · Quito, Ecuador
        </p>

        <ul className="experience-list">
          <li>Tutorías de Matemáticas y Física para estudiantes de bachillerato.</li>
          <li>Diseño de talleres de robótica educativa para niños y jóvenes.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
