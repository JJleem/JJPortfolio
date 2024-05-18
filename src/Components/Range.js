import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled, keyframes } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const Range = () => {
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
            timeout={-500}
            classNames="page-transition"
            unmountOnExit="true"
            exit
          >
            <div key={location.hash || `#sectionOne`}>
              <Container>
                <RangeStyle>
                  <Inner />
                </RangeStyle>
              </Container>
            </div>
          </CSSTransition>
        )

      case 'sectionTwo':
        return (
          <CSSTransition
            in={
              location.hash === '#sectionTwo' || location.hash === 'sectionTwo'
            }
            timeout={-500}
            classNames="page-transition"
            unmountOnExit
            exit
          >
            <div key={location.hash || `#sectionTwo`}>
              <ContainerTwo>
                <RangeStyleTwo>
                  <InnerTwo />
                </RangeStyleTwo>
              </ContainerTwo>
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
            timeout={-500}
            classNames="page-transition"
            unmountOnExit
            exit
          >
            <div key={location.hash || `#sectionThree`}>
              <ContainerThree>
                <RangeStyleThree>
                  <InnerThree />
                </RangeStyleThree>
              </ContainerThree>
            </div>
          </CSSTransition>
        )
      default:
        return (
          <CSSTransition
            in={location.hash === '#sectionOne' || location.hash === ''}
            timeout={-500}
            classNames="page-transition"
            unmountOnExit="true"
            exit
          >
            <div key={location.hash || `#sectionOne`}>
              <Container>
                <RangeStyle>
                  <Inner />
                </RangeStyle>
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

export default Range
const rangeAnimation = keyframes`

  0% {
    opacity:0;
  }
  100% {
    opacity:1;
   

  }
`
const rangeInnerAnimation = keyframes`

  0% {
    opacity:1;
    top: 50%;
  }
  100% {
    opacity:1;
    top:0%;
   

  }
`

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  z-index: 1;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimation} 0.8s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`
const RangeStyle = styled.div`
  width: 3px;
  height: 150px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`

const Inner = styled.div`
  position: absolute;
  animation-fill-mode: forwards !important;
  width: 3px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
  animation: ${rangeInnerAnimation} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`

const rangeAnimationTwo = keyframes`

  0% {
    opacity:0;
  }
  100% {
    opacity:1;
 

  }
`
const rangeInnerAnimationTwo = keyframes`

  0% {
    opacity:1;
    top: 0%;
    width:3px;
  
  }
  100% {
    opacity:1;
    top:30%;
    width:3px;
  
   

  }
`
const rangeStyleAnimationTwo = keyframes`

  0% {
    opacity:1;
    top: 0%;
    width:3px;
   
  }
  100% {
    opacity:1;
    top:25%;
    width:3px;
 
  }
`

const ContainerTwo = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  z-index: 1;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimationTwo} 1s linear;
  box-shadow: 0px 0px 1px rgba(45, 121, 199, 1);
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`
const RangeStyleTwo = styled.div`
  width: 5px;
  height: 150px;
  background-color: rgba(45, 121, 199, 1);
  animation-fill-mode: forwards !important;
  animation: ${rangeStyleAnimationTwo} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`

const InnerTwo = styled.div`
  position: absolute;
  animation-fill-mode: forwards !important;
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  animation: ${rangeInnerAnimationTwo} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`
const rangeInnerAnimationThree = keyframes`

  0% {
    opacity:1;
    top: 0%;
    width:3px;
  
  }
  100% {
    opacity:1;
    top:50%;
    width:3px;
  
   

  }
`

const InnerThree = styled.div`
  position: absolute;
  animation-fill-mode: forwards !important;
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  animation: ${rangeInnerAnimationThree} 1s linear;
  border: 1px solid rgba(182, 234, 248, 0.5);

  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`
const ContainerThree = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  z-index: 1;
  animation-fill-mode: forwards !important;
  animation: ${rangeAnimationTwo} 1s linear;

  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`

const RangeStyleThree = styled.div`
  width: 5px;
  height: 150px;
  background-color: rgba(182, 234, 248);
  animation-fill-mode: forwards !important;
  animation: ${rangeStyleAnimationTwo} 1s linear;
  @media ${({ theme }) => theme.lg} {
    display: none;
  }
`
