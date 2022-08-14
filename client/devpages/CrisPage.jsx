import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { ImageCarousel } from "../components/ImageCarousel";
import { useFonts } from 'expo-font';
import Loader from '../pages/Loader';
import { StatusBar } from "expo-status-bar";
import { StatusBar as barraDeEstado } from "react-native";
import Button from "../components/Button";
import Top from "../components/Top";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';


const { width } = Dimensions.get("window");
const ScreenHeight = Dimensions.get("window").height;

export default function CrisPage () {
  let [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'taviraj' : require('../assets/fonts/Taviraj-Light.ttf'),
    'taviraj-m' : require('../assets/fonts/Taviraj-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }
  const onPressHandler = () => {};
console.log(ScreenHeight);
  return (
    <>
        

    <ScrollView style={styles.scrollContainer}>
    <Top />
      <ImageCarousel />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.price}>Pedrige</Text>
          <Text style={styles.price}>U$S 50.99</Text>
        </View>

        <View style={styles.containerSubtitle}>
          <Text style={styles.subprice}>Comida balanceada 8kg</Text>
        </View>

        <View style={styles.containerContent}>
          <Text style={styles.content}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate culpa officia mollitia facere illum reiciendis error explicabo, rem, eos ut ipsam eveniet quisquam odit aut officiis quod, asperiores ipsa alias.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate culpa officia mollitia facere illum reiciendis error explicabo, rem, eos ut ipsam eveniet quisquam odit aut officiis quod, asperiores ipsa alias.
          </Text>
        </View>

        </View>

    </ScrollView>
    <Ionicons style={{textAlign:'center',backgroundColor:'#f3f3f3'}} name={'arrow-down-circle'} color={'#56CBF9'} size={35}/>
    {

    }
    
    <View style={styles.buttonSticky}>
    <Button />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer:{
    height:ScreenHeight,
    backgroundColor:'#000',
  }
  ,
  container: {
    padding:20,
    backgroundColor:'#f3f3f3',
    minHeight:(ScreenHeight / 2) - 70,  
  },
  containerTitle: {
    flex: 0,
    padding:0,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000",
  },
  containerContent:{
    flex:0,
    justifyContent:'center'
  },
  containerButton: {
    flex: 0,
    alignItems: "center",
  },
  buttonSticky:{
    height:90,
    justifyContent:'center',
    backgroundColor:'red'
  },
  text: {
    color: "#FFFF",
  },
  price: {    fontFamily : 'poppins-regular', color: "#000", fontSize: 24,marginBottom:0 },
  subprice: {fontFamily : 'taviraj-m', color: "#aaa", fontSize: 14 ,top:-8},
  content:{fontFamily : 'taviraj-m',fontSize: 12,marginTop:20,marginBottom:20},
  buttonText:{
    color: "#fff",
    fontSize: 20,
    margin: 10,
    fontFamily : 'poppins',
  }
});