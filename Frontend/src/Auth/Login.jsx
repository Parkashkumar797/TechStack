import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AppContext } from "../context/Appcontext";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      const token = res.data.token;
      if (!token) throw new Error("Token missing");

      // Decode token
      const decodedUser = jwtDecode(token);

      // ✅ SAVE AUTH DATA (SINGLE SOURCE OF TRUTH → sessionStorage)
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", decodedUser.role);

      sessionStorage.setItem(
        "user",
        JSON.stringify({
          _id: decodedUser.id || decodedUser._id,
          email: decodedUser.email,
          role: decodedUser.role,
          name: decodedUser.name || "",
        })
      );

      // Context login
      login(token);

      toast.success("Logged in Successfully");

      // Role-based redirect
      if (decodedUser.role === "admin") {
        window.location.href = "http://localhost:5174/";
      } else if (
        decodedUser.role === "recruiter" ||
        decodedUser.role === "company"
      ) {
        navigate("/company/dashboard");
      } else {
        navigate("/");
      }

      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login h-screen bg-white">
      <div className="h-screen bg-gradient-to-br from-[#0A3A74] via-[#2172C1] to-[#4FB7F3] p-8 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-[20px] space-y-6 p-10"
        >
          <h2 className="text-3xl font-semibold text-center">Login</h2>

          <div>
            <label className="block text-lg mb-1">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border focus:outline-none p-2 text-black rounded"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border focus:outline-none rounded p-2 text-black"
              value={formData.password}
              onChange={handleChange}
              name="password"
              required
            />
          </div>

          <button className="bg-[#FFD700] w-full p-2 text-lg font-semibold rounded-[10px]">
            Login
          </button>

          <div className="flex justify-between px-3">
            <div className="text-lg">Don't have an account?</div>
            <div className="text-[#FFD700] font-bold text-lg">
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
