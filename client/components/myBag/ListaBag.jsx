import React from "react";
import {View, Text, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native'
import productos from '../../data/productosBag'
import BagItem from './BagItem'
import { useFonts } from "expo-font";
import Loader from "../../pages/Loader";
import ButtonCheckOut from "../ButtonCheckOut";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;


const ListaBag = () => {

    let [fontsLoaded] = useFonts({
        poppins: require("../../assets/fonts/Poppins-Light.ttf"),
        "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        taviraj: require("../../assets/fonts/Taviraj-Light.ttf"),
        "taviraj-m": require("../../assets/fonts/Taviraj-Medium.ttf"),
      });
    
      if (!fontsLoaded) {
        return <Loader />;
      }
      function myFunct(total, element) {
        return total + element.price * element.cantidad
      };
      
    let totalBag = productos.reduce(myFunct, 0)

    return (
      <View style={styles.containView}>  
        <ScrollView style={styles.container}>
          
        <View>
          <Text style={styles.titlePage}>My Bag</Text>
        </View>
        <View>          
          {productos.map((item, i) => (             
              <BagItem {...item}
              key={i}                
              />
         ))}
          <View style={styles.contenedorTotal}>
            <Text style={styles.totalBag}> Total: {totalBag} </Text>
          </View>
          <View>
            <ButtonCheckOut />
          </View>
         </View> 
         </ScrollView>
      </View>
    )
} 



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
    titlePage: {
        marginLeft:20,
        paddingTop: 20,
        fontFamily: "poppins",
        fontSize: 28,
        fontWeight: "700",
        color: "#222222",
        paddingBottom: 5,
        letterSpacing: 1,
    },
    contenedorTotal: {
      width: "100%",
      backgroundColor: "#F9F9F9",
      paddingBottom: 0,
      paddingTop: 5,
      marginBottom: 30,
      alignItems: "center"
    },        
  totalBag: {
      marginLeft:20,
      paddingTop: 20,
      fontFamily: "poppins",
      fontSize: 28,
      fontWeight: "700",
      color: "#222222",
      paddingBottom: 5,
      letterSpacing: 1,
  },
    contenedorLista: {
      marginLeft:15,   
    } 
  });

  export default ListaBag