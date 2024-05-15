import React from "react";
import styled from "styled-components";
import logo from "../Components/assets/img/nav/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  return (
    <div>
      <WholeContainer>
        <>
          {[false].map((expand) => (
            <NavBarStyle
              key={expand}
              expand={expand}
              className="bg-body-tertiary mb-3"
            >
              <Container fluid>
                <NavBarStyle.Brand href="#">
                  <LogoContainer />
                  <TextStyle>+82 10-6313-6729 / leemjaejun@gmail.com</TextStyle>
                </NavBarStyle.Brand>

                <NavBarStyle.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <ContainerNav.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <OffcanvasStyle.Header closeButton>
                    <OffcanvasStyle.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <NavStyle.Link href="#action1">
                        JJ Portfoliod
                      </NavStyle.Link>
                    </OffcanvasStyle.Title>
                  </OffcanvasStyle.Header>
                  <Offcanvas.Body>
                    <NavStyle className="justify-content-end flex-grow-1 pe-3">
                      <NavStyle.Link href="#sectionOne">Home</NavStyle.Link>
                      <NavStyle.Link href="#sectionTwo">Link</NavStyle.Link>
                      <NavStyle.Link href="#sectionThree">Home</NavStyle.Link>
                      <NavStyle.Link href="#action2">Link</NavStyle.Link>
                    </NavStyle>
                  </Offcanvas.Body>
                </ContainerNav.Offcanvas>
              </Container>
            </NavBarStyle>
          ))}
        </>
      </WholeContainer>
    </div>
  );
};

export default NavBar;

const WholeContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
`;
const LogoContainer = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: center;
  width: 50px;
  height: 50px;
  opacity: 1;
  border: none !important;
  margin-left: 30px;
  /* border: 1px solid #f00 !important; */
`;

const NavBarStyle = styled(Navbar)`
  z-index: 0;
  width: 100%;
  background-color: transparent !important;
`;
const TextStyle = styled(Navbar)`
  font-family: "Inter";
  font-size: 12px;
  color: ${({ theme }) => theme.lightgray};
  margin-left: 30px;
  transition: all 0.7s;
  @media ${({ theme }) => theme.sm} {
    display: none;
  }

  @media ${({ theme }) => theme.lg} {
    z-index: 0;
    width: 100%;
    background-color: transparent !important;
    font-family: "Inter";
    font-size: 10px;
    color: ${({ theme }) => theme.lightgray};
  }
`;
const ContainerNav = styled(Navbar)`
  font-family: "Inter";
  border: 1px solid #f00;
  background: #f00 !important;
`;
const NavStyle = styled(Nav)`
  font-family: "InterBlack";
  font-size: 30px;
  border: 1px solid #f00;
  overflow-y: hidden;
`;

const OffcanvasStyle = styled(Offcanvas)`
  font-family: "InterBlack" !important;
  font-size: 30px;
  border: 1px solid #f00;
  background: #f00 !important;
  z-index: 9999;
`;
