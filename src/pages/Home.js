import React from 'react'
import Pattern from '../Components/Pattern'
import Circle from '../Components/Circle'
import { styled } from 'styled-components'
import JJMain from '../Components/assets/img/main/jjMain.png'
import Box from '../Components/Box'

const Home = () => {
  return (
    <Container>
      <Pattern />
      <Circle />

      <BoxContainer>
        <Box end={3} text={'TS'} />
        <Box end={4} text={'React'} />
        <Box end={4} text={'JS'} />
      </BoxContainer>

      <MainText>
        안녕하세요! <br />
        <TextHilight>신입 프론트엔드 개발자</TextHilight>로 <br /> 나아가는 중인
        임재준입니다.
      </MainText>
      <MainImg />
    </Container>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #3f93d9;
  background: #3f93d9;
  background: radial-gradient(
    circle,
    rgba(70, 171, 230, 1) 0%,
    rgba(49, 115, 200, 0.9710259103641457) 100%
  );
`

const MainText = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 46px;
  font-family: 'NotoBold';
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  line-height: 1.5;
  transition: all 0.7s;
  z-index: 2;
  text-shadow: 0px 0px 4px #000;
  @media ${({ theme }) => theme.lg} {
    font-size: 36px;
    top: 45%;
    left: 35%;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 28px;
    top: 48%;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 20px;
    top: 55%;
    left: 35%;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 24px;
    left: 45%;
    width: 290px;
    height: fit-content;
  }
`

const TextHilight = styled.span`
  color: ${({ theme }) => theme.cityBold};
  font-size: 50px;
  font-family: 'NotoBold';
  transition: all 0.7s;
  text-shadow: 0px 0px 3px #fff;
  z-index: 2;
  @media ${({ theme }) => theme.lg} {
    font-size: 38px;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 26px;
  }
`
const MainImg = styled.div`
  background-image: url(${JJMain});
  width: 1440px;
  height: 1070px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: 0;
  left: 66%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.7s;
  opacity: 1;

  @media ${({ theme }) => theme.md} {
    width: 1200px;
    height: 1000px;
  }
  @media ${({ theme }) => theme.sm} {
    width: 800px;
    height: 900px;
    top: 53%;
  }
  @media ${({ theme }) => theme.xs} {
    width: 800px;
    height: 650px;
    left: 67%;
    top: 53%;
    opacity: 1;
  }
`

const BoxContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  height: 100px;
  padding: 10px;
  transition: all 0.7s;
  z-index: 1;
  @media ${({ theme }) => theme.lg} {
    top: 65%;
    left: 35%;
  }
  @media ${({ theme }) => theme.md} {
    top: 65%;
    left: 37%;
  }
  @media ${({ theme }) => theme.sm} {
    top: 68%;
    left: 39%;
  }
  @media ${({ theme }) => theme.xs} {
    top: 75%;
    left: 50%;
  }
`
