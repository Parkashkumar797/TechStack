import userModel from "../models/userModel.js";
export const userProfile=async (req,res)=>{
    try {
        const users= await userModel.find({})
        res.json(users)
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}