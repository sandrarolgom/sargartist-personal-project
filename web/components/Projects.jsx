import { useEffect, useState } from "react";


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

    const list = data.map((item, i)=>(<img src={`${path}${item.fileName}`} alt={item.fileName} key={i} className="illustrations__one"/>));
    return (
        <section className="illustrations">
            <h1 className="hidden">project</h1>
            {list}      
        </section>
    );
}

export default Projects;
