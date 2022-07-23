import { useEffect } from "react";

import ReactPortal from "./ReactPortal";
import { CloseBtn, ModalContainer } from "./styled";
import Form from "./Form";


function ModalContact({ isOpen, handleClose }) {

  useEffect(() => {
    // if body is less than 768px, then close the modal
    // if (window.innerWidth < 768) {
    //   handleClose();
    // }
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
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }


  return (
    <ReactPortal wrapperId="gallery-portal">
      {
        isOpen && (
          <ModalContainer onClick={handleClickModal} >
            <CloseBtn onClick={handleClose} />
            <Form handleClose={handleClose} />
          </ModalContainer>
        )
      }
    </ReactPortal>
  );
}
export default ModalContact;
