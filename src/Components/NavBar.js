import React from 'react'
import styled from 'styled-components'
import logo from '../Components/assets/img/nav/logo.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useLocation } from 'react-router-dom'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
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
                <NavBarStyle.Brand href="#sectionOne">
                  <LogoContainer />
                  <TextStyle>+82 10-6313-6729 / leemjaejun@gmail.com</TextStyle>
                </NavBarStyle.Brand>

                <NavBarStyle.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  style={{ border: 'none' }}
                />
                <ContainerNav.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: 'inset 0px 0px 100px 0px #999',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    OverflowY: 'hidden',
                    height: '100%'
                  }}
                >
                  <OffcanvasStyle.Header closeButton></OffcanvasStyle.Header>
                  <Offcanvas.Body style={{ padding: '50px 0px' }}>
                    <OffcanvasStyle.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                      style={{
                        display: 'flex',
                        gap: '20px',
                        marginRight: '20px',
                        justifyContent: 'end',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#286da3',
                        transition: 'all 0.8s'
                      }}
                    >
                      <Nav
                        style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: '#000',
                          lineHeight: 1,
                          marginRight: '30px'
                        }}
                      >
                        JJ Portfolio
                      </Nav>
                      <NavStyle.Link
                        href="https://github.com/JJleem"
                        target="_blank"
                      >
                        <Git>Github.</Git>
                      </NavStyle.Link>
                      <NavStyle.Link
                        href="https://www.instagram.com/dlawowns04/"
                        target="_blank"
                      >
                        <Insta>Instagram.</Insta>
                      </NavStyle.Link>
                    </OffcanvasStyle.Title>
                    <Overflow>
                      <NavStyle className="justify-content-end flex-grow-1 pe-3">
                        <NavBarStyle.Toggle
                          aria-controls={`offcanvasNavbar-expand-${expand}`}
                          style={{ border: 'none' }}
                        >
                          <NavStyle.Link href="#sectionOne">Home</NavStyle.Link>
                        </NavBarStyle.Toggle>
                        <NavBarStyle.Toggle
                          aria-controls={`offcanvasNavbar-expand-${expand}`}
                          style={{ border: 'none' }}
                        >
                          <NavStyle.Link href="#sectionTwo">
                            Typescript
                          </NavStyle.Link>
                        </NavBarStyle.Toggle>
                        <NavBarStyle.Toggle
                          aria-controls={`offcanvasNavbar-expand-${expand}`}
                          style={{ border: 'none' }}
                        >
                          <NavStyle.Link href="#sectionThree">
                            React
                          </NavStyle.Link>
                        </NavBarStyle.Toggle>
                        <NavBarStyle.Toggle
                          aria-controls={`offcanvasNavbar-expand-${expand}`}
                          style={{ border: 'none' }}
                        >
                          <NavStyle.Link href="#sectionFour">
                            Javascript
                          </NavStyle.Link>
                        </NavBarStyle.Toggle>
                        <NavBarStyle.Toggle
                          aria-controls={`offcanvasNavbar-expand-${expand}`}
                          style={{ border: 'none' }}
                        >
                          <NavStyle.Link href="#sectionFive">
                            SkillStack
                          </NavStyle.Link>
                        </NavBarStyle.Toggle>
                      </NavStyle>
                    </Overflow>
                  </Offcanvas.Body>
                </ContainerNav.Offcanvas>
              </Container>
            </NavBarStyle>
          ))}
        </>
      </WholeContainer>
    </div>
  )
}

export default NavBar

const WholeContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  overflow: hidden;
`
const LogoContainer = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: center;
  width: 50px;
  height: 50px;
  opacity: 1;
  margin-left: 30px;
  @media ${({ theme }) => theme.sm} {
    margin-left: 10px;
  }
`

const NavBarStyle = styled(Navbar)`
  z-index: 0;
  width: 100%;
  background-color: transparent !important;
`
const TextStyle = styled(Navbar)`
  font-family: 'Inter';
  font-size: 12px;
  color: ${({ theme }) => theme.lightgray};
  margin-left: 30px;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    font-size: 10px;
  }
  @media ${({ theme }) => theme.sm} {
    display: none;
  }
`
const ContainerNav = styled(Navbar)`
  font-family: 'Inter';
`
const NavStyle = styled(Nav)`
  font-family: 'InterBlack';
  font-size: 40px;
  text-align: center;
  display: flex;
  gap: 80px;
  border-top: 1px solid ${(props) => props.theme.gray};
  border-bottom: 1px solid ${(props) => props.theme.gray};
  padding: 50px 0px 50px 0px;
  @media ${({ theme }) => theme.xs} {
    font-size: 30px;
    gap: 35px;
  }
`
const Overflow = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 700px;
`
const OffcanvasStyle = styled(Offcanvas)``

const Git = styled.span`
  color: ${({ theme }) => theme.indigo};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  transition: all 0.6s;
`
const Insta = styled.span`
  color: #dd2a7b;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  transition: all 0.6s;
`
