import express from "express"
const router = express.Router();
import { registerUser,loginUser,logoutUser } from "../controllers/userControlller.js";
// import userauth from "../middleware/authMiddleware.js"

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
router.get("/",(req,res)=>{
    res.send("authorised user");
})
router.post('/logout',logoutUser)

export default router;