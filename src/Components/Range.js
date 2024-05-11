import React from "react";

import styled from "styled-components";
const Range = () => {
  return (
    <Container>
      <RangeStyle>
        <Inner />
      </RangeStyle>
    </Container>
  );
};

export default Range;
const Container = styled.div`
  position: fixed;
`;
const RangeStyle = styled.div`
  width: 5px;
  height: 150px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
`;

const Inner = styled.div`
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
`;
