import React from 'react'
import { MdComputer } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillBagHeartFill } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
function Popularjob() {
  return (
    <>
      <h1>Popular Job Categories</h1>
      <section className='text-black font-semibold px-20 py-5 flex justify-between items-center mx-auto'>

        {/* <div className="card"> */}
        <div className="card-body p-4 rounded bg-[#007BFF]">
          <div className='text-5xl text-[#FFFFFF]'><MdComputer /></div>
          <div className='text-[#FFFFFF] text-lg'>Developer</div>
        </div>
        <div className="card-body p-4 rounded bg-[#007BFF]">
          <div className='text-5xl text-[#FFFFFF]'><IoIosColorPalette /></div>
          <div className='text-[#FFFFFF] text-lg'>Designer</div>
        </div>
        <div className="card-body p-4 rounded bg-[#007BFF]">
          <div className='text-[#FFFFFF] text-5xl'> <TbSpeakerphone /></div>
          <div className='text-[#FFFFFF] text-lg'>Marketing</div>
        </div>
        <div className="card-body p-4 rounded border bg-[#007BFF] border-indigo-600">
          <div className='text-[#FFFFFF] text-5xl'> <BsFillBagHeartFill /></div>
          <div className=' text-[#FFFFFF] text-lg'>sales</div>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Popularjob