import { Route, Routes } from "react-router-dom";
import "../scss/index.scss";
import Landing from "./Landing";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function App() {

  //Fake URL used as a illustrations images
  const fakeImg = "https://static.vecteezy.com/system/resources/previews/023/779/824/non_2x/animal-dog-head-square-line-simple-creative-logo-free-vector.jpg";

  //Illustrations array, holding sample images
  const illustrations = [
    {
      img: fakeImg,
      name: "test",
    },
    {
      img: fakeImg,
      name: "test",
    },
    {
      img: fakeImg,
      name: "test",
    },
    {
      img: fakeImg,
      name: "test",
    },
    {
      img: fakeImg,
      name: "test",
    },
    {
      img: fakeImg,
      name: "test",
    }
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects arrayFake={illustrations}/>} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
