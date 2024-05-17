import React from 'react'
import styled from 'styled-components'
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  // onMove means if dragging or swiping in progress.
  return <LeftArrow onClick={() => onClick()}>d</LeftArrow>
}
export default CustomLeftArrow
const LeftArrow = styled.button`
  border: 1px solid #f00;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  z-index: 9999;
`
