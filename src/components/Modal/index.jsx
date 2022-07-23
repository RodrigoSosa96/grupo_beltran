import { useEffect } from "react";

import ReactPortal from "./ReactPortal";
import { CloseBtn, ModalContainer } from "./styled";
import ModalGallery from "./ModalGallery";


function Modal({ isOpen, handleClose, selectedItems }) {

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
      document.body.style.overflow = "auto";
    };

  }, [handleClose]);

  const handleClickModal = (e) => {
    e.preventDefault();
    if(e.target === e.currentTarget) {
      handleClose();
    }
  }
  

  return (
    <ReactPortal wrapperId="gallery-portal">
      {
        isOpen && (
          <ModalContainer onClick={handleClickModal} >
            <CloseBtn onClick={handleClose} />
            <ModalGallery selectedItems={selectedItems} />
          </ModalContainer>
        )
      }
    </ReactPortal>
  );
}
export default Modal;
