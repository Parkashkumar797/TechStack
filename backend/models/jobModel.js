import mongoose from 'mongoose';
const jobSchema=mongoose.Schema({
    title:{
        type:String,
        // enum:['Programming','DataScience','Designing','Networking','Management','Marketing','Cybersecurity'],
        required:true
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
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },

    // logo:{
    //     type:String,required:true
    // },
    // category:{
    //     type:String,required:true
    // },
       companyName:{
        type:String,
        required:true 
    }
})
const jobModel=mongoose.model("jobs",jobSchema)
export default jobModel;