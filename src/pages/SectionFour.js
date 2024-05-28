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
import recoil from '../Components/assets/img/one/recoil.png'
import hook from '../Components/assets/img/one/hookform.png'
import query from '../Components/assets/img/one/query.png'
import dnd from '../Components/assets/img/one/dnd.png'
import router from '../Components/assets/img/one/Router.png'

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
                <InnerWrapper>
                  <InfoText>Programming Languages:</InfoText>
                  <LogoContainer>
                    <Logo src={typescript} />
                    <Logo src={js} />
                  </LogoContainer>
                  <InfoText>Frameworks/Libraries:</InfoText>
                  <LogoContainer>
                    <Logo src={react} />
                    <Logo src={redux} />
                    <Logo src={router} />
                    <Logo src={query} />
                    <Logo src={recoil} />
                    <Logo src={hook} />
                    <Logo src={styledcomponents} />
                  </LogoContainer>
                  <InfoText>Backend/Databases:</InfoText>
                  <LogoContainer>
                    <Logo src={firebase} />
                    <Logo src={node} />
                  </LogoContainer>

                  <InfoText>Markup/Styling:</InfoText>
                  <LogoContainer>
                    <Logo src={html} />
                    <Logo src={css} />
                    <Logo src={scss} />
                  </LogoContainer>
                  <InfoText>Tools/Service:</InfoText>
                  <LogoContainer>
                    <Logo src={github} />
                    <Logo src={slack} />
                  </LogoContainer>
                </InnerWrapper>
              </SkillStack>
            </TextBox>
          </SectionBox>
        </Container>
      </div>
    </CSSTransition>
  )
}

export default SectionFour

const InnerWrapper = styled.div`
  margin-top: 10px;
  @media ${({ theme }) => theme.md} {
    margin-top: 10px;
  }
  @media ${({ theme }) => theme.xs} {
    margin-top: 5px;
  }
`
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
  height: 100vh;
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
  height: 100vh;
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
  gap: 50px;
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
  font-size: 24px;
  font-family: 'NotoBold';
  text-align: right;
  transition: all 0.6s;
  height: 25px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.lg} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.md} {
    font-size: 16px;
    height: 31px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: -12px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 40px;
  padding-bottom: 0px;

  @media ${({ theme }) => theme.lg} {
    gap: 10px;
    margin-bottom: 30px;
  }
  @media ${({ theme }) => theme.md} {
    margin-bottom: 30px;
  }
  @media ${({ theme }) => theme.sm} {
    margin-bottom: 30px;
  }
  @media ${({ theme }) => theme.xs} {
    margin-bottom: 0px;
  }
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
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
    width: 45px;
    height: 45px;
  }
  @media ${({ theme }) => theme.xs} {
    width: 30px;
    height: 30px;
  }
`

const InfoText = styled.div`
  font-size: 20px;
  font-family: 'NotoMedium';
  line-height: 1;
  padding-bottom: 10px;
  white-space: nowrap;
  width: 300px;
  @media ${({ theme }) => theme.lg} {
    margin-top: 30px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 14px;
    padding-bottom: 5px;
    margin-top: 8px;
  }
`
