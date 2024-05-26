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
        imgSrc3={`${dust}`}
        title3={'서울시 대기현황'}
        hash={'hash3'}
        logoOne3={`${javaScript}`}
        logoTwo3={`${scss}`}
        logoThree3={`${node}`}
        desc3={
          '서울시 공공데이터포털에서 권역구대기현황 API를 호출하여 작업한 서울시 대기현황정보입니다.'
        }
        desc32={
          'CORS오류를 처음으로 만난 작업물로써 그로인하여 Node를사용해 server를열었고 그 server를 활용해 호출하였습니다.'
        }
        desc33={'추후 더욱 더 develop할 예정입니다.'}
        Link3={'https://seouldustcheck-jjleem.web.app/'}
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
        imgSrc={`${theventi}`}
        title={'TheVenti 사이트 클론코딩  협업프로젝트'}
        hash3={`hash2`}
        logoOne={`${javaScript}`}
        logoTwo={`${scss}`}
        logoThree={`${github}`}
        desc={
          '팀원들과 협업하여 HTML, SCSS, JavaScript를 사용하여 사이트를 구현했으며, Github을 통해 협업 작업을 수행했습니다.'
        }
        desc12={
          '메인 페이지와 공통적인 header, footer, quickmenu 등의 반응형 토글 기능을 구현했습니다. 이를 통해 사이트의 핵심적인 부분을 담당하여 프로젝트 전체에 기여할 수 있었습니다.'
        }
        desc13={
          '특히 반응형 웹 개발과 Git을 활용한 협업 경험을 쌓을 수 있었습니다. 또한 팀원들과의 원활한 소통과 협업을 통해 프로젝트 관리 능력도 향상시킬 수 있었습니다.'
        }
        Link={'https://theventi-d1217.web.app/common/common.html'}
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
