import React, { useState, useEffect } from 'react'
import { styled, keyframes } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
const Circle = () => {
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
            <div key={location.hash || (`#sectionOne` && '')}>
              <CircleStyle />
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
              <CircleStyleTwo />
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
              <CircleStyleThree />
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
            <div key={location.hash || (`#sectionOne` && '')}>
              <CircleStyle />
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

export default Circle

const circleAnimation = keyframes`

  0% {
    transform:translate(1000px, 0px);
  }
  100% {
    transform:translate(-800px, -900px);
  }
`

const CircleStyle = styled.div`
  position: absolute;
  width: 1300px;
  height: 1300px;
  right: -1200px;
  bottom: -1350px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  animation: ${circleAnimation} 0.7s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    position: absolute;
    width: 800px;
    height: 800px;
    right: -1000px;
    bottom: -1000px;
    border-radius: 100%;
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media ${({ theme }) => theme.md} {
    position: absolute;
    width: 700px;
    height: 700px;
    right: -1000px;
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
    right: -1200px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`

const circleAnimationTwo = keyframes`

  0% {
    transform:translate(-1000px, 0px);
  }
  100% {
    transform:translate(800px, -900px);
  }
`

const CircleStyleTwo = styled.div`
  position: absolute;
  width: 1300px;
  height: 1300px;
  opacity: 0.5;
  left: -1200px;
  bottom: -1350px;
  border-radius: 100%;
  background-color: rgba(45, 121, 199, 0.5);
  animation: ${circleAnimationTwo} 0.7s linear;
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
    background-color: rgba(45, 121, 199, 0.5);
    animation: ${circleAnimationTwo} 1s linear;
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
    background-color: rgba(45, 121, 199, 0.5);
    animation: ${circleAnimationTwo} 1s linear;
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
    background-color: rgba(45, 121, 199, 0.5);
    animation: ${circleAnimationTwo} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`

const CircleStyleThree = styled.div`
  position: absolute;
  width: 1300px;
  height: 1300px;
  right: -1200px;
  bottom: -1350px;
  border-radius: 100%;
  background-color: rgba(182, 234, 248, 0.3);
  animation: ${circleAnimation} 0.7s linear;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    position: absolute;
    width: 800px;
    height: 800px;
    right: -1000px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(182, 234, 248, 0.3);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media ${({ theme }) => theme.md} {
    position: absolute;
    width: 700px;
    height: 700px;
    right: -1000px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(182, 234, 248, 0.3);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    width: 700px;
    height: 700px;
    right: -1200px;
    bottom: -1000px;
    border-radius: 100%;
    background-color: rgba(182, 234, 248, 0.3);
    animation: ${circleAnimation} 1s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`
