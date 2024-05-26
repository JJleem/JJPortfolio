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
import router from '../Components/assets/img/one/Router.png'
import firebase from '../Components/assets/img/one/Firebase.png'
import mbti from '../Components/assets/img/slideTwo/mbti.png'
import gecko from '../Components/assets/img/slideTwo/gecko.png'
const SectionTwo = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${react}`} text={'React'} />
      <Slide
        imgSrc={`${gecko}`}
        title={'크레 다이어리'}
        hash={`hash2`}
        logoOne={`${react}`}
        logoTwo={`${router}`}
        logoThree={`${styledcomponents}`}
        desc={
          'React를 사용해 작업한 Breeding Diary입니다. React-router-dom를 주된 기능으로 작업하여 id값과 params값으로 각 Gecko들의 페이지를 설정하였습니다.'
        }
        desc12={
          '데이터는 MyJsonServer를 사용하여 구현하였으며 각 Gecko들 페이지 안에 일기장을 만들어놓았고, CRUD기능을 구현하였습니다. 각 일기장은 localstorage에 저장되어 확인할수있습니다. 세부적인 css부분들은 작업중에있습니다.'
        }
        Link={'https://geckodiary-jjleem.web.app'}
        imgSrc2={`${mbti}`}
        title2={'MBTI 회사 성격 테스트'}
        hash2={`hash2`}
        logoOne2={`${react}`}
        logoTwo2={`${router}`}
        logoThree2={`${styledcomponents}`}
        desc2={
          'React,react-router-dom,styled-components를 활용해 작업한 MBIT 테스트 입니다.'
        }
        desc22={
          '클릭한 문항에 따라 count를 매겨 params값을 생성해 react-router-dom을 활용하여 간단하게 작업하였습니다. 내부 Progress-bar 등은 react-bootstrap을 활용하였습니다.'
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
