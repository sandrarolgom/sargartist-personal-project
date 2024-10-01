import { Route, Routes } from "react-router-dom";

import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Landing from "./Landing";

import "../scss/index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
