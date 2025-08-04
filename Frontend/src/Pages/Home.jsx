import React from 'react'
import HeroSection from '../components/HeroSection'
import Popularjob from '../components/Popularjob'
// import FeaturedJobs from '../components/FeaturedJobs'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
   <>
   <HeroSection/>
   <Popularjob/>
  {/* <FeaturedJobs/> */}
  <Testimonials/>
   </>
  )
}

export default Home