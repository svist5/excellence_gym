import React from 'react';
import { useState,useEffect } from 'react';
import logo from "/images/gym-logo.png"
import {Join} from "./joining_qoutes"
import {quotes} from "./Qoutes"
import { Center, VStack,HStack,Box,Stack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Test() {

    const logo_change=()=>{
        {setInterval=(()=>{
            {reverse_word}
        },2000)}
    }
    let new_quote=quotes[Math.floor(Math.random()*4)]
    let join=Join[Math.floor(Math.random()*4)]
    // console.log(new_quote)
    const [logo_word,setWord]=useState('“where fitness meets excellence"');
    const [logo_active,setLogo]=useState(false);
    
    const changeWord=()=>{
        join=Join[Math.floor(Math.random()*4)]
        const new_word=join;
        setWord(new_word)
    }
    const reverse_word=()=>{
        new_quote=quotes[Math.floor(Math.random()*4)]
        console.log(new_quote)
        setWord(new_quote)
        setLogo(false)
    }
    const logo_touch=()=>{
        new_quote="Make Yourself Big";
        setWord(new_quote)
        setLogo(true)
    }
  return (
    <>
   {logo_change}
    <MDBCarousel showIndicators showControls fade onClick={reverse_word} >
      <MDBCarouselItem
        className='w-100 d-block'
        id="body_images"
        itemId={1}
        src='/images/body.jpg'
        alt='...'
      >
   <div className="box1">
        <Center>
            <VStack>
            <img  className="logo" onMouseEnter={logo_touch} onMouseLeave={reverse_word}   style={{  transition: logo_active ? "width 4s, height 8s" : "" }} src={logo}></img>
            </VStack>
        </Center>
        </div>
        <Tooltip label='Login/Sign up' fontSize='xs'>
                <Button className='home_button'
                colorScheme="teal"
                size='lg'
                onMouseEnter={changeWord}
                onMouseLeave={reverse_word}
                    >🏋 Get Started
                </Button>
            </Tooltip>
      <p className="logo-word">{logo_word}</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='images/body2.jpg'
        alt='...'
      >
       
        <Tooltip label='Login/Sign up' fontSize='xs'>
                <Button className='home_button'
                colorScheme="teal"
                size='lg'
                onMouseEnter={changeWord}
                onMouseLeave={reverse_word}
                    >Become A Member
                </Button>
            </Tooltip>
      <p className="logo-word">{logo_word}</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='/images/body3.jpg'
        alt='...'
      >
       <Tooltip label='Login/Sign up' fontSize='xs'>
                <Button className='home_button'
                colorScheme="teal"
                size='lg'
                onMouseEnter={changeWord}
                onMouseLeave={reverse_word}
                    >Join Us
                </Button>
            </Tooltip>
      <p className="logo-word">{logo_word}</p>
      </MDBCarouselItem>
    </MDBCarousel>
  </>
  );
}