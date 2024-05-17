import React from 'react'
import { styled, keyframes } from 'styled-components'
import typescript from './assets/img/one/Typescript.png'
import react from './assets/img/one/React.png'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

const LogoTitle = ({ img, text }) => {
  const location = useLocation()
  return (
    <CSSTransition
      in={
        location.hash === '#sectionTwo' ||
        location.hash === '#sectionThree' ||
        location.hash === '#sectionFour'
      }
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || (`#sectionOne` && '')}>
        <Container>
          <Img src={img}></Img>
          <Title>{text}</Title>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default LogoTitle
const TitleAnimation = keyframes`

  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
const Container = styled.div`
  position: absolute;
  top: 12%;
  left: 15%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transition: all 0.6s;
  animation: ${TitleAnimation} 1.5s linear;

  @media ${({ theme }) => theme.lg} {
    position: absolute;
    top: 12%;
    left: 10%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;
    animation: ${TitleAnimation} 1.5s linear;
  }
  @media ${({ theme }) => theme.md} {
    position: absolute;
    top: 12%;
    left: 8%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;
    animation: ${TitleAnimation} 1.5s linear;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    top: 12%;
    left: 3%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;
    animation: ${TitleAnimation} 1.5s linear;
  }
  @media ${({ theme }) => theme.xs} {
    position: absolute;
    top: 12%;
    left: 3%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.6s;
    animation: ${TitleAnimation} 1.5s linear;
  }
`
const Title = styled.div`
  font-size: 46px;
  font-family: 'InterBlack';
  height: 50px;
  transition: all 0.6s;
  @media ${({ theme }) => theme.lg} {
    font-size: 40px;
    font-family: 'InterBlack';
    line-height: 50px;
    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 35px;
    font-family: 'InterBlack';
    line-height: 46px;
    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 30px;
    font-family: 'InterBlack';
    line-height: 50px;
    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 26px;
    font-family: 'InterBlack';
    line-height: 48px;
    transition: all 0.6s;
  }
`
const Img = styled.img`
  width: 55px;
  height: auto;
  /* object-fit: cover; */

  transition: all 0.6s;
  @media ${({ theme }) => theme.lg} {
    width: 55px;
    height: auto;

    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.md} {
    width: 35px;
    height: auto;
    object-fit: cover;
    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.sm} {
    width: 33px;
    height: auto;
    object-fit: cover;
    transition: all 0.6s;
  }
  @media ${({ theme }) => theme.xs} {
    width: 26px;
    height: auto;
    object-fit: cover;
    transition: all 0.6s;
  }
`
