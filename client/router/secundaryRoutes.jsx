import React from "react";
import { Route, Routes } from "react-router-native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import Homepage from "../pages/homepage";
import Search from "../components/Search.jsx";
import ClaudiaPage from "../devpages/ClaudiaPage.jsx";
import CrisPage from "../devpages/CrisPage.jsx";
import EzePage from "../devpages/EzePage.jsx";
import OrianaPage from "../devpages/OrianaPage.jsx";
import RichardPage from "../devpages/RichardPage.jsx";
import DevNavigator from "../devpages/DevNavigator";

export default function SecundaryRoutes() {
  return (
    <ScrollView>
      <Search />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/ClaudiaPage" element={<ClaudiaPage />} />
        <Route path="/CrisPage" element={<CrisPage />} />
        <Route path="/EzePage" element={<EzePage />} />
        <Route path="/OrianaPage" element={<OrianaPage />} />
        <Route path="/RichardPage" element={<RichardPage />} />
        <Route path="*" element={<Text>Ruta Global</Text>} />
      </Routes>
      <DevNavigator />
    </ScrollView>
  );
}
