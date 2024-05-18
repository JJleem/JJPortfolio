import React from 'react'
import styled from 'styled-components'
// import mockup from '../assets/img/slideOne/cham_stand04.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'
const SlideSection = (props) => {
  console.log(props)
  return (
    <Container>
      <ImgContainer>
        <Img src={`${props.imgSrc}`} />
        <FontAwesomeIconStyle icon={faHandPointUp} />
      </ImgContainer>
      <TextContainer>
        <HeaderContainer>
          <Title>{props.title} </Title>
          <HeaderLogoContainer>
            <HeaderLogo src={`${props.logoOne}`} />
            <HeaderLogo src={`${props.logoTwo}`} />
            <HeaderLogo src={`${props.logoOne}`} />
          </HeaderLogoContainer>
        </HeaderContainer>
        <TextSection>
          <Desc>{props.desc}</Desc>
        </TextSection>
      </TextContainer>
    </Container>
  )
}

export default SlideSection

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  @media ${({ theme }) => theme.lg} {
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`
const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    width: 100%;
    height: 70%;
  }
  @media ${({ theme }) => theme.md} {
    height: 60%;
  }
`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 2%;
  font-size: 30px;
  color: ${({ theme }) => theme.cityBold};
  transition: all 0.7s;
  &:hover {
    transform: scale(1.4);
  }
  @media ${({ theme }) => theme.lg} {
    font-size: 20px;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: all 1s;
  &:hover {
    object-position: bottom;
  }
  &:active {
    object-position: initial;
  }
`
const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  @media ${({ theme }) => theme.lg} {
    width: 98%;
  }
`
const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid ${({ theme }) => theme.cityBold};
  display: flex;
  gap: 15px;
  padding: 10px 10px 15px 10px;
  justify-content: space-between;
  @media ${({ theme }) => theme.lg} {
    align-items: center;
  }

  @media ${({ theme }) => theme.sm} {
    gap: 10px;
  }
`
const HeaderLogoContainer = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  justify-content: end;
  gap: 8px;
`
const HeaderLogo = styled.img`
  width: fit-content;
  height: auto;
  object-fit: center;
  transition: all 0.6s;

  @media ${({ theme }) => theme.lg} {
    height: 25px;
  }
  @media ${({ theme }) => theme.sm} {
    height: 20px;
  }
`
const Title = styled.h1`
  font-size: 32px;
  line-height: 1.5;
  font-family: 'NotoBold';
  transition: all 0.7s;
  @media ${({ theme }) => theme.lg} {
    font-size: 24px;
  }
`
const TextSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0px 5px 5px;
`

const Desc = styled.span`
  font-family: 'Noto';
  line-height: 1.3;
`
