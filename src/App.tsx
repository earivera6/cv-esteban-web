import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <>
      <Navbar
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        language={language}
      />

      <main>
        {/* Hero, About, Experience... */}
      </main>
    </>
  );
}

export default App;