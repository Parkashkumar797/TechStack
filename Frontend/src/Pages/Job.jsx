import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import axios from 'axios'
import { AppContext } from '../context/Appcontext'
import JobListing from '../components/JobListing'

export default function Job() {
const{setSearchFilter,setIsSearched}=useContext(AppContext)
const titleRef=useRef(null)
const locationRef=useRef(null)
const onSearch=()=>{
    setSearchFilter({
        title:titleRef.current.value,
        location:locationRef.current.value,
    })
    setIsSearched(true) 
    console.log({ title:titleRef.current.value,
        location:locationRef.current.value
    })
}
  return (
    <>
      <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white rounded-xl py-16 mx-2 text-center'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>over  10,000+ jobs applied here </h2>
          <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your next big career moves start right here -explore the Best job opportunity and take the first step Towards the Future   </p>

          <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
            <div className='flex items-center'>
              <img src={assets.search_icon} alt="search" />
              <input className='max-sm:text-xs p-2 eounded outline-none w-full' type="text" placeholder='Search for jobs' ref={titleRef} />
            </div>
            <div className='flex items-center'>
              <img src={assets.location_icon} alt="location" />
              <input className='max-sm:text-xs p-2 eounded outline-none w-full' type="text" placeholder='Location' ref={locationRef} />
            </div>
            <button onClick={onSearch} className='bg-blue-600 px-6 py-2 rounded text-white m-1'>search</button>
          </div>
        </div>

        <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex '>
          <div className='flex justify-center gap:10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>TRusted by </p>
            <img className='h-6' src={assets.microsoft_logo} alt="" />
            <img className='h-6' src={assets.walmart_logo} alt="" />
            <img className='h-6' src={assets.accenture_logo} alt="" />
            <img className='h-6' src={assets.samsung_logo} alt="" />
            <img className='h-6' src={assets.amazon_logo} alt="" />
            <img className='h-6' src={assets.adobe_logo} alt="" />
          </div>
        </div>
      </div>
<JobListing/>
    </>
  )
}
