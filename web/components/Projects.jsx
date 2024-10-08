import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";


function Projects() {
    const [data, setData] = useState([])
    const path = "./images/illustrations/";
    useEffect(()=>{
        fetch("http://localhost:8081/illustrations")
        .then(response=>response.json())
        .then((data)=>{
            setData(data.response);
        })
;    }, []);

    const list = data.map((item, i)=>(<img src={`${path}${item.fileName}`} alt={item.fileName} key={i} className="illustration"/>));
    return (
        <div>
            <Header />            
            <h1>project</h1>
            {list}
            <Footer />
        </div>
    );
}

export default Projects;
