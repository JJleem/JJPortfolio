import React from 'react'
import styled from 'styled-components'
const CustomRightArrow = ({ onClick }) => {
  return <RightArrow onClick={() => onClick()}>dd</RightArrow>
}
export default CustomRightArrow
const RightArrow = styled.button`
  border: 1px solid #f00;
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  z-index: 9999;
`
