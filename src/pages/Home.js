import React from "react";
import Pattern from "../Components/Pattern";
import Circle from "../Components/Circle";
import { styled } from "styled-components";
import JJMain from "../Components/assets/img/main/jjMain.png";
import Box from "../Components/Box";

const Home = () => {
  return (
    <Container>
      <Pattern />
      <Circle />

      <BoxContainer>
        <Box text={"React"} />
        <Box end={8} text={"JS"} />
        <Box end={5} text={"TS"} />
      </BoxContainer>

      <MainText>
        안녕하세요! <br />
        <TextHilight>신입 프론트엔드 개발자</TextHilight>로 <br /> 나아가는 중인
        임재준입니다.
      </MainText>
      <MainImg />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(108, 171, 221);
  background: radial-gradient(
    circle,
    rgba(108, 171, 221, 1) 0%,
    rgba(59, 115, 159, 0.9710259103641457) 100%
  );
`;

const MainText = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 46px;
  font-family: "NotoBold";
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  line-height: 1.5;
  transition: all 0.7s;
  z-index: 2;

  @media ${({ theme }) => theme.lg} {
    color: ${({ theme }) => theme.white};
    font-size: 36px;
    font-family: "NotoBold";
    position: absolute;
    top: 45%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.5;
    transition: all 0.7s;
    z-index: 2;
  }
  @media ${({ theme }) => theme.md} {
    color: ${({ theme }) => theme.white};
    font-size: 28px;
    font-family: "NotoBold";
    position: absolute;
    top: 48%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.5;
    transition: all 0.7s;
    z-index: 2;
  }
  @media ${({ theme }) => theme.sm} {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-family: "NotoBold";
    position: absolute;
    top: 55%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.5;
    transition: all 0.7s;
    z-index: 2;
  }
  @media ${({ theme }) => theme.xs} {
    color: ${({ theme }) => theme.white};
    font-size: 24px;
    font-family: "NotoBold";
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 290px;
    height: fit-content;
    line-height: 1.5;
    transition: all 0.7s;
    z-index: 2;
  }
`;

const TextHilight = styled.span`
  color: #286da3;
  font-size: 50px;
  font-family: "NotoBold";
  transition: all 0.7s;
  text-shadow: 0px 0px 3px #fff;
  z-index: 2;
  @media ${({ theme }) => theme.lg} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 38px;
    font-family: "NotoBold";
    transition: all 0.7s;
    text-shadow: 0px 0px 3px #fff;
    z-index: 2;
  }
  @media ${({ theme }) => theme.md} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 30px;
    font-family: "NotoBold";
    transition: all 0.7s;
    text-shadow: 0px 0px 3px #fff;
    z-index: 2;
  }
  @media ${({ theme }) => theme.sm} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 24px;
    font-family: "NotoBold";
    transition: all 0.7s;
    text-shadow: 0px 0px 3px #fff;
    z-index: 2;
  }
  @media ${({ theme }) => theme.sm} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 26px;
    font-family: "NotoBold";
    text-shadow: 0px 0px 3px #fff;
    transition: all 0.7s;
    z-index: 2;
  }
`;
const MainImg = styled.div`
  background-image: url(${JJMain});
  width: 500px;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: 0;
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    background-image: url(${JJMain});
    width: 500px;
    height: 800px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.7s;
  }
  @media ${({ theme }) => theme.md} {
    background-image: url(${JJMain});
    width: 500px;
    height: 800px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.7s;
  }
  @media ${({ theme }) => theme.sm} {
    background-image: url(${JJMain});
    width: 300px;
    height: 700px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.7s;
  }
  @media ${({ theme }) => theme.xs} {
    background-image: url(${JJMain});
    width: 300px;
    height: 700px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 85%;
    top: 55%;
    transform: translate(-50%, -50%);
    transition: all 0.7s;
  }
`;

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
    position: absolute;
    top: 65%;
    left: 35%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    height: 100px;
    padding: 10px;
  }
  @media ${({ theme }) => theme.md} {
    position: absolute;
    top: 65%;
    left: 37%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    height: 100px;

    padding: 10px;
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    top: 68%;
    left: 39%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    height: 100px;
    padding: 10px;
  }
  @media ${({ theme }) => theme.xs} {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    height: 100px;
    padding: 10px;
  }
`;
