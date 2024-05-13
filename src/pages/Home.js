import React from "react";
import Pattern from "../Components/Pattern";
import Circle from "../Components/Circle";
import { styled } from "styled-components";
import JJMain from "../Components/assets/img/main/jjMain.png";

const Home = () => {
  return (
    <Container>
      <Pattern />
      <Circle />
      <MainText>
        안녕하세요! <br />
        <TextHilight>신입 프론트엔드 개발자</TextHilight>로 <br /> 나아가는 중인
        임재준입니다.
      </MainText>
      {/* <MainImg /> */}
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
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  line-height: 1.3;
  transition: all 0.7s;
  z-index: 2;
  overflow: hidden;
  @media ${({ theme }) => theme.lg} {
    color: ${({ theme }) => theme.white};
    font-size: 36px;
    font-family: "NotoBold";
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.3;
    transition: all 0.7s;
    z-index: 2;
    overflow: hidden;
  }
  @media ${({ theme }) => theme.md} {
    color: ${({ theme }) => theme.white};
    font-size: 28px;
    font-family: "NotoBold";
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.3;
    transition: all 0.7s;
    z-index: 2;
    overflow: hidden;
  }
  @media ${({ theme }) => theme.sm} {
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-family: "NotoBold";
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    line-height: 1.3;
    transition: all 0.7s;
    z-index: 2;
    overflow: hidden;
  }
`;

const TextHilight = styled.span`
  color: #286da3;
  font-size: 50px;
  font-family: "NotoBold";
  transition: all 0.7s;
  z-index: 2;
  @media ${({ theme }) => theme.lg} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 38px;
    font-family: "NotoBold";
    transition: all 0.7s;
    z-index: 2;
  }
  @media ${({ theme }) => theme.md} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 30px;
    font-family: "NotoBold";
    transition: all 0.7s;
    z-index: 2;
  }
  @media ${({ theme }) => theme.sm} {
    color: ${({ theme }) => theme.cityBold};
    font-size: 22px;
    font-family: "NotoBold";
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
    width: 400px;
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
`;
