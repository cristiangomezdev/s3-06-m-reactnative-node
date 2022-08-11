import React from "react";
import { Route, Routes, Link } from "react-router-native";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";

import RichardPage from "../devpages/RichardPage.jsx";
import SecundaryRoutes from "./secundaryRoutes";
const ScreenHeight = Dimensions.get("window").height;
export default function AppRoutes() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes>
        <Route path="/sisisi" element={<RichardPage />} />
        <Route path="/*" element={<SecundaryRoutes />} />
      </Routes>
    </>
  );
}
