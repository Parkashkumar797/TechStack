import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import validator from "validator"
import userModel from "../models/userModel.js";

// register user
export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    if (!name || !email || !password) return res.status(400).json({ success: false, message: "Missing Details" })

    try {
        const existinguser = await userModel.findOne({ email })
        if (existinguser) {
            return res.json({ success: false, message: 'Email already exists' })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid Email" })
        }
        if (password.length < 6) {
            return res.json({ success: false, message: "Please enter a stronger password" })
        }
        if (password !== confirmPassword) {
            return res.json({ success: false, message: "Passwords do not match" })
        }

        const hashedpassword = await bcrypt.hash(password, 7)
        const user = new userModel({ name, email, password: hashedpassword })
        await user.save()

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        // ✅ Send back token and user
        res.json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        })

    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// login user
export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" })
    }

    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "Invalid Email" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        // ✅ Send back token and user
        res.json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        })

    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// logout user
export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        res.json({ success: true, message: "Logout successfully" })
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}
