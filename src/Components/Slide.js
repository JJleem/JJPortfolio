import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'
import CustomRightArrow from './CustomRightArrow'
import CustomLeftArrow from './CustomLeftArrow'
import SlideSection from './slideSection/SlideSection'
import { useLocation } from 'react-router-dom'
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

const Slide = (props) => {
  const location = useLocation()

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
      <SlideSectionContainer>
        <SlideSection
          imgSrc={props.imgSrc}
          title={props.title}
          logoOne={props.logoOne}
          logoTwo={props.logoTwo}
          logoThree={props.logoThree}
          desc={props.desc}
          descTwo={props.desc12}
          descThree={props.desc13}
          hash={props.hash}
          Link={props.Link}
        />
      </SlideSectionContainer>
      <SlideSectionContainer>
        <SlideSection
          imgSrc={props.imgSrc2}
          title={props.title2}
          logoOne={props.logoOne2}
          logoTwo={props.logoTwo2}
          logoThree={props.logoThree2}
          desc={props.desc2}
          descTwo={props.desc22}
          descThree={props.desc23}
          hash={props.hash}
          Link={props.Link2}
        />
      </SlideSectionContainer>
      <SlideSectionContainer>
        <SlideSection
          imgSrc={props.imgSrc3}
          title={props.title3}
          logoOne={props.logoOne3}
          logoTwo={props.logoTwo3}
          logoThree={props.logoThree3}
          desc={props.desc3}
          descTwo={props.desc32}
          descThree={props.desc33}
          hash={props.hash}
          Link={props.Link3}
        />
      </SlideSectionContainer>
      <SlideSectionContainer>
        <SlideSection
          imgSrc={props.imgSrc4}
          title={props.title4}
          logoOne={props.logoOne4}
          logoTwo={props.logoTwo4}
          logoThree={props.logoThree4}
          desc={props.desc4}
          descTwo={props.desc42}
          descThree={props.desc43}
          hash={props.hash}
          Link={props.Link4}
        />
      </SlideSectionContainer>
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
const SlideSectionContainer = styled.div`
  width: 100%;
  height: 75vh;
  margin: 0px 0px 0px 1px;
`
