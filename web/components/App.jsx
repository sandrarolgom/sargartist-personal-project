import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/index.scss";
import Header from "./Header";
import Landing from "./Landing";
import Illustrations from "./Illustrations";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [headerClass, setHeaderClass] = useState("header");
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/"){
      setHeaderClass("landing");
    } else {
      setHeaderClass("header");
    }
  }, [location.pathname]);
  
  return (
    <>
    <Header headerClass={headerClass}/>
    <main>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
