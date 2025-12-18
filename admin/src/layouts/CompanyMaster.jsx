import React from 'react'
import { Outlet } from 'react-router-dom'
import Cheader from './CompanyHeader'
import Footer from './Footer'

export default function CompanyMaster() {
  return (
    <>
<Cheader/>
    <Outlet/>
<Footer/>
    </>
  )
}
