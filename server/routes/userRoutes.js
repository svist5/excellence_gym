const express=require("express");
const router=express.Router()
const {memberRegister, memberLogin}=require("../controllers/userControllers");
const Authenticate=require("../middleware/auth.js")
// const cookieParser = require("cookie-parser")
// const cors=require("cors");





router.post("/",memberRegister);
// router.post("/login",memberLogin);
router.get("/home",Authenticate,(req,res)=>{
    console.log("Hello from Home!");
    res.send(req.rootUser);
})
module.exports=router;