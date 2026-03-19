import Navbar from "../components/Navbar";

function ProjectsPage() {
  return (
    <div>
      <Navbar />

      <main>
        <section>
          <h2>Proyectos</h2>
          <p>
            Aquí mostraré mis proyectos organizados por categorías.
          </p>

          <div className="button-group">
            <a href={import.meta.env.BASE_URL} className="btn btn-dark">
              Volver al inicio
            </a>
          </div>
        </section>

        <section id="programacion">
          <h2>Programación</h2>
          <p>Aquí irán mis proyectos de programación.</p>
        </section>

        <section id="diseno-3d">
          <h2>Diseño 3D</h2>
          <p>Aquí irán mis proyectos de diseño 3D.</p>
        </section>

        <section id="automatizacion">
          <h2>Automatización</h2>
          <p>Aquí irán mis proyectos de automatización.</p>
        </section>
      </main>
    </div>
  );
}

export default ProjectsPage;