const express=require("express");
const app=express();
const cookieParser = require('cookie-parser')
const mongoose=require("mongoose");
const Authenticate=require("./middleware/auth")
// const dotenv=require("dotenv");
require('dotenv').config()
const bodyParser = require("body-parser");
const connectDB=require("./db")
const userRoutes=require("./routes/userRoutes")
const cors=require("cors");
const {memberRegister, memberLogin}=require("./controllers/userControllers");
const Member=require("./models/member")
const generateToken=require("./config/generateToken")
app.use(cookieParser());
  
  // app.use(function(req, res, next) {
  //   res.header('Content-Type', 'application/json;charset=UTF-8')
  //   res.header('Access-Control-Allow-Credentials', true)
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   )
  //   next()
  // })
  
app.use(express.json());
// app.use(cors());
app.use(cors({ 
  origin: 'http://localhost:5173', // Replace with your frontend domain
  credentials: true // Enable cookies and other credentials in CORS requests
}));
app.use("/api/user",userRoutes)

connectDB();
port=process.env.PORT

// app.get("/api/user/home",Authenticate,(req,res)=>{
//     console.log("Hello from Home!");
//     res.send(req.rootUser);
// })
app.post("/api/user/login",async(req,res)=>{
    const {password,email}=req.body.data;
    console.log(password)
    const member =await Member.findOne({email});
    // console.log(token);
    if(member && await member.matchPassword(password)){
      console.log("logged in");
      const token=generateToken(member._id);
      // res.cookie('SiyaRam', "Radharani_ki_jai", { maxAge: 3600000 });
      res.cookie('Haribol', token, { 
        httpOnly: true, // cookie only accessible by the web server
        maxAge: 3600000000,
      });
      res.status(201).json({
        name:"Jai Shree Krishna"
      });
      // res.send("Jai RadheKrishna");
  }
    
app.get("/auth",async(req,res)=>{
  if(req.user){
    res.status(201)
  }
})
   

});
app.post("/hogla",(req,res)=>{
    console.log(req.body)
    console.log("hogla connected!");
    res.cookie('RadheKrishnaa', "Jai-hoo", { maxAge: 3600000000 });
    if(req.cookies.RadheKrishna)
        console.log("Cookies created!");
    // res.send("whajwah")
    // res.send("Jai Shree Krishna");
    res.status(201).json({
      name:"Jai Shree Krishna"
    });
    res.send("Jai RadheKrishna");

})
app.listen(port,(req,res)=>{
    console.log("Server is running at port!"+port);
})