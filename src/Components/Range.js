import React from "react";
import { useLocation } from "react-router-dom";
import { styled, keyframes } from "styled-components";

import { CSSTransition } from "react-transition-group";

const Range = () => {
  const location = useLocation();
  return (
    <CSSTransition
      in={location.hash === "#sectionOne" || location.hash === ""}
      timeout={-500}
      classNames="page-transition"
      unmountOnExit="true"
      exit
    >
      <div key={location.hash || `#sectionOne`}>
        <Container>
          <RangeStyle>
            <Inner />
          </RangeStyle>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default Range;
const rangeAnimation = keyframes`

  0% {
    opacity:0;
  }
  100% {
    opacity:1;
   

  }
`;
const rangeInnerAnimation = keyframes`

  0% {
    opacity:0;
    top: 50%;
  }
  100% {
    opacity:1;
    top:0%;
   

  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 40px;
  z-index: 1;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimation} 0.8s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`;
const RangeStyle = styled.div`
  width: 5px;
  height: 150px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`;

const Inner = styled.div`
  position: absolute;
  animation-fill-mode: forwards !important;
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
  animation: ${rangeInnerAnimation} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`;
