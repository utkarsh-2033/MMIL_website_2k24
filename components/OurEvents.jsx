import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import styled from "styled-components";

const OurEventsContainer = styled.section`
  position: relative;
  text-align: center;
  overflow: hidden;
  color: white;
  padding: 40px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 8vh;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
  margin-bottom: 40px;
  margin-top: 200px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  row-gap: 4vh;
  justify-content: center;
`;

const EventCard = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 55vh;
  ${({ variant }) =>
    variant === "deencode" &&
    `
      grid-column: 1;
      grid-row: 1;
      margin: 0 auto;
      transform: translateX(24vh);
    `}
  ${({ variant }) =>
    variant === "hackocode" &&
    `
      grid-column: 1;
      grid-row: 2;
      transform: translateX(24vh);
      margin: -4vh auto;
    `}
  ${({ variant }) =>
    variant === "logocon" &&
    `
      grid-column: 2;
      grid-row: 1;
      transform: translateX(-20vh);
      margin: 0 auto;

    `}
  ${({ variant }) =>
    variant === "valorant" &&
    `
      grid-column: 2;
      grid-row: 2;
      margin-top: -140px;
      transform: translateX(-20vh);
      margin: -39vh auto;
    `}
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const CirclesLeft = styled.div`
  position: absolute;
  width: 60%;
  left: -27%;
  top: 0;
`;

const CirclesRight = styled.div`
  position: absolute;
  width: 60%;
  right: -27%;
  top: 50%;
`;

export const OurEvents = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".events-container",
        scroller: "body",
        start: "top 50%",
        end: "top -60%",
        // markers: true,
        scrub: 3,
      },
    });

    tl.from(".circlesLeft", {
      opacity: 0,
      x: -20,
      scale: 0.5,
      rotation: -60,
      ease: "power2.Out",
    }),

    tl.from(".deencode", {
      opacity: 0,
      y: -200,
      ease: "power2.inOut",
    }, "anim"),
    tl.from(".logocon", {
      opacity: 0,
      x: 200,
      ease: "power2.inOut",
      }, "anim"),
    tl.from(".hackocode", {
      opacity: 0,
      x: -200,
      ease: "power2.inOut",
    }, "anim"),
    tl.from(".valorant", {
      opacity: 0,
      y: 200,
      ease: "power2.inOut",
    }, "anim"),

    tl.from(".circlesRight",{
      opacity: 0,
      x: 20,
      scale: 0.5,
      rotation: 60,
      ease: "power2.Out",
    })

  });
  return (
    <OurEventsContainer className="events-container">
      <Title>Our Events</Title>
      <EventGrid>
        <EventCard variant="deencode" className="deencode">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="public/Frame 427318180.png" />
          </a>
        </EventCard>
        <EventCard variant="logocon" className="logocon">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="public/logocon post 1.png" />
          </a>
        </EventCard>
        <EventCard variant="hackocode" className="hackocode">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="public/final pls 1.png" />
          </a>
        </EventCard>
        <EventCard variant="valorant" className="valorant">
          <a href="https://www.youtube.com" className="event-link">
            <EventImage src="public/Valorent flex 1.png" />
          </a>
        </EventCard>
        <CirclesLeft className="circlesLeft">
          <img src="public/Frame 427318247.png" className="circle-left-image" />
        </CirclesLeft>
        <CirclesRight className="circlesRight">
          <img
            src="public/Frame 427318248.png"
            className="circle-right-image"
          />
        </CirclesRight>
      </EventGrid>
    </OurEventsContainer>
  );
};
