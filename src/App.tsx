import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

function App() {
  return (
    <div className="main-container">
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
