
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Adminpage from './pages/Adminpage'
import AdminManageUsers from './pages/AdminManageUsers'
import AdminManageCompany from './pages/AdminManageCompany'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Adminpage/>} />
        <Route path="/admin/users" element={<AdminManageUsers/>} />
        <Route path="/admin/companies" element={<AdminManageCompany/>} />
      </Routes>
            <ToastContainer />
    </>
  )
}

export default App
