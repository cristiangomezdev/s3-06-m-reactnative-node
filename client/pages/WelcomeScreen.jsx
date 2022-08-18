import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  ImageBackground,
  ActivityIndicator,
  Text
} from "react-native";
import { useFonts } from 'expo-font';
import background from "../assets/logos/background_3.png";
import logo from "../assets/logos/logo_2_loading.png";


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function WelcomeScreen() {
    let [fontsLoaded] = useFonts({
        poppins: require("../assets/fonts/Poppins-Light.ttf"),
        "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
        taviraj: require("../assets/fonts/Taviraj-Light.ttf"),
        "taviraj-m": require("../assets/fonts/Taviraj-Medium.ttf"),
      });
    
      if (!fontsLoaded) {
        return <ActivityIndicator style={{top:-150}} size={480} color="#FF729F" />;
      }
  return (
    <View>
      <ImageBackground
        resizeMode="contain"
        source={background}
        style={styles.imagebackground}
      >
        <Image source={logo} style={styles.imagelogo} />
        <ActivityIndicator style={{top:-140}} size={360} color="#FF729F" />
        <Text style={styles.loadingtext}>Loading</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    imagelogo:{
        width:320,height:320,top:200
    },
    imagebackground:{
        width: width, height: height,justifyContent: 'center',
        alignItems: 'center'

    },
    loadingtext:{fontFamily:'poppins-regular',top:-50,fontSize:30}
});
