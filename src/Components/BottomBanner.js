import React from "react";
import { styled, keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BottomBanner = () => {
  const location = useLocation();

  const moveSection = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(0, 0);
    }
  };

  return (
    <CSSTransition
      in={location.hash === "#sectionOne" || location.hash === ""}
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || (`#sectionOne` && ``)}>
        <Container>
          <Icon icon={faArrowDown} onClick={moveSection} />
        </Container>
      </div>
    </CSSTransition>
  );
};

export default BottomBanner;

const arrowAnimation = keyframes`

  0% {
    transform:translate(0px, -8px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100px;
  height: 100px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.white};
  font-size: 30px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    animation: ${arrowAnimation} 0.3s linear;
  }
`;
