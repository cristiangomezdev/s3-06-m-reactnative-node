import React from "react";
import { Route, Routes, useLocation} from "react-router-native";
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
import ListProducts from "../pages/ListProducts";
import ListBag from "../pages/ListBag";

import OrianaPage from "../devpages/OrianaPage.jsx";
import RichardPage from "../devpages/RichardPage.jsx";
import Nav from "../components/Nav";
import Profile from "../pages/Profile.jsx";
import Orders from "../pages/Orders";
import { StatusBar} from "react-native";
import SubNavHome from "../components/subNavforPage/subNavHome";
import { useSelector } from "react-redux";
import SubNavProducts from "../components/subNavforPage/subNavProducts";


const ScreenHeight = Dimensions.get("window").height;

export default function SecundaryRoutes() {
  let location = useLocation()

  const state = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Search />
      {location.pathname === '/home' && <SubNavHome />}
      {location.pathname === '/ClaudiaPage' && <SubNavProducts />}
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/ClaudiaPage" element={<ListProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/OrianaPage" element={<OrianaPage />} />
        <Route path="/RichardPage" element={<RichardPage />} />
        <Route path="*" element={<Text>Ruta Global</Text>} />
      </Routes>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: ScreenHeight,
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  secundaryContainer: {
    alignItems: "center",
  },
  texto: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    width: 100,
  },
});
