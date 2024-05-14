import React from "react";
import { styled, keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
const CircleTwo = () => {
  const location = useLocation();

  return (
    <CSSTransition
      in={location.hash === "#sectionTwo" || location.hash === "#sectionTwo"}
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || `#sectionTwo`}>
        <CircleStyle />
      </div>
    </CSSTransition>
  );
};

export default CircleTwo;

const circleAnimation = keyframes`

  0% {
    transform:translate(-1000px, 0px);
  }
  100% {
    transform:translate(800px, -900px);
  }
`;

const CircleStyle = styled.div`
  position: absolute;
  width: 1000px;
  height: 1000px;
  left: -1000px;
  bottom: -1100px;
  border-radius: 100%;
  background-color: rgba(200, 200, 200, 0.2);
  animation: ${circleAnimation} 0.7s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    position: absolute;
    width: 800px;
    height: 800px;
    left: -1000px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media ${({ theme }) => theme.md} {
    position: absolute;
    width: 700px;
    height: 700px;
    left: -1000px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    width: 700px;
    height: 700px;
    left: -1200px;
    bottom: -1100px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;
