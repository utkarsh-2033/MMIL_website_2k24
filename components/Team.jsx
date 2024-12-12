import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

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
    z-index: -1;
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
    position: relative;
`

const Mem=styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 20px 70px;
    object-fit: cover;
    background-color: white;
    z-index:2;

    &.top{
        object-position: top;
    }

    &.bottom{
        object-position: bottom;
    }
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
    display:flex;
    justify-content: flex-end;
    position:relative
`

const WebLine=styled.img`
    position:absolute;
    top: -250px;
`

const And=styled.div`
    position:relative;
    display:flex;
    justify-content: flex-end;
`

const AndLine=styled.img`
    position:absolute;
    top:-250px;
`

const ViewMoreButton = styled.button`
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    z-index: 3;
    position: relative;
    background: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: #8a2be2;
    }

    &:hover .icon {
        color: #8a2be2;
    }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    transition: color 0.3s ease;
`

function Team() {
  const [showMoreDesign, setShowMoreDesign] = useState(false);
  const [showMoreProgramming, setShowMoreProgramming] = useState(false);
  const [showMoreWeb, setShowMoreWeb] = useState(false);
  const [showMoreAndroid, setShowMoreAndroid] = useState(false);

  return (
    <Container>
        <Title>Meet the Team</Title>
        <ShapeL src='/Frame 427318228.svg'/>
        <Cube src='/Group 3673.svg'/>
        <SubTitle>Design |</SubTitle>
        <TeamBox>
            <Mem src='/IMG_20240627_115713.jpg'/>
            <Mem src='/harshsir.png'/>
            <Mem src='/Anushka.jpg'/>
            {!showMoreDesign && (
                <ViewMoreButton onClick={() => setShowMoreDesign(true)} className='viewMore'>
                    View more &nbsp;<StyledFontAwesomeIcon icon={faCaretDown} className="icon"/>
                </ViewMoreButton>
            )}
            {showMoreDesign && (
                <>
                    <Mem src='/sanya.jpg'/>
                    <Mem src='/male.jpg'/>
                    <Mem src='/female.jpg'/>
                </>
            )}
        </TeamBox>
        <ShapeR src='Frame 427318229.svg'/>
        <Prog>
            <img src='/progline.svg'/>
            <ProgTopLine src='/progtopline.png'/>
        </Prog>
        <SubTitle className='programming'>Programming |</SubTitle>
        <TeamBox>
            <Mem src='/IMG_20240628_145721.jpg'/>
            <Mem src='/Cs83848729.jpg'/>
            <Mem src='/1716935731824.jpg'/>
            {!showMoreProgramming && (
                <ViewMoreButton onClick={() => setShowMoreProgramming(true) } className='viewMore'>
                    View more &nbsp;<StyledFontAwesomeIcon icon={faCaretDown} className="icon"/>
                </ViewMoreButton>
            )}
            {showMoreProgramming && (
                <>
                    <Mem src='/Anusha.jpg'/>
                    <Mem src='/IMG-20241126-WA0005.jpg'/>
                    <Mem src='/IMG-20240916-WA0007.jpg'/>
                    <Mem src='/male.jpg'/> {/* Vaishnav Gupta */}
                    <Mem src='/female.jpg'/> {/* Vaishnavi Bhati */}
                    <Mem src='/male.jpg'/> {/* Utkarsh Gupta */}
                    <Mem src='/male.jpg'/> {/* Tanmay Kalra */}
                </>
            )}
        </TeamBox>
        <Web>
            <WebLine src="/Group 3674.svg"/>
        </Web>
        <SubTitle>Web Development |</SubTitle>
        <TeamBox>
            <Mem src='/PXL_20240516_130321230.MP~5.jpg' className='bottom'/>
            <Mem src='/IMG20240626214849~2.jpg' className='top'/>
            <Mem src='/hero.jpg'/>
            {!showMoreWeb && (
                <ViewMoreButton onClick={() => setShowMoreWeb(true)} className='viewMore'>
                    View more &nbsp;<StyledFontAwesomeIcon icon={faCaretDown} className="icon"/>
                </ViewMoreButton>
            )}
            {showMoreWeb && (
                <>
                    <Mem src='/photo.jpg'/>
                    <Mem src='/IMG_20240526_193046.jpg'/>
                    <Mem src='/IMG_20241123_154657.jpg' className='top'/>
                    <Mem src='/Muskan.jpg'/>
                    <Mem src='/garima.jpeg'/>
                    <Mem src='/parthc.jpg' className='top'/>
                    <Mem src='/female.jpg'/>
                    <Mem src='/female.jpg'/>
                </>
            )}
        </TeamBox>
        <And>
            <AndLine src='/Group 3667.svg'/>
        </And>
        <SubTitle>Android & AIML |</SubTitle>
        <TeamBox>
            <Mem src='/IMG-20230428-WA0023.jpg' className='top'/>
            <Mem src='/DSC_1026.JPG'/>
            <Mem src='/IMG-20221128-WA0050.jpg'/>
            {!showMoreAndroid && (
                <ViewMoreButton onClick={() => setShowMoreAndroid(true)} className='viewMore'>
                    View more &nbsp;<StyledFontAwesomeIcon icon={faCaretDown} className="icon"/>
                </ViewMoreButton>
            )}
            {showMoreAndroid && (
                <>
                    <Mem src='/IMG_20231024_045140_695.jpg'/>
                    <Mem src='/IMG_20241126_164315.jpg'/>
                    <Mem src='/Ashita.jpg'/>
                    <Mem src='/ayan.jpg'/>
                </>
            )}
        </TeamBox>
    </Container>
  )
}

export default Team