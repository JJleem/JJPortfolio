import React from "react";
import styled from "styled-components";
const SectionOne = () => {
  return (
    <Container name="SectionOne">
      <h2>About Section</h2>
      <p>Content of the about section</p>
      hihi
    </Container>
  );
};

export default SectionOne;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(108, 171, 221);
  background: radial-gradient(
    circle,
    rgba(108, 171, 221, 1) 0%,
    rgba(59, 115, 159, 0.9710259103641457) 100%
  );
  overflow-y: hidden;
`;
