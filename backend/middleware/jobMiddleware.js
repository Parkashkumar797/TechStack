
import multer, { diskStorage } from 'multer'

const storage = diskStorage({
    destination:(req,file,cb)=>{
cb(null,'./upload')
    },
  filename:(req,file,cb)=>{
    const newName=Date.now()+'_'+file.originalname
    cb(null,newName)
  }})
  const upload=multer({
    storage
  })
  export default upload