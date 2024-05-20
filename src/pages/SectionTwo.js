import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import react from '../Components/assets/img/one/React.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import mockup from '../Components/assets/img/slideOne/cham_stand04.jpg'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
import redux from '../Components/assets/img/one/Redux.png'
import firebase from '../Components/assets/img/one/Firebase.png'
import mbti from '../Components/assets/img/slideTwo/mbti.png'

const SectionTwo = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${react}`} text={'React'} />
      <Slide
        imgSrc={`${mockup}`}
        title={'비트코인'}
        hash={`hash2`}
        logoOne={`${react}`}
        logoTwo={`${redux}`}
        logoThree={`${styledcomponents}`}
        desc={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
        imgSrc2={`${mbti}`}
        title2={'MBTI 회사 성격 테스트'}
        hash2={`hash2`}
        logoOne2={`${react}`}
        logoTwo2={`${styledcomponents}`}
        logoThree2={`${firebase}`}
        desc2={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
        Link2={'https://mbti-jjleem.web.app/'}
        imgSrc3={`${mbti}`}
        title3={'MBTI 회사 성격 테스트'}
        hash3={`hash2`}
        logoOne3={`${react}`}
        logoTwo3={`${styledcomponents}`}
        logoThree3={`${firebase}`}
        desc3={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
        Link3={'https://mbti-jjleem.web.app/'}
      />
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
