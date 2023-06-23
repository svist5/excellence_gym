import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route,Link} from "react-router-dom";
import Login from './components/Login/signup/login';
import SignUp from './components/Login/signup/signup';
import Home from "./components/Home"
import HomePage from './components/memberPages/homePage';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<Login></Login>}></Route>
      <Route path="/login" element={<SignUp></SignUp>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
   </Routes>
   </>
  )
}

export default App
