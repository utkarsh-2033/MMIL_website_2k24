import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    margin-top: 100px;
    position: relative;
`

const Title= styled.div`
    color: white;
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
    text-align: center;
    font-size: 8vh;
    font-weight: bold;

`

const ShapeL=styled.img`
    position: absolute;
    top: -200px;
`

const ShapeR=styled.img`
    position: absolute;
    right: 0;
    top: 600px;
`

const Cube=styled.img`
    position: absolute;
    right: 0;
    top: -170px;
`

const SubTitle= styled.h1`
    color: white;
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2;
    text-align: center;
    font-size: 8vh;
    font-weight: bold;
    margin-top: 100px;

    &.programming {
        margin-top: -300px;
    }
`

const TeamBox=styled.div`
    width: 90vw;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Mem=styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 20px 70px;
    object-fit: cover;
    background-color: white;
    z-index:2;
`

const ProgTopLine=styled.img`
    align-self: flex-start;
    position: relative;
    top: 103px;
    left: -62px;
    width: 70vw;
`

const Prog=styled.div`
    display:flex;
    z-index: 1;
    margin-top: -50px;
`

const Web=styled.div`
    position: relative;
    right:0;
`

const WebLine=styled.img`
`

function Team() {
  return (
    <Container>
        <Title>Meet the Team</Title>
        <ShapeL src='/Frame 427318228.svg'/>
        <Cube src='/Group 3673.svg'/>
        <SubTitle>Design |</SubTitle>
        <TeamBox>
            <Mem src='/harshsir.png'/>
            <Mem src='/IMG_20240627_115713.jpg'/>
            <Mem src='/sanya.jpg'/>
            <Mem/>
            <Mem/>
        </TeamBox>
        <ShapeR src='Frame 427318229.svg'/>
        <Prog>
            <img src='/progline.svg'/>
            <ProgTopLine src='/progtopline.png'/>
        </Prog>
        <SubTitle className='programming'>Programming |</SubTitle>
        <TeamBox>
            <Mem src='/harshsir.png'/>
            <Mem src='/IMG_20240627_115713.jpg'/>
            <Mem/>
            <Mem/>
            <Mem/>
        </TeamBox>
        <Web>
            <WebLine src="/Group 3674.svg"/>
        </Web>
        <SubTitle>Web Development |</SubTitle>
        <TeamBox>
            <Mem src='/harshsir.png'/>
            <Mem src='/IMG_20240627_115713.jpg'/>
            <Mem/>
            <Mem/>
            <Mem/>
        </TeamBox>
        <SubTitle>Android & AIML |</SubTitle>
        <TeamBox>
            <Mem src='/harshsir.png'/>
            <Mem src='/IMG_20240627_115713.jpg'/>
            <Mem/>
            <Mem/>
            <Mem/>
        </TeamBox>
    </Container>
  )
}

export default Team