import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(370deg);
  }
  35% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spin2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-180deg);
  }
  35% {
    transform: rotate(-190deg);
  }
  40% {
    transform: rotate(-180deg);
  }
  78% {
    transform: rotate(-180deg);
  }
  95% {
    transform: rotate(-360deg);
  }
  98% {
    transform: rotate(-370deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const spin3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  27% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  80% {
    transform: rotate(370deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spin4 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  38% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-360deg);
  }
  65% {
    transform: rotate(-370deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Screen = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(177.46deg, #000000 -20.55%, #6829d8 297.28%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const Dash = styled.div`
  margin: 0 15px;
  width: 35px;
  height: 15px;
  border-radius: 8px;
  background: rgba(233, 169, 250, 1);;
  box-shadow: 0 0 5px #6b6bff, 0 0 10px #6b6bff, 0 0 20px #6b6bff,
    0 0 40px #6b6bff;

  &.first {
    margin-right: -18px;
    transform-origin: center left;
    animation: ${spin} 3s linear infinite;
  }

  &.seconde {
    transform-origin: center right;
    animation: ${spin2} 3s linear infinite;
    animation-delay: 0.2s;
  }

  &.third {
    transform-origin: center right;
    animation: ${spin3} 3s linear infinite;
    animation-delay: 0.3s;
  }

  &.fourth {
    transform-origin: center right;
    animation: ${spin4} 3s linear infinite;
    animation-delay: 0.4s;
  }
`;

export const LoadingScreen = () => {
  return (
    <Screen>
      <Container>
        <Dash className="first" />
        <Dash className="seconde" />
        <Dash className="third" />
        <Dash className="fourth" />
      </Container>
    </Screen>
  );
};
