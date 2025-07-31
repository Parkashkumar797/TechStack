import express from "express";
import multer, { diskStorage } from "multer";
import { jobController } from "../controllers/jobController.js";
const jobRouter=express.Router();
const storage = diskStorage({
    destination:(req,file,cb)=>{
cb(null,"./upload")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}+${file.originalname}`)
    }
})
const upload = multer({storage})
jobRouter.post("/apply-job",upload.single("resume"),jobController);
export default jobRouter;