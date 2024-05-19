import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import react from '../Components/assets/img/one/React.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import mockup from '../Components/assets/img/slideOne/cham_stand04.jpg'
import dust from '../Components/assets/img/slideThree/dust.png'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
import javaScript from '../Components/assets/img/one/JavaScript.png'
import scss from '../Components/assets/img/one/Scss.png'
import node from '../Components/assets/img/one/Node.png'
const SectionThree = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${javaScript}`} text={'JavaScript'} />
      <Slide
        imgSrc={`${dust}`}
        title={'서울시 대기현황'}
        hash={'hash3'}
        logoOne={`${javaScript}`}
        logoTwo={`${scss}`}
        logoThree={`${node}`}
        desc={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
      />
    </Container>
  )
}

export default SectionThree
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  overflow-y: hidden;
  position: relative;
`
