import React from "react";
import styled from "styled-components";
import Pattern from "../Components/Pattern";
import Circle from "../Components/Circle";
import YSlider from "../Components/YSlider";

const OPTIONS = { axis: "y" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
      <Title>Typescript</Title>
      <YSlider slides={SLIDES} options={OPTIONS} />
    </Container>
  );
};

export default SectionOne;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.white};
  overflow-y: hidden;
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 46px;
  font-family: "InterBlack";
  height: 50px;
`;
