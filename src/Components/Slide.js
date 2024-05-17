import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'
import CustomRightArrow from './CustomRightArrow'
import CustomLeftArrow from './CustomLeftArrow'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}

const Slide = () => {
  return (
    <CarouselContainer
      swipeable={true}
      draggable={true}
      // showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      customTransition="all 1s"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      <A>Item 1</A>
      <B>Item 2</B>
      <div>Item 3</div>
      <div>Item 4</div>
    </CarouselContainer>
  )
}

export default Slide

const CarouselContainer = styled(Carousel)`
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 95%;
`
const A = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid #f00;
  background: #000;
`
const B = styled.div`
  width: 100%;
  height: 80vh;
  border: 1px solid #f00;
  background: #0f0;
`
