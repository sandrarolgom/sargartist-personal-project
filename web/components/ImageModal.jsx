import React from "react";

const ImageModal = ({ image , closeModal }) => {
    if (!image) return null;
    return (
        <div className="modal" onClick={closeModal}>
      <img
        src={image}
        alt="Imagen ampliada"
        className="modal__image"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="modal__close" onClick={closeModal}>
        Cerrar
      </button>
    </div>
    );
};
export default ImageModal;