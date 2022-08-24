import React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { ImageCarousel } from "../components/ImageCarousel";
import { useFonts } from 'expo-font';
import Loader from '../pages/Loader';
import Button from "../components/Button";

const { width } = Dimensions.get("window");
const ScreenHeight = Dimensions.get("window").height;

const images = [
  {
    description: "Comida",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 1,
  },
  {
    description: "Accesorios",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 2,
  },
  {
    description: "Juguetes",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 3,
  },
  {
    description: "Alimentos",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 4,
  },
];

export default function ProductDetail() {
  let [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    taviraj: require("../assets/fonts/Taviraj-Light.ttf"),
    "taviraj-m": require("../assets/fonts/Taviraj-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }
  const onPressHandler = () => {};

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
         <ImageCarousel images={images}/> 
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate culpa officia mollitia facere illum reiciendis error
              explicabo, rem, eos ut ipsam eveniet quisquam odit aut officiis
              quod, asperiores ipsa alias. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Cupiditate culpa officia mollitia
              facere illum reiciendis error explicabo, rem, eos ut ipsam eveniet
              quisquam odit aut officiis quod, asperiores ipsa alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate culpa officia mollitia facere illum reiciendis error
              explicabo, rem, eos ut ipsam eveniet quisquam odit aut officiis
              quod, asperiores ipsa alias. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Cupiditate culpa officia mollitia
              facere illum reiciendis error explicabo, rem, eos ut ipsam eveniet
              quisquam odit aut officiis quod, asperiores ipsa alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate culpa officia mollitia facere illum reiciendis error
              explicabo, rem, eos ut ipsam eveniet quisquam odit aut officiis
              quod, asperiores ipsa alias. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Cupiditate culpa officia mollitia
              facere illum reiciendis error explicabo, rem, eos ut ipsam eveniet
              quisquam odit aut officiis quod, asperiores ipsa alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSticky}>
         <Button text={'Add to bag'} /> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: ScreenHeight,
    backgroundColor: "#f3f3f3",
  },
  container: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    minHeight: ScreenHeight / 2.4 - 70,
  },
  containerTitle: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000",
  },
  containerSubtitle: {
    fontWeight:'1000'
  },
  containerContent: {
    justifyContent: "center",
  },
  content: {
    fontFamily: "taviraj-m",
    fontSize: 12
  },
  containerButton: {
    alignItems: "center",
  },
  buttonSticky: {
    height: 80,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    color: "#FFFF",
  },
  price: {
    fontFamily: "poppins-regular",
    color: "#000",
    fontSize: 24,
    marginBottom: 0,
  },
  subprice: { 
    fontFamily: "taviraj-m",
     color: "#aaa",
      fontSize: 14,
       top: -8 }
});
