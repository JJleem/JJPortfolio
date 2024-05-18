import React, { useState, useEffect } from 'react'
import { styled, keyframes } from 'styled-components'
import pattern from './assets/img/main/plus-dark-pattern.png'
import patternTwo from './assets/img/main/plus-light-pattern.png'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
const Pattern = () => {
  const location = useLocation()
  const [selectedSection, setSelectedSection] = useState('sectionOne')
  useEffect(() => {
    const handleHashChange = () => {
      const section = window.location.hash.substr(1)
      setSelectedSection(section)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (selectedSection) {
      case 'sectionOne':
        return (
          <CSSTransition
            in={location.hash === '#sectionOne' || location.hash === ''}
            timeout={500}
            classNames="page-transition"
            unmountOnExit
          >
            <div key={location.hash || `#sectionOne`}>
              <PatternStyle />
            </div>
          </CSSTransition>
        )

      case 'sectionTwo':
        return (
          <CSSTransition
            in={
              location.hash === '#sectionTwo' || location.hash === '#sectionTwo'
            }
            timeout={500}
            classNames="page-transition"
            unmountOnExit
          >
            <div key={location.hash || `#sectionTwo`}>
              <PatternStyleTwo />
            </div>
          </CSSTransition>
        )
      case 'sectionThree':
        return (
          <CSSTransition
            in={
              location.hash === '#sectionThree' ||
              location.hash === '#sectionThree'
            }
            timeout={500}
            classNames="page-transition"
            unmountOnExit
          >
            <div key={location.hash || `#sectionThree`}>
              <PatternStyle />
            </div>
          </CSSTransition>
        )
      default:
        return (
          <CSSTransition
            in={location.hash === '#sectionOne' || location.hash === ''}
            timeout={500}
            classNames="page-transition"
            unmountOnExit
          >
            <div key={location.hash || `#sectionOne`}>
              <PatternStyle />
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

export default Pattern

const patternAnimation = keyframes`

  0% {
    transform:translate(-1000px, 0px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`
const PatternStyle = styled.div`
  position: absolute;
  width: 250px;
  height: 200px;
  left: -3px;
  top: 0px;
  background-image: url(${pattern});
  opacity: 0.7;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.7s;
  animation: ${patternAnimation} 1s linear;

  @media ${({ theme }) => theme.lg} {
    left: -20px;
    top: -20px;
  }
  @media ${({ theme }) => theme.sm} {
    left: -80px;
    top: -80px;
  }
`

const patternAnimationTwo = keyframes`

  0% {
    transform:translate(1000px, 0px);
  }
  100% {
    transform:translate(0px, 0px);
  }
`
const PatternStyleTwo = styled.div`
  position: absolute;
  width: 240px;
  height: 200px;
  right: -3px;
  top: -3px;
  background-image: url(${patternTwo});
  opacity: 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.7s;
  animation: ${patternAnimationTwo} 1s linear;

  @media ${({ theme }) => theme.lg} {
    right: -20px;
    top: -20px;
  }
  @media ${({ theme }) => theme.sm} {
    right: -80px;
    top: -80px;
  }
`
