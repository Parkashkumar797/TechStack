
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Adminpage from './pages/Adminpage'
import AdminManageUsers from './pages/AdminManageUsers'
import AdminManageCompany from './pages/AdminManageCompany'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Adminpage/>} />
        <Route path="/admin/users" element={<AdminManageUsers/>} />
        <Route path="/admin/companies" element={<AdminManageCompany/>} />
      </Routes>
    </>
  )
}

export default App
