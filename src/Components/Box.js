import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { useLocation, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
const Box = ({ end = 10, text, time, linkto }) => {
  const [count, setCount] = useState(0)
  const location = useLocation()
  useEffect(() => {
    setCount(0)
  }, [location.hash])

  useEffect(() => {
    if (count < end) {
      const timerId = setTimeout(() => setCount(count + 1), time)
      return () => clearTimeout(timerId)
    }
  }, [count])
  return (
    <Container>
      <Count>{count}</Count>
      <Nav.Link href={linkto}>
        <Text>{text}</Text>
      </Nav.Link>
    </Container>
  )
}

export default Box

const Container = styled.div`
  width: 190px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  gap: 8px;
  border-radius: 15px;
  /* box-shadow: 0px 1px 0px 0px #fff; */
  opacity: 1;

  @media ${({ theme }) => theme.lg} {
    width: 180px;
  }
  @media ${({ theme }) => theme.md} {
    height: 100px;
    width: 130px;
  }
  @media ${({ theme }) => theme.sm} {
    height: 80px;
    width: 105px;
  }
  @media ${({ theme }) => theme.xs} {
    height: 70px;
    width: 95px;
  }
`
const Count = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 35px;
  color: ${({ theme }) => theme.white};
  margin-left: 20px;
  @media ${({ theme }) => theme.md} {
    font-size: 30px;
    margin-left: 20px;
    width: 18px;
    margin-right: 5px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 26px;
    margin-left: 20px;
    width: 18px;
    margin-right: 5px;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 24px;
    margin-left: 10px;
    /* margin-right: 10px; */
    width: 18px;
  }
`
const Text = styled.div`
  width: 100px;
  font-size: 26px;

  /* border: 1px solid #f00; */
  font-weight: bold;
  color: ${({ theme }) => theme.light};
  text-align: center;
  line-height: 1;
  transition: all 0.6s;
  &:hover {
    transform: scale(1.2);
  }
  @media ${({ theme }) => theme.md} {
    font-size: 18px;
    margin-left: 0px;
    width: 70px;
  }
  @media ${({ theme }) => theme.sm} {
    font-size: 14px;
    margin-left: -10px;
    width: 70px;
  }
  @media ${({ theme }) => theme.xs} {
    font-size: 14px;
    margin-left: 0px;
    width: 40px;
    white-space: nowrap;

    &:hover {
      transform: scale(1);
    }
  }
`
