import NavBar from './Components/NavBar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import SectionOne from './pages/SectionOne'
import SectionTwo from './pages/SectionTwo'
import SectionThree from './pages/SectionThree'
import SectionFour from './pages/SectionFour'
import Range from './Components/Range'
import { SectionsContainer, Section } from 'react-fullpage'
import styled from 'styled-components'
import Sns from './Components/Sns'
import BottomBanner from './Components/BottomBanner'
import { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function App() {
  const location = useLocation()

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isPointer, setIsPointer] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#000')
  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX)
      setY(event.clientY)
      setIsPointer(
        event.pointerType === 'mouse' &&
          getComputedStyle(event.target).cursor === 'pointer'
      )
      switch (location.hash) {
        case '#sectionOne':
          setBackgroundColor('#286da3')
          break
        case '#sectionTwo':
          setBackgroundColor('rgba(45, 121, 199, 1)')
          break
        case '#sectionThree':
          setBackgroundColor('rgba(182, 234, 248, 1)')
          break
        case '#sectionFour':
          setBackgroundColor('rgb(247, 224, 24, 1)')
          break
        case '#sectionFive':
          setBackgroundColor('black')
          break
        default:
          setBackgroundColor('#286da3')
          break
      }
    }

    document.addEventListener('pointermove', handleMouseMove)

    return () => {
      document.removeEventListener('pointermove', handleMouseMove)
    }
  }, [location])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 116) {
        event.preventDefault()
        window.location = '/'
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  let options = {
    arrowNavigation: true,
    delay: 800,
    navigation: false,
    scrollBar: false,

    anchors: [
      'sectionOne',
      'sectionTwo',
      'sectionThree',
      'sectionFour',
      `sectionFive`
    ]
  }

  return (
    <div>
      <Cursor
        style={{
          left: `${x + 10}px`,
          top: `${y + 10}px`,
          transform: `scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: backgroundColor
        }}
      ></Cursor>
      <NavBar />
      <Range />
      <BottomBanner />
      <Sns />
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <SectionOne />
        </Section>
        <Section>
          <SectionTwo />
        </Section>
        <Section>
          <SectionThree />
        </Section>
        <Section>
          <SectionFour />
        </Section>
      </SectionsContainer>
    </div>
  )
}

export default App

const Cursor = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: gray;
  border-radius: 50%;
  transition: all 0.2s linear;
  transition: transform 0.5s ease;
  opacity: 0.6;
  z-index: 999999;
  @media ${({ theme }) => theme.sm} {
    width: 15px;
    height: 15px;
  }
  @media ${({ theme }) => theme.xs} {
    display: none;
  }
`
