import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import Loader from "./Loader";
import Option from "../components/profile/Option";
import { LogoutButton } from "../components/LogoutButton";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const Profile = () => {
  let [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    taviraj: require("../assets/fonts/Taviraj-Light.ttf"),
    "taviraj-m": require("../assets/fonts/Taviraj-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  let options = [
    {
      text1: "My orders",
      text2: "Already have 12 orders",
      path: "/profile/orders?type=delivered",
      ligth: false,
    },
    {
      text1: "Shipping addresses",
      text2: "3 ddresses",
      path: "/",
      ligth: true,
    },
    {
      text1: "Payment methods",
      text2: "Visa  **34",
      path: "/",
      ligth: false,
    },
    {
      text1: "Promocodes",
      text2: "You have special promocodes",
      path: "/",
      ligth: true,
    },
    {
      text1: "My reviews",
      text2: "Reviews for 4 items",
      path: "/",
      ligth: true,
    },
    {
      text1: "Settings",
      text2: "Notifications, password",
      path: "/",
      ligth: false,
    },
  ];

  return (
    <View style={styles.containView}>
      <ScrollView style={styles.container}>
        <View style={styles.containAvatar}>
          <Text style={styles.titlePage}>My Profile</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              }}
              style={styles.image}
            />
            <View style={styles.containText}>
              <Text style={styles.userName}>Nombre de Usuario</Text>
              <Text style={styles.userEmail}>example@email.com</Text>
            </View>
          </View>
        </View>
        {options.map((item, i) => (
          <Option
            key={i}
            text1={item.text1}
            text2={item.text2}
            ligth={item.ligth}
            path={item.path}
          />
        ))}
        <LogoutButton />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  containView : {
    paddingBottom : 100,
    height : ScreenHeight,
  },
  container: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    paddingBottom: 0,
    paddingTop: 5,
    marginBottom: 30,
  },
  containAvatar: {
    width: "100%",
    padding: 20,
  },
  titlePage: {
    fontFamily: "poppins",
    fontSize: 28,
    fontWeight: "700",
    color: "#222222",
    paddingBottom: 20,
    letterSpacing: 1,
  },
  boton: {
    width: ScreenWidth - 50,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    borderRadius: 20,
    color: "white",
    margin: "auto",
  },
  botonText: {
    fontSize: 25,
    color: "white",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 300,
  },
  containText: {
    paddingLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontFamily: "poppins",
    fontWeight: "600",
  },
  userEmail: {
    fontSize: 14,
    fontFamily: "taviraj",
    fontWeight: "300",
    color: "gray",
  },
});

export default Profile;
