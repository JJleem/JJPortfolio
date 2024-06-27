import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const CustomRightArrow = ({ onClick }) => {
  return (
    <RightArrow onClick={() => onClick()}>
      <FontAwesomeIcon icon={faArrowRight} />
    </RightArrow>
  )
}
export default CustomRightArrow
const RightArrow = styled.button`
  font-size: 20px;
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }

  @media ${({ theme }) => theme.sm} {
    font-size: 20px;
    position: absolute;
    top: 40px;
    right: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.6s;
    width: 21px;
    &:hover {
      color: ${({ theme }) => theme.blue};
    }
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 18px;
    top: 30px;
    right: 0;
  }
`
