import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Master from './layouts/Master';
import Error from './Pages/Error';
import Jobcategories from './Pages/Jobcategories';
import Popularjob from './components/Popularjob';
import Applyjob from './Pages/Applyjob';
// import FeaturedJobs from './components/FeaturedJobs';
import WhyChooseTalentStack from './components/WhyChooseTalentStack';
import Testimonials from './components/Testimonials';
import Job from './Pages/Job';
import Application from './Pages/Application';
import Createjob from './Pages/Creatrejob';
import CompanyRegister from './Pages/CompanyRegister';
import PostJob from './Pages/Postjob';
import AdminMaster from './layouts/AdminMaster';
import CompanyApplication from './company/ManageUser.jsx/CompanyApplications';
function App() {




  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-category" element={<Jobcategories />} />
          <Route path="/popular-jobs" element={<Popularjob />} />
          <Route path="/apply-job/:id" element={<Applyjob />} />
          {/* <Route path="/featured-job" element={<FeaturedJobs/>} /> */}
          <Route path="/why-choose" element={<WhyChooseTalentStack />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/job" element={<Job />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/create-job" element={<Createjob />} />
          <Route path="/register-company" element={<CompanyRegister />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/*" element={<Error />} />
          {/* <Route path="/" element={<Error/>} /> */}
        </Route>

        <Route path='/company' element={<AdminMaster />} >

          {/* <Route path="/admin" element={<Dashboard />} /> */}

          <Route path="/company/applications" element={<CompanyApplication />} />


        </Route>
      </Routes>
    </>
  )
}

export default App;
