import express from 'express';
import {userProfile} from '../controllers/userController.js'
const userRoute=express.Router();
userRoute.get("/profile",userProfile)
export default userRoute;