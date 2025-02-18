 
function ImageModal({image, closeModal}) {
  return (
    <div className="modal">
      <img 
        src={image} 
        alt="Imagen Ampliada"
        onClick={closeModal}
      />
    </div>
  )
}

export default ImageModal;