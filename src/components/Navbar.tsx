import { useEffect, useState } from "react";

interface Props {
  toggleTheme: () => void;
  toggleLanguage: () => void;
  language: "es" | "en";
  theme: "light" | "dark";
}

export default function Navbar({
  toggleTheme,
  toggleLanguage,
  language,
  theme
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Detectar scroll para efecto visual
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: language === "es" ? "Acerca de" : "About" },
    { id: "experience", label: language === "es" ? "Experiencia" : "Experience" },
    { id: "skills", label: language === "es" ? "Habilidades" : "Skills" },
    { id: "education", label: language === "es" ? "Educación" : "Education" },
    { id: "contact", label: language === "es" ? "Contacto" : "Contact" },
  ];

  const logoSrc =
  theme === "dark"
    ? `${import.meta.env.BASE_URL}brand/logo_esteban_dark.png`
    : `${import.meta.env.BASE_URL}brand/logo_esteban_light.png`;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection("about")}>
          <a
            href="#about"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            <img src={logoSrc} alt="Esteban Rivera Logo" className="logo-img" />
          </a>
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button className="control-btn" onClick={toggleTheme}>
            🌓
          </button>

          <button className="control-btn" onClick={toggleLanguage}>
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
