
import registerUsers from "../models/registerUser.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import validator from "validator"
// register user
export const registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    if (!name || !email || !password) return res.status(404).json({ success: false })
    try {
        const existinguser = await registerUsers.findOne({ email })
        if (existinguser) return res.json({ success: false, message: 'email already exist' }) 
            if(!validator.isEmail(email)) {
                return res.json({success:false,message:"Please enter a valid Email"})
            }
            if(password.length<6){
             return res.json({success:false,message:"please enter a strong"})   
            }
            if(password!==confirmPassword){
                console.log(password);
                console.log(confirmpassword);
                
             return res.json({success:false,message:"Please write a same password "})   
            }

        const hashedpassword = await bcrypt.hash(password, 7)
        const user = new registerUsers({ name, email, password: hashedpassword })
        await user.save()
        const token = jwt.sign({id:user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            samSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60
        })
        res.send({ success: true })
    } catch (err) {
        res.send({ success: false, message: err.message })
    }
    console.log(req.cookies);
    
}
// login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.staus(400).json({ success: false, message: "Email and password is required " })
    }
    try {

        const user = await registerUsers.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "Invalid Email" })
        }
        // res.send(user)
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {

            return res.json({ success: false, message: "Invalid Password" })
        }
        const token = jwt.sign({ id:user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60
        })
            console.log(req.cookies);
        res.json({ success: true, })

    } catch (err) {
        res.json({ success: false, message: err.message })
    }

    
}
// logout user
export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'prodution' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60
        })

        res.json({ success: true })
    }
    catch (err) {
        res.json({ success: false, messsage: err.message })
    }
}
// export const isAuthencitate = async (req, res) => {
//     try {
//         return res.json({ success: true })
//     }
//     catch (err) {
//         res.json({ success: false, message: err.message })
//     }
// }