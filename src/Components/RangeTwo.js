import React from "react";
import { useLocation } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import css from "styled-components";
import { CSSTransition } from "react-transition-group";

const RangeTwo = () => {
  const location = useLocation();
  return (
    <CSSTransition
      in={location.hash === "#sectionTwo" || location.hash === "sectionTwo"}
      timeout={-500}
      classNames="page-transition"
      unmountOnExit
      exit
    >
      <div key={location.hash || `#sectionTwo`}>
        <Container>
          <RangeStyle>
            <Inner />
          </RangeStyle>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default RangeTwo;
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
    top: 0%;
    width:3px;
    background:black !important;
  }
  100% {
    opacity:1;
    top:25%;
    width:3px;
    background: black !important;
   

  }
`;
const rangeStyleAnimation = keyframes`

  0% {
    opacity:0;
    top: 0%;
    width:3px;
    background:black !important;
  }
  100% {
    opacity:1;
    top:25%;
    width:3px;
    background: black !important;
   

  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 40px;
  z-index: 2;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimation} 1s linear;
`;
const RangeStyle = styled.div`
  width: 5px;
  height: 150px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  animation-fill-mode: forwards !important;
  animation: ${rangeStyleAnimation} 1s linear;
`;

const Inner = styled.div`
  position: absolute;
  animation-fill-mode: forwards !important;
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
  animation: ${rangeInnerAnimation} 1s linear;
`;
