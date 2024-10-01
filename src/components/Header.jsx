import { Link } from "react-router-dom";
// import logo from "../images/logo1NotBack.png";
function Header() {
  return (
    <header>
      {/* <img src={logo} alt="logo sargartist"/> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/aboutme">Sobre mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
