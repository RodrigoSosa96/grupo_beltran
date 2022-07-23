import styled, { css } from "styled-components";



const Separator = styled.div`
  --width: ${prop => prop.width};
  --height: ${prop => prop.height};

  --x: ${prop => prop.x};
  --y: ${prop => prop.y};
  
  --width-mobile: ${prop => prop.mobile?.width || prop.width};
  --height-mobile: ${prop => prop.mobile?.height || prop.height};

  --x-mobile: ${prop => prop.mobile?.x || prop.x};
  --y-mobile: ${prop => prop.mobile?.y || prop.y};

  --opacity: ${prop => prop.opacity};
  --opacity-mobile: ${prop => prop.mobile?.opacity || prop.opacity};
  
  position: absolute!important;
  /* top: var(--y-mobile);
  left: var(--x-mobile); */

  ${prop => prop.mobile?.directionX === "right" ? "right: var(--x-mobile);" : "left: var(--x-mobile);"}
  ${prop => prop.mobile?.directionY === "bottom" ? "bottom: var(--y-mobile);" : "top: var(--y-mobile);"}
  
  width: var(--width-mobile);
  height: var(--height-mobile);
  
  /* transform: translate(-50%, -50%); */
  ${prop => (prop.mobile?.centered || prop.centered) && css`
    transform: translate(-50%, -50%);
  `}

  
  opacity: var(--opacity-mobile);
  z-index: 9;
  background-color: var(--color-primary);
  @media (min-width: ${prop => prop.mobile?.minWidth || prop.minWidth || "768px"}) {
    transform: unset;
    ${prop => prop.centered  && css`
      transform: translate(-50%, -50%);
    `}

    width: var(--width);
    height: var(--height);
    
    opacity: var(--opacity);

    /* top: var(--y);
    left: var(--x); */

    ${prop => prop.directionX === "right" ? "right: var(--x);" : "left: var(--x);"}
    ${prop => prop.directionY === "bottom" ? "bottom: var(--y);" : "top: var(--y);"}
  
  }
`
export default Separator;