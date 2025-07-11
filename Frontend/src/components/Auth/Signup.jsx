import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [pswd,setPswd]=useState('')
  const [cpswd,setCpswd]=useState('')
  return (
  <>
  <div className="bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3] h-screen flex justify-center items-center ">
<form className='bg-[#72beea] p-10 space-y-4 rounded-2xl w-full max-w-md' action="">
    <div className='text-center text-3xl font-semibold'>REGISTER</div>
    <div>
        <label className='block mb-1 text-lg' htmlFor="">Full Name</label>
        <input className=" rounded-xl focus:outline-none p-2 bg-white w-full" type="text" placeholder='Full Name' required /> 
    </div>
    <div>
         <label className='block mb-1 text-lg' htmlFor="">Email</label>
         <input className="rounded-xl focus:outline-none p-2 bg-white w-full" type="text" placeholder='Email' required />
    </div>
    <div>
         <label className='block mb-1 text-lg' htmlFor="">Password</label>
         <input className="rounded-xl  focus:outline-none p-2 bg-white w-full" type="text" placeholder='Password' required />
    </div>
    <div>
         <label className='block mb-1 text-lg' htmlFor="">Confirm Password</label>
         <input className="rounded-xl mb-2 focus:outline-none p-2 bg-white w-full" type="text" placeholder='Confirm Password' required />
    </div>
    <div className=' text-center font-semibold py-2 text-lg rounded-xl bg-[#FFD700]'><button>Register</button></div>
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