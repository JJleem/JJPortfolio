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
import netflix from '../Components/assets/img/slideTwo/netflix.png'
import portfolio from '../Components/assets/img/slideTwo/portfolio.png'
import TMDB from '../Components/assets/img/one/TMDB.png'
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
        imgSrc3={`${netflix}`}
        title3={'Netflix'}
        hash3={`hash2`}
        logoOne3={`${react}`}
        logoTwo3={`${redux}`}
        logoThree3={`${TMDB}`}
        desc3={
          'Redux와 Axios를 사용했으며, redux-devtools-extension과 redux-thunk 라이브러리도 활용하여만든 netflix입니다.'
        }
        desc32={
          ' Redux를 사용하여 애플리케이션의 상태를 관리하고, Axios를 통해 TMDB API로부터 데이터를 가져왔습니다. 또한 redux-devtools-extension을 사용하여 Redux 관련 디버깅을 수행했으며, redux-thunk를 사용하여 비동기 작업을 처리했습니다. '
        }
        desc33={''}
        Link3={'https://netflix-jjleem-e4b56.web.app/'}
        imgSrc4={`${portfolio}`}
        title4={'포트폴리오'}
        hash4={`hash2`}
        logoOne4={`${react}`}
        logoTwo4={`${styledcomponents}`}
        logoThree4={`${firebase}`}
        desc4={
          '지금 보고계신 홈페이지입니다. React-fullpage를 사용하여 구현하였으며 react-transition-group 을 활용하여 애니메이션부분 들을 작업하였습니다. slide부분은 react-multi-carousel를 사용하였습니다.'
        }
        desc42={
          '많이 고민하고 열심히만들었으니 좋게봐주시면 감사하겠습니다. 많이 모자라지만 더욱 열심히 나아가겠습니다.'
        }
        desc43={'감사합니다.'}
        Link4={'#'}
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
