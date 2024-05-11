import React from "react";

import styled from "styled-components";
import logo from "../Components/assets/img/nav/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
                  <TextStyle>
                    +82 10-6313-6729 / leemjaejun@gamail.com
                  </TextStyle>
                </NavBarStyle.Brand>

                <NavBarStyle.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <NavBarStyle.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </NavBarStyle.Offcanvas>
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
  z-index: 1;
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
    z-index: 1;
    width: 100%;
    background-color: transparent !important;
    font-family: "Inter";
    font-size: 10px;
    color: ${({ theme }) => theme.lightgray};
  }
`;

// const ToggleStyle = styled(Toggle)`
//   border: none;
// `;
