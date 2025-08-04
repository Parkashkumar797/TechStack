import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
export default function HeroSection() {
    return (
        <>
            <div className="h-[85vh] " style={{
                backgroundImage: `url(${assets.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="container text-white font-semibold px-20 py-5 flex justify-between items-center mx-auto">
                    <div className=' space-y-4 pt-20'>
                        <div className="text-5xl">Find Your Dream Job</div>
                        <div className="text-5xl">With TalentStack</div>
                        <div className='text-xl'>
                            Connecting Talent with Top Companies
                        </div>
                        <button className='bg-[#FFD700] px-4 mt-4 py-2 font-bold text-lg rounded-xl'> <Link to="/job" >Get Started</Link></button>
                    </div>
                    <div className='h-52'>
                        <img className="w-100 relative lg:w-100 md:w-200 bottom-20" src={assets.herosectionImg} alt="person" />
                    </div>
                </div>
            </div>
        </>
    )
}
