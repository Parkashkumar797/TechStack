import mongoose from "mongoose";
import registerUsers from "../models/registerUser.js";
import bcrypt from "bcrypt";
import session from "express-session";
// register user
export const registerUser =async (req, res) => {
        const { name, email, password,confirmpassword } = req.body
        const salt = await bcrypt.genSalt(7);    
        const hashedpassword = await bcrypt.hash(password, salt)
        const registration = await registerUsers.create({ name, email, password: hashedpassword })
        console.log(hashedpassword);
        // res.send("user registered successfully ")
        res.redirect("/login")
    }
    // login user
    export const loginUser =  async (req, res) => {
    const {email, password} = req.body;
    const user = await registerUsers.findOne({ email })
    if (!user) {
        return res.render("login", { error: "User not found" })
    }
    // res.send(user)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
    
        return res.render("login", { error: "Incorrect Password" })
    }else {
              req.session.name = user.name
       return res.send(`Home Page ${req.session.name} `);
    }
  
    //  return res.redirect("/")
}