import React from 'react'
import { useState } from 'react';
import { FiBriefcase } from "react-icons/fi";
import axios from "axios";
export const Applyjob = () => {
  const [resume,setResume]=useState(false);
  const url= "http://localhost:5000"
const [data,setData]=useState({
  name:"",
  email:"",
})
const handleChange=(e)=>{
  const name =e.target.name;
  const value=e.target.value;
  setData({...data,[name]:value})
}
const handleSubmit= async (e)=>{
  e.preventDefault()
  const formData=new FormData();
  formData.append("name",data.name)
  formData.append("email",data.email)
  formData.append("resume",resume)
  console.log(data.file);
  const response=await axios.post(`${url}/api/job/apply-job`,formData)
  if(response.data.success){
    alert("product added successfully ")
    // setData({
    //   name:"",
    //   email:"",
    // })
    // setResume(false)
  }
  else{
    alert("error")
  }
}

  return (
    <>
      <h1>Apply for job</h1>
      <FiBriefcase size={40} color="#4b91f1" />
      <form action="/upload" onSubmit={handleSubmit} method='POST' encType="multipart/form-data">
        <label className='block' htmlFor="">Full Name</label>
        <input className='border rounded-xl ' type="text" value={data.name}  onChange={handleChange} name='name' placeholder='Full Name' />
        <label className='block' htmlFor="">Email</label>
        <input className='border rounded-xl ' type="email" value={data.email}  onChange={handleChange} name='email' placeholder='abc@gmail.com' />
        <label className='block' htmlFor="">Resume</label>
        <input className='border rounded-xl ' type="file"onChange={(e)=>setResume(e.target.files[0])} name='resume' />
        <button className='bg-yellow-400 p-2'>Upload</button>
      </form>
    </>
  )
}
