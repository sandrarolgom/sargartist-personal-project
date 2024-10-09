import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo1NotBack.png";

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
      <nav>
        <ul className="header__list">
        <li className="header__list--li">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "bold" : undefined)} >proyectos</NavLink>
          </li>
          <li className="header__list--li">
            <NavLink to="/aboutme"  className={({ isActive }) => (isActive ? "bold" : undefined)} >sobre mí</NavLink>
          </li>
          <li className="header__list--li">
            <NavLink to="/contact"  className={({ isActive }) => (isActive ? "bold" : undefined)} >contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
