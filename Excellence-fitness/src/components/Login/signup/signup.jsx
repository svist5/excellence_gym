import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios'

// import Logo from './logo';
// import { Image } from '@chakra-ui/react'
import "./log.css"
import { useNavigate } from 'react-router-dom';
const App=()=> 
{
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loginHandle=async()=>{
      
        // const res=await fetch("http://localhost:3000/api/user/login",{
        // const res=await fetch("http://localhost:3000/hogla",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //     },
        //     body:JSON.stringify({
        //         email,
        //         password,
        //     })
        // });
        // const data= await res.json();
        // console.log(data);
        // if(res.status==201)
        // {
        //     // navigate("/home")
        // }
      //   fetch('http://localhost:3000/hogla', {
      //   method: 'GET',
      //   credentials: 'include'
      // });
      //   fetch('http://localhost:3000/api/user/login', {
      //   method: 'GET',
      //   credentials: 'include'
      // });



      // fetch('http://localhost:3000/api/user/login', {
      //   method: 'GET',
      //   credentials: 'include'
      // }).then(response => {
      //   console.log(response.status);
      //   if(response.status===201)
      //     navigate("/home");
      // }).catch(error => {
      //   console.error(error);
      // });
      axios.post('http://localhost:3000/api/user/login', {
        data: {
          // your data goes here
          email,
          password,
        }
      }, {
        withCredentials: true
      })
      .then(response => {
        // handle the response
        if (response.status === 201) {
          // the cookie was created successfully, you can access it using document.cookie or a library like js-cookie
          console.log("success!")
        }
      })
      .catch(error => {
        // handle the error
        console.log(error);
      });



      // fetch('http://localhost:3000/api/user/login', {
      // fetch('http://localhost:3000/hogla', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // credentials: 'include'
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   })
      // })
      //   .then(response => {
      //     if (response.status===201) {
      //       console.log('Cookie created successfully');
      //     } else {
      //       console.error('Error creating cookie');
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error creating cookie:', error);
      //   });

    }


  return (
    <>
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={((e)=>{setEmail(e.target.value)})} value={email} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={((e)=>{setPassword(e.target.value)})} value={password} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button 
                onClick={loginHandle}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login 
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  
    
    </>
  )
}

export default App;