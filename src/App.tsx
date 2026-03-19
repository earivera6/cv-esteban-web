import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;