import React, { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

const BottomBanner = () => {
  const location = useLocation();
  const [selectedSection, setSelectedSection] = useState("sectionOne");

  useEffect(() => {
    const handleHashChange = () => {
      const section = window.location.hash.substr(1);
      setSelectedSection(section);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (selectedSection) {
      case "sectionOne":
        return (
          <CSSTransition
            in={location.hash === "#sectionOne" || location.hash === ""}
            timeout={500}
            classNames="page-transition"
            unmountOnExit
          >
            <div key={location.hash || (`#sectionOne` && ``)}>
              <Container>
                <Nav.Link href="#sectionTwo">
                  <Icon icon={faArrowDown}></Icon>
                </Nav.Link>
              </Container>
            </div>
          </CSSTransition>
        );

      case "sectionTwo":
        return <Container>1</Container>;
      default:
        return "";
    }
  };

  return (
    <div key={selectedSection}>
      <div>{renderContent()}</div>
    </div>
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
