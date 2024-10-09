import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard";
import AboutUs from "../components/AboutUs";
import AdminLogin from "../components/AdminLogin";
import EditUser from "../components/EditUser";
import ForgetPassword from "../components/ForgetPassword";
import Home from "../components/Home";
import Login from "../components/Login";
import ResetPassword from "../components/ResetPassword";
import Services from "../components/Services";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/edit-user" element={<EditUser />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/services" element={<Services />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-register" element={<UserRegister />} />
    </Routes>
  );
};

export default AppRoutes;
