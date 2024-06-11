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
  const location = useLocation()
  const isSectionOne = location.hash === '#sectionOne' || location.hash === ''
  const isSectionTwo = location.hash === '#sectionTwo'
  const isSectionThree = location.hash === '#sectionThree'
  const isSectionFour = location.hash === '#sectionFour'
  const isSectionFive = location.hash === '#sectionFive'

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

                <Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <ContainerNav.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,1)',
                    OverflowY: 'hidden',
                    height: '100%',
                    fontWeight: 'bold'
                  }}
                >
                  <Close closeButton></Close>
                  <Offcanvas.Body>
                    <NavStyle>
                      <LinkStyle href="#sectionOne" isSection={isSectionOne}>
                        {location.hash === '#sectionOne' || location.hash === ''
                          ? '/ Home'
                          : 'Home'}
                      </LinkStyle>

                      <LinkStyle href="#sectionTwo" isSection={isSectionTwo}>
                        {location.hash === '#sectionTwo'
                          ? '/ Typescript'
                          : 'Typescript'}
                      </LinkStyle>

                      <LinkStyle
                        href="#sectionThree"
                        isSection={isSectionThree}
                      >
                        {location.hash === '#sectionThree'
                          ? '/ React'
                          : 'React'}
                      </LinkStyle>

                      <LinkStyle href="#sectionFour" isSection={isSectionFour}>
                        {location.hash === '#sectionFour'
                          ? '/ Javascript'
                          : 'Javascript'}
                      </LinkStyle>

                      <LinkStyle href="#sectionFive" isSection={isSectionFive}>
                        {location.hash === '#sectionFive'
                          ? '/ SkillStack'
                          : 'SkillStack'}
                      </LinkStyle>
                    </NavStyle>
                    <SnsWrapper>
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
                    </SnsWrapper>
                    <SubTitle id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <Nav
                        style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          lineHeight: 1,
                          marginRight: '30px'
                        }}
                      ></Nav>
                    </SubTitle>
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
  overflow-y: hidden;
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
const SnsWrapper = styled.div`
  display: flex;
  padding: 20px;
  position: absolute;
  right: 0;
  gap: 20px;
  font-size: 20px;
  line-height: 1.5;
  padding-top: 50px;
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
  font-size: 30px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 60px;
  height: fit-content;

  margin-top: 60px;
  @media ${({ theme }) => theme.xs} {
    font-size: 30px;
    gap: 35px;
  }
`
const LinkStyle = styled(NavStyle.Link)`
  transition: all 0.6s;
  text-align: left;
  padding-left: 30px;
  color: ${(props) =>
    props.isSection ? props.theme.cityBold : props.theme.city} !important;
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

const SubTitle = styled(OffcanvasStyle.Title)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  position: absolute;
  bottom: 200px;
  right: -175px;
  transform: rotate(270deg);
  color: ${({ theme }) => theme.city};
  z-index: 2;
`

const Toggle = styled(NavBarStyle.Toggle)`
  border: none;
  outline: none;
  box-shadow: none;
  transition: all 0.6s;
  &:focus {
    box-shadow: none;
    transform: scale(1.2);
  }
`
const Close = styled(OffcanvasStyle.Header)``
