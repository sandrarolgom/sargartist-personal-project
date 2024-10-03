import Footer from "./Footer";
import Header from "./Header";
import PropTypes, { array } from "prop-types";


function Projects({arrayFake}) {
    //const with map
    const list = arrayFake.map((item, i)=><img src={item.img} alt={item.name} key={i} className="illustration"/>)
    return (
        <div>
            <Header />            
            <h1>project</h1>
            {list}
            <Footer />
        </div>
    );
}
Projects.propTypes={
    arrayFake: PropTypes.arrayOf(
        
    )
}

export default Projects;
