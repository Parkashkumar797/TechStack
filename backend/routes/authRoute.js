import express from "express"
import multer from "multer";
const authRouter = express.Router();    
import { login, logout, register } from "../controllers/authController.js";
// import userauth from "../middleware/authMiddleware.js"

// Route for registration 
authRouter.post("/register",register)

// Login Route
authRouter.post("/login",login)
// logout route
authRouter.post('/logout',logout)

export default authRouter;