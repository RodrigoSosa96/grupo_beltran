import { useEffect, useRef } from 'react'

import { ModalGallery as Styled } from './styled';
import Img from "../Img"

const ModalGallery = ({selectedItems}) => {
  const modalGalleryRef = useRef(null);

  useEffect(() => {

    const ele = modalGalleryRef.current;
    ele.cursor = 'grab';

    // Get the current mouse position
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
    const mouseDownHandler = function (e) {
      if (e.buttons !== 1) return
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';
      pos.x = e.clientX;
      pos.y = e.clientY;
      pos.left = ele.scrollLeft;
      pos.top = ele.scrollTop;
      //pos.top = ele.offsetTop;

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);

    return () => {
      ele.removeEventListener('mousedown', mouseDownHandler);
    }

  }, [])

  return (
    <Styled ref={modalGalleryRef}>
      {selectedItems.map(v => (
        <Img key={v} src={v} metadata={{ alt: "Casa" }} />
      ))}
    </Styled>
  )
}

export default ModalGallery