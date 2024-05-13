import React from "react";
import { styled, keyframes } from "styled-components";
import pattern from "./assets/img/main/plus-dark-pattern.png";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
const Pattern = () => {
  const location = useLocation();

  return (
    <CSSTransition
      in={location.hash === "#sectionOne" || location.hash === ""}
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || `#sectionOne`}>
        <PatternStyle />
      </div>
    </CSSTransition>
  );
};

export default Pattern;

const patternAnimation = keyframes`

  0% {
    transform:translate(-1000px, 0px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`;
const PatternStyle = styled.div`
  position: absolute;
  width: 250px;
  height: 200px;
  left: -3px;
  top: -3px;
  background-image: url(${pattern});
  opacity: 0.7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.7s;
  animation: ${patternAnimation} 1s linear;

  @media ${({ theme }) => theme.lg} {
    position: absolute;
    left: -20px;
    top: -20px;
    width: 250px;
    height: 200px;
    background-image: url(${pattern});
    opacity: 0.7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${patternAnimation} 1s linear;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    left: -80px;
    top: -80px;
    width: 250px;
    height: 200px;
    background-image: url(${pattern});
    opacity: 0.7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${patternAnimation} 1s linear;
  }
`;
