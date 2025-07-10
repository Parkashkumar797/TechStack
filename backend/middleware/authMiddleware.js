import jwt from 'jsonwebtoken';
const userAuth=async(req,res,next)=>{
  const {token}=req.cookies
  if(!token){
    return res.json({success:false,message:"Unauthorized user"})
  }
  try{
    const tokendecode=jwt.verify(token,process.env.SECRET_KEY)
    if(tokendecode.id){
      req.body.userId=tokendecode.id
    }
    else{
      return res.json({success:false})
    }
    next()
  }
  catch(err){
    res.json({success:false,message:err.message})
  }
}
export default userAuth;