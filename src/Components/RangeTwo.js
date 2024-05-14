import React from "react";
import { useLocation } from "react-router-dom";
import { styled, keyframes } from "styled-components";
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
  
  }
  100% {
    opacity:1;
    top:25%;
    width:3px;
  
   

  }
`;
const rangeStyleAnimation = keyframes`

  0% {
    opacity:0;
    top: 0%;
    width:3px;
   
  }
  100% {
    opacity:1;
    top:25%;
    width:3px;
 
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 40px;
  z-index: 1;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimation} 1s linear;
  box-shadow: 0px 0px 1px black;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`;
const RangeStyle = styled.div`
  width: 5px;
  height: 150px;
  background: #000;
  animation-fill-mode: forwards !important;
  animation: ${rangeStyleAnimation} 1s linear;
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
  animation: ${rangeInnerAnimation} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`;
