import { Link } from "react-router-dom"

function Landing() {
  return (
    <div>
        <h1>landing</h1>
        <ul>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/aboutme">Sobre mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
        </ul>
    </div>
  )
}

export default Landing