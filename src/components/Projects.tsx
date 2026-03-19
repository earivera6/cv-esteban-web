import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        <article className="project-card">
          <h3>Programación</h3>
          <p>
            Aplicaciones web, interfaces, lógica de negocio y proyectos
            desarrollados con tecnologías frontend y backend.
          </p>
          <Link to="/projects#programacion" className="btn btn-dark">
            Ver proyectos
          </Link>
        </article>

        <article className="project-card">
          <h3>Diseño 3D</h3>
          <p>
            Modelado de piezas, prototipos y diseños orientados a impresión 3D
            y solución de necesidades técnicas.
          </p>
          <Link to="/projects#diseno-3d" className="btn btn-dark">
            Ver proyectos
          </Link>
        </article>

        <article className="project-card">
          <h3>Automatización</h3>
          <p>
            Scripts, procesos automáticos e integraciones para optimizar tareas
            y flujos de trabajo.
          </p>
          <Link to="/projects#automatizacion" className="btn btn-dark">
            Ver proyectos
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Projects;