import { useEffect, useState } from "react";


function Projects() {
    const [data, setData] = useState([])
    const path = "./illustrations/";
    useEffect(()=>{
        fetch("https://sargartist.onrender.com/projects")
        .then(response=>response.json())
        .then((data)=>{
            setData(data.response);
        })
;    }, []);

    const list = data.map((item)=>(<img src={`${path}${item.fileName}`} alt={item.fileName} key={item.id} className="illustrations__one"/>));
    return (
        <section className="illustrations">
            <h1 className="hidden">project</h1>
            {list}      
        </section>
    );
}

export default Projects;
