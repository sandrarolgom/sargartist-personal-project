import { Route, Routes } from 'react-router-dom';
import '../scss/index.scss';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Landing from './Landing';
import Header from './Header';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Landing/>}/>
      <Route path="/projects"  element={<Projects />}/>
      <Route path="/aboutme"  element={<AboutMe />}/>
      <Route path="/contact"  element={<Contact />}/>
    </Routes>
    </>
    
  );
}

export default App;