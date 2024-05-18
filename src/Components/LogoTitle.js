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
  left: 10%;
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
    gap: 10px;
    animation: ${TitleAnimation} 1.5s linear;
  }
  @media ${({ theme }) => theme.xs} {
    gap: 8px;
  }
`
const Title = styled.div`
  font-size: 46px;
  font-family: 'NotoBold';
  line-height: 60px;
  transition: all 0.6s;
  color: ${({ theme }) => theme.graydark};
  @media ${({ theme }) => theme.lg} {
    font-size: 40px;
    line-height: 50px;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 35px;
    line-height: 46px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 25px;
    line-height: 50px;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 18px;
    line-height: 48px;
  }
`
const Img = styled.img`
  width: 55px;
  height: auto;
  transition: all 0.6s;
  @media ${({ theme }) => theme.md} {
    width: 35px;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.sm} {
    width: 33px;
  }
  @media ${({ theme }) => theme.xs} {
    width: 26px;
  }
`
