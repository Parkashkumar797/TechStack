import express from "express";
import { getAllUsers } from "../controllers/adminController.js";

const adminRoute = express.Router();

// GET all users
adminRoute.get("/users", getAllUsers);

export default adminRoute;
