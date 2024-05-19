import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'

const getDynamicStyle = (hash) => {
  if (hash === 'hash1') {
    return css`
      border-bottom: 1px solid ${({ theme }) => theme.cityBold};
    `
  } else if (hash === 'hash2') {
    return css`
      border-bottom: 1px solid rgba(182, 234, 248);
    `
  } else if (hash === `hash3`) {
    return css`
      border-bottom: 1px solid rgb(247, 224, 24, 0.8);
    `
  }
}
const getButtonStyle = (hash) => {
  if (hash === 'hash1') {
    return css`
      background-color: rgba(45, 121, 199);
    `
  } else if (hash === 'hash2') {
    return css`
      background-color: rgba(102, 234, 248);
    `
  } else if (hash === `hash3`) {
    return css`
      background-color: rgb(247, 224, 24);
    `
  }
}

const SlideSection = (props) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={`${props.imgSrc}`} />
        <FontAwesomeIconStyle icon={faHandPointUp} />
        <LinkStyle to={props.Link} target="_blank" hash={props.hash}>
          보러가기
        </LinkStyle>
      </ImgContainer>
      <TextContainer>
        <HeaderContainer hash={props.hash}>
          <Title>{props.title} </Title>
          <HeaderLogoContainer>
            <HeaderLogo src={`${props.logoOne}`} />
            <HeaderLogo src={`${props.logoTwo}`} />
            <HeaderLogo src={`${props.logoThree}`} />
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
  position: relative;
  @media ${({ theme }) => theme.lg} {
    width: 100%;
    height: 70%;
  }
  @media ${({ theme }) => theme.md} {
    height: 60%;
  }
`
const LinkStyle = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 80px;
  height: 20px;
  ${(props) => getButtonStyle(props.hash)}
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 0px 5px 0px 5px;
  font-size: 12px;
  line-height: 1.5;
  font-weight: bold;
  font-family: 'NotoBold';
`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 2%;
  font-size: 30px;
  color: ${({ theme }) => theme.white};
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
  ${(props) => getDynamicStyle(props.hash)}
  display: flex;
  gap: 15px;
  padding: 10px 10px 15px 10px;
  justify-content: space-between;
  @media ${({ theme }) => theme.lg} {
    align-items: center;
  }

  @media ${({ theme }) => theme.sm} {
    gap: 10px;

    padding: 15px 10px 25px 10px;
  }
`
const HeaderLogoContainer = styled.div`
  width: fit-content;
  height: auto;

  display: flex;
  justify-content: end;
  gap: 15px;
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
  line-height: 1;
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
