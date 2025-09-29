import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Header";
import Header from "./Footer";
export default function AdminMaster(){
    const email=sessionStorage.getItem("email")
    // if(!email){
    //     toast.error("Please login")
    //     return <Navigate to={"/login"}/>
    // }
    return(
        <>
        <Header/>
        <Outlet/>
      <Footer/>
        </>
    )
}