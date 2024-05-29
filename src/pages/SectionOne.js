import React from 'react'
import styled from 'styled-components'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import typescript from '../Components/assets/img/one/Typescript.png'
import LogoTitle from '../Components/LogoTitle'
import Slide from '../Components/Slide'
import bitcoin from '../Components/assets/img/slideOne/Bitcoin.png'
import login from '../Components/assets/img/slideOne/Login.png'
import react from '../Components/assets/img/one/React.png'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
import kanbanboard from '../Components/assets/img/slideOne/kanbanboard.png'
import hookform from '../Components/assets/img/one/hookform.png'
import query from '../Components/assets/img/one/query.png'
import recoil from '../Components/assets/img/one/recoil.png'
import dnd from '../Components/assets/img/one/dnd.png'
import global from '../Components/assets/img/slideOne/global.png'
import leaflet from '../Components/assets/img/one/Leaflet.png'
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${typescript}`} text={'Typescript '} />
      <Slide
        imgSrc4={`${bitcoin}`}
        title4={'비트코인'}
        hash={'hash1'}
        logoOne4={`${typescript}`}
        logoTwo4={`${react}`}
        logoThree4={`${query}`}
        desc4={
          'Typescript와 React, Style-Components를 활용해 작업한 비트코인 리스트 및 시세,차트 입니다.'
        }
        desc42={
          'react-query를 활용해 데이터API를 호출하였고, react-router-dom을 활용하여 라우팅기능을 구현하였습니다.'
        }
        desc43={
          '마지막 비트코인 차트 부분은 apexcharts를 활용해 작업하였습니다. 실시간 비트코인 정보를 원했지만 유료 인관계로 MyJsonServer를 활용해 json을 구축하였습니다. '
        }
        Link4={'https://bitcoin-jjleem.web.app/'}
        imgSrc={`${global}`}
        title={'Global Map'}
        logoOne={`${typescript}`}
        logoTwo={`${query}`}
        logoThree={`${leaflet}`}
        desc={
          'Typescript와 React-Query, React-leaflet를 활용해 작업한 전 세계 지도 및 정보입니다.'
        }
        desc12={
          'react-query를 활용해 각 나라의 정보,국기,이미지들을 호출하였고, react-leaflet을통해 세계지도를 불러왔습니다.'
        }
        desc13={
          '그리고 Geojson을 활용해 각 나라의 위치값 path 를 적용하였습니다. 각 API들과 Geojson을 학습하기에 좋은 예제였습니다. '
        }
        Link={'https://globalmap-jjleem.web.app'}
        imgSrc2={`${login}`}
        title2={'네이버 회원가입'}
        logoOne2={`${typescript}`}
        logoTwo2={`${react}`}
        logoThree2={`${hookform}`}
        desc2={
          'Typescript, React, Style-components를 활용해 작업한 네이버 회원가입 창 입니다.'
        }
        desc22={
          'react-hook-form과 yup을 사용해 form구조와 Input의 속성값들을 지정해주었습니다.'
        }
        desc23={
          'react-hook-form 내의 formState를 통해 error 관리를하였으며, 각종 액티브한 색상변경들은 useState를 적극활용해 작업하였습니다. 현재 회원가입후 데이터를 보내는 작업은 작업진행중에 있습니다.'
        }
        Link2={'https://naverlogin-jjleem.web.app'}
        imgSrc3={`${kanbanboard}`}
        title3={'D&D TodoList'}
        logoOne3={`${typescript}`}
        logoTwo3={`${recoil}`}
        logoThree3={`${dnd}`}
        desc3={
          'react-beautiful-dnd 라이브러리를 사용한 drag & drop todolist입니다.'
        }
        desc32={
          '상태관리는 Recoil을 통해 이루어졌습니다. 제가 구현한 할 일 목록 애플리케이션에서는 toDoState라는 전역 상태를 사용하여, 애플리케이션 전체에서 할 일 목록의 상태를 쉽게 공유하고 업데이트할 수 있도록 했습니다.'
        }
        desc33={'Recoil에 대해 많은 학습이되는 예제였습니다.'}
        Link3={'https://kanbanboard-jjleem.web.app'}
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
