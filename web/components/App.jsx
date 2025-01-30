// Imports necessary libraries and styles
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/index.scss";

// Imports custom components
import Header from "./Header";
import Landing from "./Landing";
import Illustrations from "./Illustrations";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  // Stage to manage the dynamic class of the header
  const [headerClass, setHeaderClass] = useState("header");

  // Hook to get the current browser location
  const location = useLocation();

  // Effect to update the header class based on the active route
  useEffect(()=>{
    if (location.pathname === "/"){
      setHeaderClass("landing"); 
    } else {
      setHeaderClass("header");
    }
  }, [location.pathname]); // Runs every time the route changes
  
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
