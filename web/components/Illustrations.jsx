// Import useEffect and useState hooks from React
import { useEffect, useState } from "react";

function Illustrations() {
    // State to store the illustrations data
    const [data, setData] = useState([])
    // Base path to access the illustrations images
    const path = "./illustrations/";

    // useEffect that runs only once when the component is mounted
    useEffect(()=>{
        fetch("https://sargartist.onrender.com/Illustrations")
        .then(response=>response.json())
        .then((data)=>{
            setData(data.response);
        })
;    }, []); // Empty array ensures this effect runs only once, on mount

    const list = data.map((item)=>(<img src={`${path}${item.fileName}`} alt={item.fileName} key={item.id} title={item.name} className="illustrations__one"/>));
    return (
        <section className="illustrations">
            <h1 className="hidden">project</h1>
            {list}      
        </section>
    );
}

export default Illustrations;
