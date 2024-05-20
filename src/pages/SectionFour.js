import React from 'react'
import { styled, keyframes } from 'styled-components'
import sky from '../Components/assets/img/slideFour/sky.jpg'
import jj from '../Components/assets/img/slideFour/JJ.png'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import js from '../Components/assets/img/one/JavaScript.png'
import react from '../Components/assets/img/one/React.png'
import redux from '../Components/assets/img/one/Redux.png'
import scss from '../Components/assets/img/one/Scss.png'
import styledcomponents from '../Components/assets/img/one/Styledcomponents.png'
import typescript from '../Components/assets/img/one/Typescript.png'
import github from '../Components/assets/img/one/Github.png'
import firebase from '../Components/assets/img/one/Firebase.png'
import slack from '../Components/assets/img/one/Slack.png'
import html from '../Components/assets/img/one/Html.png'
import css from '../Components/assets/img/one/Css.png'
import node from '../Components/assets/img/one/Node.png'
const SectionFour = () => {
  const location = useLocation()
  return (
    <CSSTransition
      in={location.hash === '#sectionFive' || location.hash === '#sectionFive'}
      timeout={500}
      classNames="page-transition"
      unmountOnExit
    >
      <div key={location.hash || `#sectionFive`}>
        <Container>
          <Wrapper>
            <ImgContainer src={sky}></ImgContainer>
          </Wrapper>
          <SectionBox>
            <JJContainer>
              <JJ src={jj} />
            </JJContainer>

            <TextBox>
              <SkillStack>
                <TitleText>Skill Stack</TitleText>
                <InfoText>Programming Languages:</InfoText>
                <LogoContainer>
                  <Logo src={typescript} />
                  <Logo src={js} />
                  <Logo src={html} />
                  <Logo src={css} />
                  <Logo src={scss} />
                </LogoContainer>
                <InfoText>Frameworks/Libraries:</InfoText>
                <LogoContainer>
                  <Logo src={react} />
                  <Logo src={redux} />
                  <Logo src={node} />
                </LogoContainer>
                <InfoText>Tools:</InfoText>
                <LogoContainer>
                  <Logo src={styledcomponents} />
                  <Logo src={github} />
                  <Logo src={slack} />
                </LogoContainer>
                <InfoText>Databases:</InfoText>
                <LogoContainer>
                  <Logo src={firebase} />
                </LogoContainer>
              </SkillStack>
            </TextBox>
          </SectionBox>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default SectionFour

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
const ImgZ = keyframes`
0% {
  transform: translateZ(600px);
}
100% {
  transform: translateZ(0px);
}
`
const ImgContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation-fill-mode: forwards;
  animation: ${ImgZ} 2.2s linear;
  object-fit: cover;
  z-index: 1;
`
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  z-index: 2;
`
const sectionAni = keyframes`
0% {
 opacity:0;
}
100% {
  opacity:1;
}
`
const SectionBox = styled.div`
  position: absolute;
  width: 70%;
  height: 85%;
  z-index: 3;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  animation: ${sectionAni} 1.3s linear;
  @media ${({ theme }) => theme.lg} {
    flex-direction: column;
    align-items: end;
    width: 80%;
    gap: 10px;
  }

  @media ${({ theme }) => theme.sm} {
    width: 90%;
    padding: 8px;
  }
`
const JJContainer = styled.div`
  width: 40%;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    position: absolute;
    top: 3%;
    left: 3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  @media ${({ theme }) => theme.md} {
    flex-direction: column;
    justify-content: center;
    position: static;
  }
`
const JJ = styled.img`
  object-fit: cover;
  width: 85%;
  min-width: 200px;
  min-height: 200px;
  height: 90%;
  border-radius: 100%;
  @media ${({ theme }) => theme.lg} {
    width: 30%;
    height: 90%;
  }
  @media ${({ theme }) => theme.md} {
    width: 35%;
    height: 100%;
  }
`
const TextBox = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  @media ${({ theme }) => theme.lg} {
    width: 65%;
    height: 100%;
    display: flex;
  }
  @media ${({ theme }) => theme.md} {
    width: 100%;
    height: 100%;
  }
`
const SkillStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  @media ${({ theme }) => theme.md} {
    gap: 10px;
  }
  @media ${({ theme }) => theme.xs} {
    gap: 6px;
  }
  @media ${({ theme }) => theme.mini} {
    gap: 0px;
  }
`
const TitleText = styled.div`
  font-size: 32px;
  font-family: 'NotoBold';
  text-align: right;
  transition: all 0.6s;

  @media ${({ theme }) => theme.lg} {
    font-size: 26px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: -12px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;

  @media ${({ theme }) => theme.lg} {
    gap: 10px;
  }
  @media ${({ theme }) => theme.sm} {
    gap: 20px;
  }
`
const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: center;
  padding: 5px;
  &:hover {
    transform: scale(1.1);
  }
  @media ${({ theme }) => theme.lg} {
    width: 60px;
    height: 60px;
  }
  @media ${({ theme }) => theme.sm} {
    padding: 2px;
  }
  @media ${({ theme }) => theme.xs} {
    width: 35px;
    height: 35px;
  }
`

const InfoText = styled.div`
  font-size: 20px;
  font-family: 'NotoMedium';
  line-height: 2;
  @media ${({ theme }) => theme.xs} {
    font-size: 16px;
  }
`
