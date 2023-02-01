import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Nav from "./components/Nav";
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Intro1 = lazy(() => import("./pages/project-intro/Intro1"));
const Intro2 = lazy(() => import("./pages/project-intro/Intro2"));
const Intro3 = lazy(() => import("./pages/project-intro/Intro3"));
const Intro4 = lazy(() => import("./pages/project-intro/Intro4"));
const Intro5 = lazy(() => import("./pages/project-intro/Intro5"));
const Intro6 = lazy(() => import("./pages/project-intro/Intro6"));

function App() {
  const dotBg = {
    backgroundImage: "url(/portfolio/images/dotBg.png)",
  };
  return (
    <div
      className="App"
      style={dotBg}
    >
      <img
        src="/portfolio/images/gradient-bg.png"
        className="top-bg"
        alt="gradient"
      ></img>
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
