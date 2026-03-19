function Contact() {
  return (
    <section id="contact">
        <h2>Contacto</h2>

        <div className="contact-card">
            <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:estebanrivera200039@gmail.com">
                estebanrivera200039@gmail.com
            </a>
            </p>

            <p>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+593995085634">+593 99 508 5634</a>
            </p>

            <div className="button-group">
            <a
                href="https://wa.me/593995085634"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                Escribirme por WhatsApp
            </a>

            <a
                href="/cv-esteban-web/Brand/CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                Ver CV en PDF
            </a>

            <a
                href="http://www.linkedin.com/in/estebanriveran"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                Mi LinkedIn
            </a>

            <a
                href="https://github.com/earivera6/cv-esteban-web"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
            >
                Mi GitHub
            </a>
            </div>
        </div>
    </section>
  );
}

export default Contact;