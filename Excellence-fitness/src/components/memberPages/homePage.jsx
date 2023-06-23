import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";

const HomePage=()=>{
const navigate=useNavigate();
const callHomePage=async()=>{
    try{
        const res=await fetch("http://localhost:3000/api/user/home",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include",
            mode:"no-cors",
            
        });
        const data=await res.json();
        console.log("Home: "+data);
        if(!res.status===200){ console.log("Error!")}
    }
    catch(err){
        console.log("User not Authorized!");
        navigate("/login")
}

// fetch("http://localhost:3000/api/user/home")
//       .then(response => response.json())
//       .then(data => console(data))
//       .catch(error => navigate("/login"));
}
useEffect(()=>{
        callHomePage();
},[]);
const [name,setName]=useState("");
const [email,setEmail]=useState("")
    return(
        <>
        <h1>NAME:{name}</h1>
        <h1>E-MAIL:{email}</h1>
        </>
    )
}
export default HomePage;