import express from "express"
const router=express.Router();
import userModel from "../models/userModel.js";
import registerUsers from "../models/registerUser.js";
import bcrypt from "bcrypt"

router.get("/",(req,res)=>{
    res.render("login",{ error: null })
});
router.post("/user",async (req,res)=>{
const data= await userModel.create(req.body)
res.json(data);
})
router.get("/register",(req,res)=>{
  res.render("register", { error: null })
})
router.post("/register",async (req,res)=>{

    const {name,email,password}=req.body
    const salt =await bcrypt.genSalt(7)
const hashedpassword=await bcrypt.hash(password, salt)
const registration=await registerUsers.create({name,email,password:hashedpassword}) 
console.log(hashedpassword);
    
    res.send("user registered successfully ")
})
router.post("/login", async (req,res)=>{
    const {email,password}=req.body;
    const user= await registerUsers.findOne({email})
    if(!user){
        return res.render("login",{error:"User not found"})
    }
    // res.send(user)
    const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
        return res.render("login",{error:"Incorrect Password"})
         
    }
   res.redirect("register")
})

export default router;