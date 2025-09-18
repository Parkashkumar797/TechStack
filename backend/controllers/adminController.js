import usermodel from "../models/userModel.js"
export const getAllUsers = async (req, res) => {
  try {
    const users = await usermodel.find().select("-password");    // Exclude passwords
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }         
}
export const deleteUser=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}
export const updateUserRole=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"internal sever error"})
    }
}
export const getAllCompanies=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({messagel:"error.message"})
    }
}
export const approveCompany=async(req,res)=>{
    try {
        
    } catch (error) {
        res.staus(500).json({success:false,message:error.message})
    }
}
export const deleteCompany=async(req,res)=>{
    try {
        
    } catch (error) {
        res.staus(500).json({success:false,message:error.message})
    }
}
export const getAllJobs=async(req,res)=>{
    try {
        
    } catch (error) {
        res.staus(500).json({success:false,message:error.message})
    }
}
export const deleteJob=async(req,res)=>{
    try {
        
    } catch (error) {
        res.staus(500).json({success:false,message:error.message})
    }
}