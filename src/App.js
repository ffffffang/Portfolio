import Nav from "./components/Nav";
import Project from "./pages/Project";
import About from "./pages/About";
import Intro1 from "./pages/project-intro/Intro1";
import Intro2 from "./pages/project-intro/Intro2";
import Intro3 from "./pages/project-intro/Intro3";
import Intro4 from "./pages/project-intro/Intro4";
import Intro5 from "./pages/project-intro/Intro5";
import Intro6 from "./pages/project-intro/Intro6";

import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/portfolio"
          index
          element={<Project />}
        />
        <Route
          path="/portfolio/about"
          element={<About />}
        />
        <Route
          path="/portfolio/project/1"
          element={<Intro1 />}
        />
        <Route
          path="/portfolio/project/2"
          element={<Intro2 />}
        />
        <Route
          path="/portfolio/project/3"
          element={<Intro3 />}
        />
        <Route
          path="/portfolio/project/4"
          element={<Intro4 />}
        />
        <Route
          path="/portfolio/project/5"
          element={<Intro5 />}
        />
        <Route
          path="/portfolio/project/6"
          element={<Intro6 />}
        />
      </Routes>
    </div>
  );
}

export default App;
