import jobModel from "../models/jobModel.js";
import applyJobModel from "../models/applyJobModel.js";
import multer, { diskStorage } from 'multer'
export const registeredCompany=async (req,res)=>{
    const {title,company,logo,location,level,description,category}=req.body
    if(!title||!company||!logo||!location||!level||!description||!category){
        return  res.json({success:false,message:"Details are missing"});
    }
    try {
        const comapany= new jobModel({title,company,logo,location,level,description,category})
        await comapany.save();
        return res.json({success:true,message:"Sccessfully Registered"})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}
export const company=async (req,res)=>{
    const job= await jobModel.find();
    res.json(job)
}
// File: /backend/controllers/jobController.js

export const userjob = async (req, res) => {
    // Check if req.file exists before trying to access its properties
    if (!req.file) {
        return res.json({ success: false, message: "Resume file is required." });
    }

    const { name, email } = req.body;
    
    // Correctly get the filename from req.file
    const filename = req.file.filename;

    // We now have the filename, so we can construct the full URL to save in the database
    const resumeUrl = `${req.protocol}://${req.get('host')}/images/${filename}`;

    if (!name || !email || !resumeUrl) {
        return res.json({ success: false, message: "All fields are required." });
    }
    
    try {
        const data = new applyJobModel({ name, email, resume: resumeUrl });
        await data.save();
        
        // Return a success message with the URL
        return res.json({ success: true, message: "Application submitted successfully!", data: data });
    } catch (error) {
        // Return a more detailed error message
        return res.json({ success: false, message: error.message });
    }
}