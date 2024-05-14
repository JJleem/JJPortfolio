import React from "react";
import styled from "styled-components";
import Range from "../Components/Range";
import PatternTwo from "../Components/PatternTwo";
import CircleTwo from "../Components/CircleTwo";
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <PatternTwo />
      <CircleTwo />
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
