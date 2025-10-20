import express from "express";
import { getAllUsers, updateUser } from "../controllers/adminController.js";

const adminRoute = express.Router();

// GET all users
adminRoute.get("/users", getAllUsers);
adminRoute.put("/users/:id", updateUser);
export default adminRoute;
