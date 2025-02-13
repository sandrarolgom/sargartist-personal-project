// Import useEffect and useState hooks from React
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

function Illustrations() {
    // State to store the illustrations data
    const [data, setData] = useState([]);
    // State to manege the selected image for the modal
    const [selectedImage, setSelectedImage] = useState(null);
    // Base path to access the illustrations images
    const path = "./illustrations/";

    const openModal = (image) => {
        setSelectedImage(image);
    };
    const closeModal = () => {
        setSelectedImage(null);
    };

    // useEffect that runs only once when the component is mounted
    useEffect(()=>{
        fetch("https://sargartist.onrender.com/Illustrations")
        .then(response=>response.json())
        .then((data)=>{
            setData(data.response);
        })
;    }, []); // Empty array ensures this effect runs only once, on mount

    const list = data.map((item)=>(
        <img 
            src={`${path}${item.fileName}`} 
            alt={item.fileName} 
            key={item.id} 
            title={item.name} 
            className="illustrations__one"
            onClick={()=> openModal(`${path}${item.fileName}`)}
        />));
    return (
        <section className="illustrations">
            <h1 className="hidden">project</h1>
            {list} 
            <ImageModal image={selectedImage} closeModal={closeModal}/>     
        </section>
    );
}

export default Illustrations;
