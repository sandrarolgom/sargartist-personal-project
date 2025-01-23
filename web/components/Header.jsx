import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo1NotBack.png";

function Header({ headerClass }) {
  return (
    <header className={headerClass}>
      <Link to="/"><img src={logo} alt="logo" className={`${headerClass}__logo`} /></Link>
      <nav>
        <ul className={`${headerClass}__list`}>
          <li className={`${headerClass}__list--li`}>
            <NavLink to="/illustrations" className={({ isActive }) => (isActive ? "bold" : undefined)} >ilustraciones</NavLink>
          </li>
          <li className={`${headerClass}__list--li`}>
            <NavLink to="/aboutme" className={({ isActive }) => (isActive ? "bold" : undefined)} >sobre mí</NavLink>
          </li>
          <li className={`${headerClass}__list--li`}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "bold" : undefined)} >contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
