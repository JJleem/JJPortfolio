import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
const Box = ({ start = 0, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    // end 값에 도달할 때까지 숫자를 증가시키기
    if (count < end) {
      const timerId = setTimeout(() => {
        setCount(count + 1);
      }, 10); // 여기서 10ms는 숫자가 증가하는 속도를 조절합니다.
      return () => clearTimeout(timerId);
    }
  }, [count, end]);

  return (
    <div style={{ textAlign: "center", fontSize: "24px", padding: "20px" }}>
      {count}
    </div>
  );
};

export default Box;
