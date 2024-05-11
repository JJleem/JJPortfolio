"use client";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SectionOne from "./pages/SectionOne";
import Range from "./Components/Range";
import { SectionsContainer, Section } from "react-fullpage";
function App() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };
  return (
    <div className="App">
      <NavBar />
      <Range />
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <Home />
        </Section>
        <Section>
          <Home />
        </Section>
        <Section>
          <Home />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
