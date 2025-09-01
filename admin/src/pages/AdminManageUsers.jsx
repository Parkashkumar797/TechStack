import React from 'react'
import './AdminManageUsers.css';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function AdminManageUsers() {
    const [user, setUser] = useState([])
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("http://localhost:5000/api/user/profile")
            setUser(res.data)
        }
        fetchUser()
    }, [])
    return (
        <>
            <div className=''>

                <table className='table cattable table-bordered text-center'>
                    <thead className='p-4'>
                        <tr className=''>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>createdAt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {user.map((users) => (
                            <tr className='' key={users._id}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.role}</td>
                                <td>{users.createdAt}</td>
                                {/* <td>senior developer</td>
                <td>2e3r</td>
                <td>remove</td> */}
                    
                            </tr>
                                 ) )}
        </tbody>
                </table>


            </div>
        </>
    )
}
