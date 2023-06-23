import { useState } from "react"
import { Center, VStack,HStack,Box,Stack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Divider,Heading,Image,Text,Wrap,WrapItem,Tooltip } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import Body_Essentials from "./body_essential"
import Powder from "./Powder"
import "./home.css"
import Gym_card from "./features_gym"
import Footer from "./partials/footer"
import Test from "./test";
// import axio
const Home=()=>{

    const data_get=async()=>{
        const res=await fetch("http://localhost:3000",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name:"potka",
                email:"wahjhwa",
                password:'wawajh',
                pic:'wwajawaw'
            })
        });
        const data= await res.json();
        console.log(data);

    }
    return(<>
    {/*  */}
    <Test></Test>
    <Card align='center'>
            <CardHeader>
                <Heading size='md'> Why you should join us?</Heading>
            </CardHeader>
            <WrapItem>
                <Avatar name='John Cena' size="2xl" src="https://wallpaperaccess.com/full/804826.jpg" />
            </WrapItem>
            <CardFooter>
                <Tooltip label="know more" fontSize={"xs"}>
                <Button colorScheme='teal'>View here</Button>
                </Tooltip>
            </CardFooter>
    </Card>
    {/* <Divider orientation='horizontal' /> */}
    <Stack direction="row" spacing='55px'>
{   
    Body_Essentials.map((essentials,id)=>{
        return <Gym_card className="gym_card" key={id} image={essentials.image}  moto={essentials.moto} heading={essentials.heading} body={essentials.body}></Gym_card>
})
}
</Stack>
        <Powder></Powder>
        <Footer></Footer>
    </>)
}

export default Home;