import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AdminManageCompany() {
    const [companies, setCompanies] = useState([])
useEffect(()=>{
    const fetchCompany = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/company/companyProfile")
            setCompanies(res.data)
        } catch (error) {
            console.log(error.message);

        }

    }
    fetchCompany()
},[])

    return (
        <table>
            <thead>
                <tr>
                    <th>companyName</th>
                    <th>description</th>
                    <th>logoUrl</th>
                    <th>website</th>
                    <th>createdAt</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company, index) => (
                    <tr  key={company._id}>
                        <td>{company.companyName}</td>
                        <td>{company.description}</td>
                        {/* <td><img src={company.logoUrl} height="50px" alt="" /></td> */}
                        <td className='text-wrap'>{company.website}</td>
                        <td>{company.createdAt}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
