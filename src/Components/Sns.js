import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
const Sns = () => {
  return (
    <Container>
      <Nav.Link href="https://github.com/JJleem" target="_blank">
        <Git>Github.</Git>
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/dlawowns04/" target="_blank">
        <Insta>Instagram.</Insta>
      </Nav.Link>
    </Container>
  );
};

export default Sns;
const Container = styled.div`
  position: fixed;
  top: 50%;
  right: -50px;
  z-index: 1;
  display: flex;
  height: 20px;
  transform: rotate(-90deg);
  gap: 0px;
  transition: all 1s;
  opacity: 0.5;
  @media ${({ theme }) => theme.md} {
    display: none;
  }
`;
const Git = styled.span`
  margin-right: 50px;
  &:hover {
    color: ${({ theme }) => theme.indigo};
    opacity: 1;
  }
`;
const Insta = styled.span`
  &:hover {
    color: #dd2a7b;
    opacity: 1;
  }
`;
