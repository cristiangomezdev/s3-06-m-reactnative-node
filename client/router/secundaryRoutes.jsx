import React from "react";
import { Route, Routes, useLocation } from "react-router-native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Homepage from "../pages/homepage";
import Search from "../components/Search.jsx";
import ListProducts from "../pages/ListProducts";
import Success from '../pages/Success';
import Nav from "../components/Nav";
import Profile from "../pages/Profile.jsx";
import Orders from "../pages/Orders";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import ProductDetail from "../pages/ProductDetail";
import ClientBag from "../pages/ClientBag";
import CreditCheckout from "../pages/CreditCheckout";
import DetailOrder from "../components/orders/DetailOrder";

const ScreenHeight = Dimensions.get("window").height;

export default function SecundaryRoutes() {
  let location = useLocation();

  const state = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Search />

      {/* {location.pathname === "/products" && <SubNavProducts />}
      {location.pathname === "/bag" && <SubNavProducts />} */}
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/bag" element={<ClientBag />} />
        <Route path="/products" element={<ListProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/products/idInventado" element={<ProductDetail />} />
        <Route path="/credit" element={<CreditCheckout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile/orders/detail/:id" element={<DetailOrder />} />

        <Route path="*" element={<Text>Ruta Global</Text>} />
      </Routes>

        { ((!location.pathname.includes('/products/')) && (!location.pathname.includes('/credit')) && (!location.pathname.includes('/success'))) ? <Nav /> : null}  
      
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
