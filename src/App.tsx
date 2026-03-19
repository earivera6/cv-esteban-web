import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <SoftSkills />
        <Education />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default App;