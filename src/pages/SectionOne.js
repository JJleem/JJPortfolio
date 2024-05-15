import React from "react";
import styled from "styled-components";
import Range from "../Components/Range";
import Pattern from "../Components/Pattern";
import Circle from "../Components/Circle";
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <Pattern />
      <Circle />
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
