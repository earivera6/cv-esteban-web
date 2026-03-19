import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";

function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <SoftSkills />
        <Certifications />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default HomePage;