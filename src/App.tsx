import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Header />
      </aside>

      <main className="content">
        <Profile />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;
