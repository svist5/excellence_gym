const mongoose =require("mongoose");
const Member=require("../models/member");
const generateToken = require("../config/generateToken");

const memberRegister=async(req,res)=>{
    const {name,password,email}=req.body;
    if(!name || !password || !email){
        res.status(400);
        throw new Error("Please enter all the details");
    }
    const userExists=await Member.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists!");
    }
    const new_member=await Member.create({
        name,
        email,
        password
    });
    if(new_member){
        console.log("New user has been created, name: "+name);
        res.status(200).json({
            _id:new_member._id,
            name:new_member.name,
            email:new_member.email
        })
    }
    else{
        throw new Error("Failed to create new User!");
    }
}
const memberLogin=async(req,res)=>{
    console.log("POST request to /login route");
    const {password,email}=req.body;
    const member =await Member.findOne({email});
    // console.log(member);
    // console.log(token);
    if(member && await member.matchPassword(password)){
        const token=generateToken(member._id);
        // res.cookie('jwt',token,{
        //         httpOnly:true,
        //         expires: new Date(Date.now()+28921981200),
        //     });
        res.cookie('HareKrishna', token, { maxAge: 3600000 });
       if(req.cookies.HareKrishna)
        console.log("Cookie created successfully!");
        // res.status(201).json({
        //     _id:member._id,
        //     name:member.name,
        //     email:member.email,
        //     // token:generateToken(member._id)
        //     token:token
        // })
        res.status(201);
        res.send("Logged in");
    }
    else{
        res.status(401);
        throw new Error("Error")
    }


}
module.exports={memberRegister,memberLogin};