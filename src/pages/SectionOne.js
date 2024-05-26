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
import hookform from '../Components/assets/img/one/hookform.png'
import query from '../Components/assets/img/one/query.png'
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <LogoTitle img={`${typescript}`} text={'Typescript '} />
      <Slide
        imgSrc2={`${bitcoin}`}
        title2={'비트코인'}
        hash={'hash1'}
        logoOne2={`${typescript}`}
        logoTwo2={`${react}`}
        logoThree2={`${query}`}
        desc2={
          'Typescript와 React, Style-Components를 활용해 작업한 비트코인 리스트 및 시세,차트 입니다.'
        }
        desc22={
          'react-query를 활용해 데이터API를 호출하였고, react-router-dom을 활용하여 라우팅기능을 구현하였습니다.'
        }
        desc23={
          '마지막 비트코인 차트 부분은 apexcharts를 활용해 작업하였습니다. 실시간 비트코인 정보를 원했지만 유료 인관계로 MyJsonServer를 활용해 json을 구축하였습니다. '
        }
        Link2={'https://bitcoin-jjleem.web.app/'}
        imgSrc={`${login}`}
        title={'네이버 회원가입'}
        logoOne={`${typescript}`}
        logoTwo={`${react}`}
        logoThree={`${hookform}`}
        desc={
          'Typescript, React, Style-components를 활용해 작업한 네이버 회원가입 창 입니다.'
        }
        desc12={
          'react-hook-form과 yup을 사용해 form구조와 Input의 속성값들을 지정해주었습니다.'
        }
        desc13={
          'react-hook-form 내의 formState를 통해 error 관리를하였으며, 각종 액티브한 색상변경들은 useState를 적극활용해 작업하였습니다. 현재 회원가입후 데이터를 보내는 작업은 작업진행중에 있습니다.'
        }
        Link={'https://naverlogin-jjleem.web.app'}
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
