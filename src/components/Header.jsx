import { Link } from "react-router-dom"
// import logo from "../images/logo1NotBack.png"; 
function Header() {
  return (
    <header>
        {/* <img src={logo} alt="logo sargartist"/> */}
        <nav>
          <ul>
            <Link to="/"><li>home</li></Link>
            <Link to="/projects"><li>proyectos</li></Link>
            <Link to="/aboutme"><li>sobre mí</li></Link> 
            <Link to="/contact"><li>contacto</li></Link>
          </ul>
        </nav>
    </header>
  )
}

export default Header