import React, { useState } from 'react'
import { MdComputer } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillBagHeartFill } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { assets } from '../assets/assets';

function Popularjob() {
  const jobs = [
    {
      title: "Lead Goop",
      company: "Google",
      logo: assets.logo, // Replace with actual Google logo if available
      salary: "$139K Salary",
      type: "Full-Time",
    },
    {
      title: "Applitocor",
      company: "Microsoft",
      logo: assets.microsoft_logo,
      salary: "$1,0580/mo/ta",
      type: "Full-Time",
    },
    {
      title: "Website",
      company: "Shopify",
      logo: assets.company_icon, // Replace with Shopify logo if available
      salary: "$1,85K Salary",
      type: "Part-Time",
    },
    {
      title: "Amazon",
      company: "Amazon",
      logo: assets.amazon_logo,
      salary: "$1,0500/mo/ta",
      type: "Internship",
    },
  ];
  const tabs = ["All", "Full-Time", "Part-Time", "Internship"];
  const [activeTab, setActiveTab] = useState("All");
  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter((job) => job.type === activeTab);

  return (
    <>
      <div className="h-screen p-8" style={{
        backgroundImage: `url(${assets.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 className="text-center text-white text-2xl md:text-3xl font-bold mb-6">Popular Job Categories</h1>
        <section className='text-black font-semibold px-4 md:px-20 py-5 flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-y-0 md:gap-x-8 mx-auto'>

          {/* <div className="card"> */}
          <div className="card-body p-4 rounded bg-[#007BFF] flex flex-col items-center justify-center w-38 h-32 text-center">
            <div className='text-5xl text-[#FFFFFF] mb-2'><MdComputer /></div>
            <div className='text-[#FFFFFF] text-lg'>Developer</div>
          </div>
          <div className="card-body p-4 rounded bg-[#007BFF] flex flex-col items-center justify-center w-38 h-32 text-center">
            <div className='text-5xl text-[#FFFFFF] mb-2'><IoIosColorPalette /></div>
            <div className='text-[#FFFFFF] text-lg'>Designer</div>
          </div>
          <div className="card-body p-4 rounded bg-[#007BFF] flex flex-col items-center justify-center w-38 h-32 text-center">
            <div className='text-[#FFFFFF] text-5xl mb-2'> <TbSpeakerphone /></div>
            <div className='text-[#FFFFFF] text-lg'>Marketing</div>
          </div>
          <div className="card-body p-4 rounded border bg-[#007BFF] border-indigo-600 flex flex-col items-center justify-center w-38 h-32 text-center">
            <div className='text-[#FFFFFF] text-5xl mb-2'> <BsFillBagHeartFill /></div>
            <div className=' text-[#FFFFFF] text-lg'>Sales</div>
          </div>
          {/* </div> */}
        </section>
        <section>
          <div className=" p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white text-center">Featured Jobs</h2>
              <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`text-sm sm:text-base md:text-lg font-medium pb-2 border-b-2 transition-all duration-200 whitespace-nowrap ${activeTab === tab
                        ? "border-white text-white"
                        : "border-transparent text-white/70 hover:text-white"
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {filteredJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{job.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 font-medium truncate">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <span className="text-sm sm:text-base text-gray-800 font-semibold">{job.salary}</span>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors w-full sm:w-auto">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Popularjob