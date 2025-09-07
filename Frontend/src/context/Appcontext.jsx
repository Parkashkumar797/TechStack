import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { jobsData } from "../assets/assets";
export const AppContext = createContext();
export const AppContextProvider = (props) => {

    const[searchFilter,setSearchFilter]=useState({
        title:"",
        location:"",
    })
    const [isSearched,setIsSearched]=useState(false)   
    const [jobs,setJobs]=useState([]) 
    // function to get job data 
//     const fetchJobs=async()=>{
// setJobs(jobsData)
//     }
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/job/jobs");
                setJobs(res.data); // save jobs in context
                console.log("Jobs fetched:", res.data);
            } catch (err) {
                console.error("Error fetching jobs:", err);
            }
        };
        fetchJobs();
    }, []);
    const value = {
setSearchFilter,searchFilter,
isSearched,setIsSearched,
jobs,setJobs,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
            </AppContext.Provider>
            )
}
