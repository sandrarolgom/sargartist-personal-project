import { Link } from "react-router-dom";
import Footer from "./Footer";

function Landing() {
    return (
        <div className="test">
            <main  className="landing"> 
            <img 
                src="/images/logo1NotBack.png"
                alt=""
                className="landing__logo" />
            <ul className="landing__list">
                <li className="landing__list--li">
                    <Link to="/projects">proyectos</Link>
                </li>
                <li className="landing__list--li">
                    <Link to="/contact">contacto</Link>
                </li>
                <li className="landing__list--li">
                    <Link to="/aboutme">sobre mí</Link>
                </li>
            </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Landing;
