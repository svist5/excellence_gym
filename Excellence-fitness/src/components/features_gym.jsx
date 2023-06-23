import { Card, CardHeader, CardBody, CardFooter,Heading,Image,Text,Wrap,WrapItem,Divider,Stack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
const  Gym_card=({heading,body,image,moto})=>{ 
  // const text_color="black";
  const [text_color,setColor]=useState("black");
  const changeColor=()=>{
    setColor("white");
  }
  const rechangeColor=()=>{
    setColor("black");
  }
return (<>
<Card maxW='sm'className="gym_card" onMouseLeave={rechangeColor} onMouseEnter={changeColor}>
  <CardBody >
    <Image
      src={image}
      alt={moto}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={text_color}>{heading}</Heading>
      <Text  py='2' color={text_color} >
       {body}
      </Text>
     
    </Stack>
  </CardBody>
  {/* <CardFooter>
    
  </CardFooter> */}
</Card>
</>)
}
export default Gym_card;