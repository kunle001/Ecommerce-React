import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
`
const Arrow= styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius: 50%;
    display:flex;align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction==="left" && "10px"}; 
    right:${props=> props.direction==="right" && "10px"}; 
    margin:auto;
    cursor:pointer;
    opacity:0.3
`

const Wrapper= styled.div`
    height:100%;
    display:flex;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #${props => props.bg};
`;

const Image= styled.img`
    height:80%;
`

const ImgContainer = styled.div`
  width: 70%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 50px;
`;

const Title= styled.h1`
    font-size: 70px;
`
const Desc= styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:999;
    letter-spacing:3px
`
const Button= styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src='https://th.bing.com/th/id/R.20dc3df9387a9a6db0678f3e60563792?rik=vS%2b7PyQZA1N4aw&pid=ImgRaw&r=0'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALES</Title>
                    <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>            
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src='https://th.bing.com/th/id/R.20dc3df9387a9a6db0678f3e60563792?rik=vS%2b7PyQZA1N4aw&pid=ImgRaw&r=0'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALES</Title>
                    <Desc>Winter Wears at the Cheapest Rate</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>            
            </Slide>
            <Slide bg="fbf0f4">
                <ImgContainer>
                    <Image src='https://th.bing.com/th/id/R.20dc3df9387a9a6db0678f3e60563792?rik=vS%2b7PyQZA1N4aw&pid=ImgRaw&r=0'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>POPULAR SALES</Title>
                    <Desc>Hot Sales Don't miss out</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>            
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
        
    </Container>
  )
}

export default Slider
