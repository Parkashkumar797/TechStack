import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container-fluid px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <div className="flex cursor-pointer items-center gap-2">

        <img className="h-8 w-8" src={assets.tslogo} alt="logo" />
        <Link to="/">
          <span className="text-2xl text-red font-bold">
            Talent<span className="text-[#FFD700]">Stack</span>
          </span>
        </Link>
      </div>

      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>copyright @talentStack | All right reserved </p>
      <div className='flex gap-2.5 '>
        <img width={38} src={assets.instagram_icon} alt="" />
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer