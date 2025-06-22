import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Master from './components/layouts/Master';
import Error from './components/Pages/Error';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
