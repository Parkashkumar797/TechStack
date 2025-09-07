import express from 'express';
import { userProfile } from '../controllers/userController.js';

const userRoute = express.Router();

// Route to get a single user's profile by ID
userRoute.get("/:userId/profile", userProfile);

export default userRoute;
