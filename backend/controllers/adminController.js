import usermodel from "../models/userModel.js"
export const getAllUsers = async (req, res) => {
  try {
    const users = await usermodel.find().select("-password");    // Exclude passwords
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }         
}
// export const deleteUser=async(req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({message:"Server error"})
//     }
// }
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
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("Received delete request for user:", id); // 🔹 check backend
  try {
    const deletedUser = await usermodel.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
