import { useState } from "react";
import { Hero } from "../components/Hero";
import { OurEvents } from "../components/OurEvents";
import styled from "styled-components";
import { FeaturedProjects } from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Clubs from "../components/Clubs";
import { AuroraGradient } from "../components/AuroraGradient";

const Main = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <AuroraGradient />
      <Hero />
      <Clubs />
      <OurEvents />
      <FeaturedProjects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
