import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import typescript from '../Components/assets/img/one/Typescript.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import bitcoin from '../Components/assets/img/slideOne/Bitcoin.png'
import react from '../Components/assets/img/one/React.png'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${typescript}`} text={'Typescript '} />
      <Slide
        imgSrc={`${bitcoin}`}
        title={'비트코인'}
        hash={'hash1'}
        logoOne={`${typescript}`}
        logoTwo={`${react}`}
        logoThree={`${styledcomponents}`}
        desc={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
        Link={'https://www.instagram.com/dlawowns04/'}
        LinkHash={'hash1'}
      />
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
