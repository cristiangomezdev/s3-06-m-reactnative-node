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
import ListProducts from "../pages/ListProducts";
import ListBag from "../pages/ListBag";

import OrianaPage from "../devpages/OrianaPage.jsx";
import RichardPage from "../devpages/RichardPage.jsx";
import Nav from "../components/Nav";
import Profile from "../pages/Profile.jsx";
import Orders from "../pages/Orders";

import { StatusBar as barraDeEstado } from "react-native";

const ScreenHeight = Dimensions.get("window").height;

export default function SecundaryRoutes() {
  return (
    <View style={styles.container}>
      <Search />
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/ClaudiaPage" element={<ListProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EzePage/orders" element={<Orders />} />
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
    paddingVertical: barraDeEstado.currentHeight,
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
