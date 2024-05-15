import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import SectionOne from "./pages/SectionOne";
import Range from "./Components/Range";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";
import styled from "styled-components";

import BottomBanner from "./Components/BottomBanner";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 116) {
        event.preventDefault();
        window.location = "/";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  let options = {
    arrowNavigation: true,
    delay: 1000,
    navigation: false,
    scrollBar: false,

    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <div>
      <NavBar />
      <Range />
      <BottomBanner />
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <SectionOne />
        </Section>
        <Section>
          <Home />
        </Section>
        <Section>
          <SectionOne />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
