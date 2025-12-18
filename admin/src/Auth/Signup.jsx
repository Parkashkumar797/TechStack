import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

function Signup() {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleForm = async (e) => {
    e.preventDefault()
    try {


      const res = await axios.post("http://localhost:5000/api/auth/register", formData)
      console.log(res.data);
      
      if (res.data.success) {
        alert("Registration successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        navigate("/login")
      } else {
        alert(res.data.message || "Registration failed!");
      }
    }
    catch (err) {
      console.log(err.message);

    }

  }
    return (
      <>
        <div className="bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3] h-screen flex justify-center items-center ">
          <form className='bg-[#72beea] p-10 space-y-4 rounded-2xl w-full max-w-md' onSubmit={handleForm} action="">
            <div className='text-center text-3xl font-semibold'>REGISTER</div>
            <div>
              <label className='block mb-1 text-lg' htmlFor="">Full Name</label>
              <input className=" rounded-xl focus:outline-none p-2 bg-white w-full" type="text" placeholder='Full Name' name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label className='block mb-1 text-lg' htmlFor="">Email</label>
              <input className="rounded-xl focus:outline-none p-2 bg-white w-full" name="email" type="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className='block mb-1 text-lg' htmlFor="">Password</label>
              <input className="rounded-xl  focus:outline-none p-2 bg-white w-full" name='password' type="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
            </div>
            <div>
              <label className='block mb-1 text-lg' htmlFor="">Confirm Password</label>
              <input className="rounded-xl mb-2 focus:outline-none p-2 bg-white w-full" name='confirmPassword' type="password" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} required />
            </div>
           <button className='text-center w-full font-semibold py-2 text-lg rounded-xl bg-[#FFD700]'>Register</button>
            <div className='flex justify-between text-lg p-3'>
              <div>
                <p>Already have an account?</p>
              </div>
              <div>
                <button className="text-[#14488C] font-bold"> <Link to="/login">Login</Link></button>
              </div>
            </div>
          </form>

        </div>
      </>
    )
  }

  export default Signup
