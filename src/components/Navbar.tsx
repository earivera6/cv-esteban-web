import { useState } from "react";

interface Props {
  toggleTheme: () => void;
  toggleLanguage: () => void;
  language: "es" | "en";
}

export default function Navbar({ toggleTheme, toggleLanguage, language }: Props) {
  return (
    <nav className="navbar">
      <div className="logo">ER</div>

      <ul className="nav-links">
        <li><a href="#about">{language === "es" ? "Acerca de" : "About"}</a></li>
        <li><a href="#experience">{language === "es" ? "Experiencia" : "Experience"}</a></li>
        <li><a href="#skills">{language === "es" ? "Habilidades" : "Skills"}</a></li>
        <li><a href="#education">{language === "es" ? "Educación" : "Education"}</a></li>
        <li><a href="#contact">{language === "es" ? "Contacto" : "Contact"}</a></li>
      </ul>

      <div className="controls">
        <button onClick={toggleTheme}>🌓</button>
        <button onClick={toggleLanguage}>
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}