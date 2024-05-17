import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  return (
    <LeftArrow onClick={() => onClick()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </LeftArrow>
  )
}
export default CustomLeftArrow
const LeftArrow = styled.button`
  position: absolute;
  font-size: 20px;
  top: 10px;
  right: 80px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
  @media ${({ theme }) => theme.sm} {
    position: absolute;
    font-size: 20px;
    top: 10;
    right: 60px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.7s;
    &:hover {
      color: ${({ theme }) => theme.blue};
    }
  }
  @media ${({ theme }) => theme.xs} {
    position: absolute;
    font-size: 18px;
    top: 12px;
    right: 60px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.7s;
    &:hover {
      color: ${({ theme }) => theme.blue};
    }
  }
`
