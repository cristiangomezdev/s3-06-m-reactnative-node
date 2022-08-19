import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-native";

import { StatusBar } from "expo-status-bar";

import RichardPage from "../devpages/RichardPage.jsx";
import SecundaryRoutes from "./secundaryRoutes";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import CrisPage from "../devpages/CrisPage.jsx";
import { useSelector } from "react-redux";
import WelcomeScreen from "../pages/WelcomeScreen.jsx";


export default function AppRoutes() {

  const state = useSelector((state) => state.AuthReducer);

  return (
    <>
      <StatusBar style="black" backgroundColor="#F9F9F9" />
      <Routes>
        <Route path="/" element={ !state.token ? <Login /> : <Navigate to='/home' /> } />
        <Route path="/CrisPage" element={<CrisPage />} />
        <Route path="/signup" element={ !state.token ? <Signup /> : <Navigate to='/home' /> } />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/*" element={<SecundaryRoutes />} />
      </Routes>
    </>
  );
}
