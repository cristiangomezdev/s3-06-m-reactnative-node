import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link, useLocation } from "react-router-native";

const TypeOrder = () => {
  let location = useLocation()
  let isActive = (pathname,route, type) =>{
    if (type) {
      return pathname.includes( route) ? styles.button : styles.null
    }
    return pathname.includes( route) ? styles.textButton : styles.null
  } 
  return (
    <View style={styles.containButton}>
      <Link to='/profile/orders?type=delivered' style={isActive(location.search, 'delivered', true)} underlayColor='rbga(0,0,0,0)'>
        <Text style={isActive(location.search, 'delivered', false)} underlayColor='rbga(0,0,0,0)' >Delivered</Text>
      </Link>
      <Link to='/profile/orders?type=processing' style={isActive(location.search, 'processing', true)} underlayColor='rbga(0,0,0,0)' >
        <Text style={isActive(location.search, 'processing', false)} >Processing</Text>
      </Link>
      <Link to='/profile/orders?type=cancelled' style={isActive(location.search, 'cancelled', true)} underlayColor='rbga(0,0,0,0)' >
        <Text style={isActive(location.search, 'cancelled', false)}>Cancelled</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
    containButton : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        paddingBottom : 10
    },
    button:{
        padding : 7,
        backgroundColor : '#222222',
        borderRadius : 20,
        paddingHorizontal : 20
    },
    textButton:{
        color : 'white',
    },
    null :{

    }
    
});

export default TypeOrder;
