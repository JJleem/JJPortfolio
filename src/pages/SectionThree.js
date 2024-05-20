import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import react from '../Components/assets/img/one/React.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import mockup from '../Components/assets/img/slideOne/cham_stand04.jpg'
import dust from '../Components/assets/img/slideThree/dust.png'
import lotto from '../Components/assets/img/slideThree/lotto.png'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
import javaScript from '../Components/assets/img/one/JavaScript.png'
import scss from '../Components/assets/img/one/Scss.png'
import node from '../Components/assets/img/one/Node.png'
import html from '../Components/assets/img/one/Html.png'
import css from '../Components/assets/img/one/Css.png'
import theventi from '../Components/assets/img/slideThree/theventi.png'
import github from '../Components/assets/img/one/Github.png'
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
        desc12={''}
        imgSrc2={`${lotto}`}
        title2={'로또 생성기'}
        logoOne2={`${javaScript}`}
        logoTwo2={`${html}`}
        logoThree2={`${css}`}
        desc2={'JS, HTML, CSS 를 통해 작업한 로또 생성기 입니다. '}
        desc22={
          'random 함수를 이용하여 45개의 숫자 중 6개를 뽑고, 순서대로 나열하며 그 중 안뽑힌 숫자중 한개를 더 random하게 생성하였습니다.                        '
        }
        desc23={
          '또한 localstorage에 저장하여 저장한 번호를 열람할수있는 기능도 추가하였습니다.'
        }
        Link2={'https://lotto-generator-jjleem.web.app/'}
        imgSrc3={`${theventi}`}
        title3={'TheVenti 사이트 클론코딩  협업프로젝트'}
        hash3={`hash2`}
        logoOne3={`${javaScript}`}
        logoTwo3={`${scss}`}
        logoThree3={`${github}`}
        desc3={
          '안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.안녕하세요 저는 임재준입니다. 잘부탁드립니다 잘부탁드립니다.'
        }
        Link3={'https://theventi-d1217.web.app/common/common.html'}
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
