import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-native";

import { StatusBar } from "expo-status-bar";

import SecundaryRoutes from "./secundaryRoutes";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";

import ListBag from "../pages/ListBag";
import { useSelector } from "react-redux";
import WelcomeScreen from "../pages/WelcomeScreen.jsx";
import ProductDetail from "../pages/ProductDetail";

export default function AppRoutes() {

  const state = useSelector((state) => state.AuthReducer);

  return (
    <>
      <StatusBar style="black" backgroundColor="#F9F9F9" />
      <Routes>
        <Route path="/" element={ !state.token ? <Login /> : <Navigate to='/home' /> } />
        <Route path="/products/idInventado" element={<ProductDetail />} />
        <Route path="/ListBag" element={<ListBag />} />
        <Route path="/signup" element={ !state.token ? <Signup /> : <Navigate to='/home?cate=dog' /> } />
        {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
        <Route path="/*" element={<SecundaryRoutes />} />
      </Routes>
    </>
  );
}
