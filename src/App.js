import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import SectionOne from "./pages/SectionOne";
import Range from "./Components/Range";
import { SectionsContainer, Section } from "react-fullpage";
import styled from "styled-components";
import RangeTwo from "./Components/RangeTwo";

function App() {
  let options = {
    arrowNavigation: true, // use arrow keys
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <div>
      <NavBar />
      <Range />
      <RangeTwo />
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
