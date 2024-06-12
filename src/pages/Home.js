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
        <Box end={4} text={'TS'} time={300} linkto={'#sectionTwo'} />
        <Box end={4} text={'React'} time={400} linkto={'#sectionThree'} />
        <Box end={4} text={'JS'} time={500} linkto={'#sectionFour'} />
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
  /* background: #1c39bb; */
  background: #007fff;

  /* background: radial-gradient(
    circle,
    rgba(70, 171, 230, 1) 0%,
    rgba(49, 115, 200, 0.9710259103641457) 100%
  ); */
  /* background: radial-gradient(
    circle,
    rgba(30, 80, 240, 1) 0%,
    rgba(49, 115, 255, 1) 100%
  ); */
`

const MainText = styled.div`
  color: ${({ theme }) => theme.white};

  font-size: 51px;
  font-family: 'NotoBold';
  position: absolute;
  top: 26%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  line-height: 1.5;
  transition: all 0.7s;
  z-index: 2;
  white-space: nowrap;
  /* text-shadow: 0px 0px 4px #000; */
  @media ${({ theme }) => theme.lg} {
    font-size: 44px;
    top: 30%;
    left: 35%;
  }
  @media ${({ theme }) => theme.slg} {
    font-size: 40px;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 34px;
    top: 35%;
    left: 40%;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 28px;
    top: 40%;
    left: 43%;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 23px;
    left: 45%;
    top: 50%;
    width: 290px;
    height: fit-content;
  }
`

const TextHilight = styled.span`
  /* color: ${({ theme }) => theme.cityBold}; */
  color: #fff;
  font-size: 56px;
  font-family: 'NotoBold';
  transition: all 0.7s;
  /* text-shadow: 0px 0px 3px #000; */
  z-index: 2;
  margin-right: 10px;

  @media ${({ theme }) => theme.lg} {
    font-size: 48px;
  }
  @media ${({ theme }) => theme.slg} {
    font-size: 44px;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 38px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 26px;
  }
`
const MainImg = styled.div`
  background-image: url(${JJMain});
  width: 1450px;
  height: 1070px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: 0;
  left: 64%;
  top: 58%;
  transform: translate(-50%, -50%);
  transition: all 0.7s;
  opacity: 1;
  object-fit: cover;

  @media ${({ theme }) => theme.xxl} {
    left: 70%;
    top: 58%;
  }
  @media ${({ theme }) => theme.slg} {
    left: 78%;
    top: 58%;
  }
  @media ${({ theme }) => theme.md} {
    left: 89%;
    top: 58%;
  }
  @media ${({ theme }) => theme.sm} {
    width: 950px;
    height: 920px;
    left: 89%;
    top: 55%;
  }
  @media ${({ theme }) => theme.xs} {
    width: 700px;
    height: 710px;
    left: 70%;
    top: 57%;
  }
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 37.5%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  height: 120px;
  padding: 10px;
  transition: all 0.7s;
  z-index: 1;
  margin-left: 10px;
  @media ${({ theme }) => theme.lg} {
    top: 50%;
    left: 36.5%;
  }
  @media ${({ theme }) => theme.slg} {
    top: 50%;
    left: 40%;
  }
  @media ${({ theme }) => theme.md} {
    top: 52%;
    left: 39.5%;
  }
  @media ${({ theme }) => theme.sm} {
    top: 55%;
    left: 43%;
  }
  @media ${({ theme }) => theme.xs} {
    top: 68%;
    left: 47%;
    padding: 0;
  }
`
