import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import react from '../Components/assets/img/one/React.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import SlideSection from '../Components/slideSection/SlideSection'
const SectionTwo = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${react}`} text={'React'} />
      <Slide />
    </Container>
  )
}

export default SectionTwo
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  overflow-y: hidden;
  position: relative;
`
