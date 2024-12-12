import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { OurEvents } from "../components/OurEvents";
import styled from "styled-components";
import { FeaturedProjects } from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Clubs from "../components/Clubs";
import { AuroraGradient } from "../components/AuroraGradient";
import Team from "../components/Team";
import { LoadingScreen } from "../components/LoadingScreen";

const Main = styled.div`
  min-height: 100vh;
`;

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingPage>
          <LoadingScreen />
        </LoadingPage>
      )}

      <AuroraGradient />
      <Hero />
      <Clubs />
      <Team />
      <OurEvents />
      <FeaturedProjects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
