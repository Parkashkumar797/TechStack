import mongoose from 'mongoose';
const companySchema=mongoose.Schema({
    title:{
        type:String,
        enum:['Programming','DataScience','Designing','Networking','Management','Marketing','Cybersecurity'],
        required:true
    },company:{
        type:String,
        required:true
    },
    logo:{
        type:String,required:true
    },
    location:{
        type:String,required:true
    },
    level:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    category:{
        type:String,required:true
    }
})
const companyModel=mongoose.model("companies",companySchema)
export default companyModel