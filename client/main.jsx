import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Route, Routes, Link } from "react-router-native";

import Homepage from "./pages/homepage";
import Search from "./components/Search.jsx";

import ClaudiaPage from "./devpages/ClaudiaPage.jsx";
import CrisPage from "./devpages/CrisPage.jsx";
import EzePage from "./devpages/EzePage.jsx";
import OrianaPage from "./devpages/OrianaPage.jsx";
import RichardPage from "./devpages/RichardPage.jsx";
import DevNavigator from "./devpages/DevNavigator";

const ScreenHeight = Dimensions.get("window").height;
export const Main = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar style="auto" />
        <View style={styles.secundaryContainer}>
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
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    height: ScreenHeight,
    flex: 1,
  },
  secundaryContainer: {
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  texto: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    width: 100,
  },
  width200: {
    width: 200,
  },
});
