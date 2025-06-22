import React from 'react'
import herosectionImg from "../../assets/images/herosection.png"
import backGround from '../../assets/images/backGround.png';
import { Link } from 'react-router-dom';
export default function HeroSection() {
    return (
        <>
            <div className="h-screen " style={{
                backgroundImage: `url(${backGround})`,
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
                        <button className='bg-[#FFD700] px-4 mt-4 py-2 font-bold text-lg rounded-xl'> <Link to="#" >Get Started</Link></button>
                    </div>
                    <div className='h-48'>
                        <img className="w-100" src={herosectionImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
