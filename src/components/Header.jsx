import { Link } from "react-router-dom";
import logo from "../images/logo1NotBack.png";

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
      <nav>
        <ul className="header__list">
        <li className="header__list--li">
            <Link to="/projects">proyectos</Link>
          </li>
          <li className="header__list--li">
            <Link to="/aboutme">sobre mí</Link>
          </li>
          <li className="header__list--li">
            <Link to="/contact">contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
