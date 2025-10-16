import dotenv from 'dotenv'
dotenv.config() // This must be the first line to run
import express from "express"
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
import jobRoute from "./routes/jobRoute.js";
import path from "path";
import cors from "cors"
import authRouter from "./routes/authRoute.js";
import companyRoute from "./routes/companyRoute.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";

const app = express();
const PORT = 5000;
app.set("view engine", "ejs")

// Connect to the database
connectDB();

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRouter)
app.use("/api/job", jobRoute)
app.use("/api/company", companyRoute)
app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute);
app.use('/images', express.static('Upload'))

// Test Route
app.get("/", (req, res) => { res.send("API Working Successfully ") })

// Start the server
app.listen(PORT, console.log(`server has started successfully at port ${PORT}`)
)

