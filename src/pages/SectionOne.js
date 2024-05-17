import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import typescript from '../Components/assets/img/one/Typescript.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${typescript}`} text={'Typescript Example'} />
      <Slide />
    </Container>
  )
}

export default SectionOne
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  overflow-y: hidden;
  position: relative;
`
const Title = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 46px;
  font-family: 'InterBlack';
  height: 50px;
`
