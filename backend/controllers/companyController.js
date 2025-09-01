import companyModel from "../models/companyModel.js";
export const register= async(req,res)=>{
    const {companyName,description,logoUrl,website}=req.body
if(!companyName||!description||!logoUrl||!website){
    res.json({success:false,message:"all fields are necessary"})
}
try {
    const existingCompany= await companyModel.findOne({website})
    if(existingCompany){
res.json({success:false,message:"company already exist"})
    }
    else{
        const company=  new companyModel( {companyName,description,logoUrl,website})
        await company.save()
        console.log(company);
        
    } 
} catch (error) {
    res.json({success:false,message:error.message})
}
}
export const compantList=async (req,res)=>{
    try {
           const company= await companyModel.find({})
    res.json(company)
    } catch (error) {
        res.json({success:false,message:error.message})
    }

}