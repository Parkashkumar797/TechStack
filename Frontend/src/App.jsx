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
import { Applyjob } from './Pages/Applyjob';
function App() {




  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-category" element={<Jobcategories/>} />
          <Route path="/popular-jobs" element={<Popularjob/>} />
          <Route path="/apply-job" element={<Applyjob/>} />
          <Route path="/*" element={<Error/>} />
          {/* <Route path="/" element={<Error/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
