import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Nav from "./components/Nav";
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const IntroGF = lazy(() => import("./pages/project-intro/Intro_GF"));
const IntroSM = lazy(() => import("./pages/project-intro/Intro_SM"));
const IntroWorkfe = lazy(() => import("./pages/project-intro/Intro_Workfe"));
const IntroFoodiesnail = lazy(() =>
  import("./pages/project-intro/Intro_Foodie_snail")
);
// const IntroEHC = lazy(() => import("./pages/project-intro/Intro_EHC"));
// const IntroEase = lazy(() => import("./pages/project-intro/Intro_Ease"));
// const IntroGC = lazy(() => import("./pages/project-intro/Intro_GC"));
const IntroGP = lazy(() => import("./pages/project-intro/Intro_GP"));
const IntroDO = lazy(() => import("./pages/project-intro/Intro_DO"));
const Intro_OEC_ds = lazy(() => import("./pages/project-intro/Intro_OEC_ds"));
function App() {
  const dotBg = {
    backgroundImage: "url(/portfolio/images/dotBg.png)",
  };
  return (
    <div className="App" style={dotBg}>
      <Nav />
      <Routes>
        <Route path="/portfolio" index element={<Project />} />
        <Route path="/portfolio/about" element={<About />} />
        {/* <Route
          path="/portfolio/project/gofreight-core"
          element={<IntroGC />}
        /> */}
        <Route path="/portfolio/project/gofreight-pay" element={<IntroGP />} />
        <Route
          path="/portfolio/project/b2b-software-design-system"
          element={<Intro_OEC_ds />}
        />
        <Route
          path="/portfolio/project/design-system-iteration"
          element={<IntroDO />}
        />

        <Route
          path="/portfolio/project/gofreight-website"
          element={<IntroGF />}
        />
        {/* <Route
          path="/portfolio/project/gofreight-social-media"
          element={<IntroSM />}
        /> */}
        <Route path="/portfolio/project/workfe" element={<IntroWorkfe />} />
        <Route
          path="/portfolio/project/foodie-snail"
          element={<IntroFoodiesnail />}
        />
        {/* <Route
          path="/portfolio/project/elder-health-center"
          element={<IntroEHC />}
        /> */}
        {/* <Route path="/portfolio/project/ease" element={<IntroEase />} /> */}
      </Routes>
    </div>
  );
}

export default App;
