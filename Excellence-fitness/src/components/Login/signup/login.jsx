import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Logo from './logo';
import { Image } from '@chakra-ui/react'
import "./log.css"
import axios from 'axios'
const App=()=> 
{
    const [dp,setDp]=useState("images/transformation/image2.jpg")
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const password_change=(e)=>{
        setPassword(e.target.value);
        const pass=password.length;
        if(pass>2 && pass<=6 ){
            setDp("images/transformation/image2.jpg")
        }
        if((pass)>6 && pass<=10 ){
            setDp("images/transformation/image3.jpg")
        }
        if((pass)>10 && pass<=17 ){
            setDp("images/transformation/image4.jpg")
        }
        if((pass)>17 && pass<=25 ){
            setDp("images/transformation/image5.jpg")
        }
        if((pass)>25 ){
            setDp("images/transformation/image6.jpg")
        }
    }

    const signup_handle=async()=>{
      
        // const res=await fetch("http://localhost:3000/api/user",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",
        //     },
        //     body:JSON.stringify({
        //         name,
        //         email,
        //         password,
                
        //     })
        // });
        // const data= await res.json();
        // console.log(data);

        // axios.get('http://localhost:3000/hogla', { 
        //   withCredentials: true // Enable cookies and other credentials in Axios request
        // })
        // .then(response => {
        //   console.log(response.data);
        // })
        // .catch(error => {
        //   console.log(error);
        // });
        // const res = await axios.get(
        //   'http://localhost:3000/hogla',
        //   {
        //     withCredentials: true,
        //   }
        // )
        // const data= await res.json();
        // console.log(data);


      //   const res=await fetch("http://localhost:3000/hogla",{
      //     method:"GET",
      //     headers:{
      //         Accept:"application/json",
      //         "Content-Type":"application/json"
      //     },
      //     credentials:"include",
      //     mode:"no-cors",
          
      // });
      // const data=await res.json();
      // console.log(data);
      // fetch('http://localhost:3000/hogla', {
      //   method: 'GET',
      //   credentials: 'include'
      // });
      // fetch('http://localhost:3000/hogla', {
      //   method: 'GET',
      //   credentials: 'include'
      // }).then(response => {
      //   console.log(response.status);
      // }).catch(error => {
      //   console.error(error);
      // });
      axios.post("http://localhost:3000/api/user",{
        data:{
          name,
          email,
          password
        }
      },
      {
        withCredentials: true
      }). then(response=>{
        if(response.status=== 201){
          console.log("success!")
          alert("Success!")
        }
      })
      .catch(error=>{
        console.log(error)
      })
    }


  return (<>
    <Logo></Logo>
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <center><Image
                borderRadius='full'
                boxSize='150px'
                src={dp}
                />
            </center>
          

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
           Welcome to Excellence Fitness. If you are a member please log in.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput  value={name} onChange={(event)=>{setName(event.target.value)}} wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                </MDBCol>

               
              </MDBRow>

              <MDBInput value={email} onChange={(event)=>{setEmail(event.target.value)}} wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4'  id='form4' type='file'/>
              <MDBInput wrapperClass='mb-4' value={password} onChange={password_change}label='Password' id='form4' type='password'/>

            

              <MDBBtn className='w-100 mb-4' onClick={signup_handle} size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  </>
  );
}

export default App;