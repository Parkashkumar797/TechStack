import express from "express"
const router = express.Router();
import userModel from "../models/userModel.js";
import { registerUser,loginUser } from "../controllers/userControlller.js";
import registerUsers from "../models/registerUser.js";
import bcrypt from "bcrypt"

// Route for home
router.get("/", (req,res) => {
    // res.render("Home Page")
    if(req.session.name){
       res.send(`Welcome, ${req.session.name}`);
    }
    else{
        res.redirect("/login")
    }
})

// Route for registration 
router.get("/register", (req, res) => {
    res.render("register", { error: null })
})
router.post("/register",registerUser)

// Login Route
router.get("/login", (req, res) => {
    res.render("login", { error: null })
});
router.post("/login",loginUser)
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Error logging out")
        }
        res.redirect("/login")
    })
}) 

export default router;