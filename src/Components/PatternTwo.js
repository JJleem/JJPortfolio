import React from "react";
import { styled, keyframes } from "styled-components";
import pattern from "./assets/img/main/plus-light-pattern.png";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
const PatternTwo = () => {
  const location = useLocation();

  return (
    <CSSTransition
      in={location.hash === "#sectionTwo" || location.hash === "#sectionTwo"}
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || `#sectionTwo`}>
        <PatternStyle />
      </div>
    </CSSTransition>
  );
};

export default PatternTwo;

const patternAnimation = keyframes`

  0% {
    transform:translate(1000px, 0px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`;
const PatternStyle = styled.div`
  position: absolute;
  width: 240px;
  height: 200px;
  right: -3px;
  top: -3px;
  background-image: url(${pattern});
  opacity: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.7s;
  animation: ${patternAnimation} 1s linear;

  @media ${({ theme }) => theme.lg} {
    position: absolute;
    right: -20px;
    top: -20px;
    width: 240px;
    height: 200px;
    background-image: url(${pattern});
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${patternAnimation} 1s linear;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    right: -80px;
    top: -80px;
    width: 240px;
    height: 200px;
    background-image: url(${pattern});
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${patternAnimation} 1s linear;
  }
`;
