
import { registeredCompany } from "../controllers/companyController.js";
import express from "express";
const companyRouter=express.Router();
companyRouter.post("/company",registeredCompany)
export default companyRouter;