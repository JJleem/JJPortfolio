import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'
const Box = ({ end = 10, text }) => {
  const [count, setCount] = useState(0)

  const location = useLocation()

  useEffect(() => {
    setCount(0)
  }, [location.hash])

  useEffect(() => {
    if (count < end) {
      const timerId = setTimeout(() => setCount(count + 1), 700)
      return () => clearTimeout(timerId)
    }
  }, [count])
  return (
    <Container>
      <Count>{count}</Count>
      <Text>{text}</Text>
    </Container>
  )
}

export default Box

const Container = styled.div`
  width: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  gap: 8px;
  border-radius: 15px;
  box-shadow: 0px 1px 0px 0px #fff;
  opacity: 0.8;

  @media ${({ theme }) => theme.lg} {
    width: 130px;
  }
  @media ${({ theme }) => theme.md} {
    width: 120px;
  }
  @media ${({ theme }) => theme.sm} {
    width: 105px;
    gap: 2px;
    padding: 6px;
  }
  @media ${({ theme }) => theme.xs} {
    width: 95px;
    gap: 2px;
    padding: 6px;
  }
`
const Count = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 35px;
  color: ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.sm} {
    font-size: 26px;
    margin-left: 10px;
  }
`
const Text = styled.div`
  width: 60px;
  font-weight: bold;
  color: ${({ theme }) => theme.light};
  text-align: center;
  line-height: 2;

  @media ${({ theme }) => theme.sm} {
    font-size: 14px;
  }
`
