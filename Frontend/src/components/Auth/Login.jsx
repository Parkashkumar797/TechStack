import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className='login h-screen bg-white'>
                <div className=" h-screen bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3]p-8 border flex justify-center items-center">
                
                    <form action="" className='bg-white  w-full max-w-md rounded-[20px] space-y-6 p-10'>
                          <h2 className='text-3xl font-semibold text-center'>Login</h2>
                        <div>
                            <label className='block text-lg mb-1' htmlFor=""> Email</label>
                            <input type="text"
                                placeholder="Email address"
                                className='w-full border focus:outline-none p-2 text-black rounded '
                            />
                        </div>
                        <div>
                            <label className='block text-lg mb-1 ' htmlFor="">Password</label>
                            <input type="password"
                                placeholder="Password"
                                className='w-full border focus:outline-none rounded p-2 text-black'
                            />
                        </div>
                        <div>
                            <button className='bg-[#FFD700] w-full p-2 text-lg font-semibold rounded-[10px] space-y-4'>
                                Login
                            </button>
                        </div>
                        <div className='flex justify-between px-3'>
                        <div className='text-lg'>Don't have an account ?</div> 
                        <div className='text-[#FFD700] font-bold text-lg'> <Link to='/signup'>Sign up</Link> </div>
                        </div>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Login