import React, { useState, useEffect } from 'react'
import { styled, keyframes } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'

const BottomBanner = () => {
  const location = useLocation()
  const [selectedSection, setSelectedSection] = useState('sectionOne')

  useEffect(() => {
    const handleHashChange = () => {
      const section = window.location.hash.substr(1)
      setSelectedSection(section)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.addEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (selectedSection) {
      case 'sectionTwo':
        return (
          <Container>
            <Text>02</Text>
          </Container>
        )
      case 'sectionThree':
        return (
          <Container>
            <Text>03</Text>
          </Container>
        )
      case 'sectionFour':
        return (
          <Container>
            <Text>04</Text>
          </Container>
        )
      case 'sectionFive':
        return (
          <Container>
            <Text>05</Text>
          </Container>
        )
      case 'sectionSix':
        return (
          <Container>
            <Text>06</Text>
          </Container>
        )
      default:
        return (
          <CSSTransition
            in={location.hash === '#sectionOne' || location.hash === ''}
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
        )
    }
  }

  return (
    <div key={selectedSection}>
      <div>{renderContent()}</div>
    </div>
  )
}

export default BottomBanner

const arrowAnimation = keyframes`

  0% {
    transform:translate(0px, -8px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`

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
  transition: all 0.3s;
  border-radius: 10px 0px 0px 0px;

  @media ${({ theme }) => theme.xs} {
    width: 80px;
    height: 80px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.white};
  font-size: 26px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    animation: ${arrowAnimation} 0.3s linear;
  }

  @media ${({ theme }) => theme.xs} {
    font-size: 24px;
  }
`
const Text = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 20px;
`
