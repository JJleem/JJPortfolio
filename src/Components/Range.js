import React from "react";

import styled from "styled-components";
const Range = () => {
  return (
    <RangeStyle>
      <Inner />
    </RangeStyle>
  );
};

export default Range;

const RangeStyle = styled.div`
  width: 5px;
  height: 150px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translate(-50%, 0px);
`;

const Inner = styled.div`
  width: 5px;
  height: 30px;
  background: ${({ theme }) => theme.white};
  border-radius: 3px;
`;
