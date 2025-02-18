 
function ImageModal({image, closeModal}) {
  return (
    <div className="modal" onClick={closeModal}>
      <img 
        src={image} 
        alt="Imagen Ampliada"
        className="modal__image"
      />
    </div>
  )
}

export default ImageModal;