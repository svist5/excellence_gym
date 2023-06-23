const jwt=require("jsonwebtoken");
const Member =require("../models/member")

const Authenticate=async(req,res,next)=>{
    try{
    // console.log(req.cookie.jwtoken)
    const token=req.cookies.jwt;
    // console.log("this is "+token)
    const verifyToken=jwt.verify(token,"johncena");
    // console.log("This is:\t"+verifyToken);
    const rootUser=await Member.findOne({_id:verifyToken._id})
    if(!rootUser){throw new Error("User not found!")}
    req.token=token;
    req.rootUser=rootUser;
    req.userID=rootUser._id;
    next();
}
    catch(err){
        res.status(401).send("Unauthorized: No token provided.");
        console.log(err);
        next();
    }
}
module.exports=Authenticate;