import jobModel from "../models/jobModel.js";


export const jobController=async (req,res)=>{
    const jobmodel =new jobModel({
   name:req.body.name,
   email:req.body.email,
     resume:req.file.filename
    })
    try{
        await jobmodel.save()
        res.json ({success:true,message:"product added successfullly "})
    }
    catch(err){
        res.json({success:false,message:err.message})
    }
}