import companyModel from "../models/companyModel.js";
export const registeredCompany=async (req,res)=>{
    const {title,company,logo,location,level,description,category}=req.body
    if(!title||!company||!logo||!location||!level||!description||!category){
        return  res.json({success:false,message:"Details are missing"});
    }
    try {
        const comapany= new companyModel({title,company,logo,location,level,description,category})
        await comapany.save();
        return res.json({success:true,message:"Sccessfully Registered"})
    } catch (error) {
        return res.json({success:false,message:error.message})
    }
}
