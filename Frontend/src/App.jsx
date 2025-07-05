import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Master from './components/layouts/Master';
import Error from './components/Pages/Error';
import Jobcategories from './components/Pages/Jobcategories';
import Popularjob from './components/Pages/Popularjob';
function App() {



class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-category" element={<Jobcategories/>} />
          <Route path="/popular-jobs" element={<Popularjob/>} />
          <Route path="/*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
