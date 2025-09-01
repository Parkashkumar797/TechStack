import express from 'express';
import { register,compantList } from '../controllers/companyController.js';
const companyRoute=express.Router()
companyRoute.get("/companyProfile",compantList)
companyRoute.post("/register",register)
export default companyRoute;
