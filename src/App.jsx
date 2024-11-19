import { useState } from "react";
import { Hero } from "../components/Hero";
import styled from "styled-components";

const Main = styled.div`
  
  min-height: 100vh;
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Hero />
        
    </>
  );
}

export default App;
