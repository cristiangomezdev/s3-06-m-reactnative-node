import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link, useLocation } from "react-router-native";

const TypeOrder = ({setStatus, setOrders}) => {
  let location = useLocation()
  let isActive = (pathname,route, type) =>{
    if (type) {
      return pathname.includes( route) ? styles.button : styles.null
    }
    return pathname.includes( route) ? styles.textButton : styles.null
  } 
  return (
    <View style={styles.containButton}>
      <Link to='/profile/orders?type=Delivered' style={isActive(location.search, 'Delivered', true)} underlayColor='rbga(0,0,0,0)'>
        <Text style={isActive(location.search, 'Delivered', false)} underlayColor='rbga(0,0,0,0)' >Delivered</Text>
      </Link>
      <Link to='/profile/orders?type=Processing' style={isActive(location.search, 'Processing', true)} underlayColor='rbga(0,0,0,0)' >
        <Text style={isActive(location.search, 'Processing', false)} >Processing</Text>
      </Link>
      <Link to='/profile/orders?type=Cancelled' style={isActive(location.search, 'Cancelled', true)} underlayColor='rbga(0,0,0,0)' >
        <Text style={isActive(location.search, 'Cancelled', false)}>Cancelled</Text>
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
