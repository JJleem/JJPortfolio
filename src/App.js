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
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

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
