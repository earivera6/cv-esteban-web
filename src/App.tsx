import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

function App() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <Header />

      <Profile />

      <Experience />

      <Education />

      <Skills />

      <Languages />
      
    </div>
  );
}

export default App;
