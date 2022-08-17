import React from "react";
import { Text, View, ScrollView, StyleSheet,Dimensions } from "react-native";
import { Link,useLocation } from "react-router-native";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get("window");
const {height} = Dimensions.get("window");

export default function Nav() {
  let color = 'gray';
  let color2 ='blue';
  let size = 30;
  let location = useLocation();
  let isActive = (pathname,route) =>{
/*     if(pathname === route){
      return 'blue'
    } else { return 'gray'} */

   return pathname === route ? '#56CBF9' : 'gray'

  } 
  
  return (
    <View style={styles.footer}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.contentContainer}>

          <Link style={styles.link} to="/home" underlayColor="rgba(0,0,0,0)">
            <Ionicons name={'home'} color={color} size={size}/>
          </Link>
          <Link style={styles.link} to="/ClaudiaPage" underlayColor="rgba(0,0,0,0)">
            <Ionicons name={'cart'} color={isActive(location.pathname,'/ClaudiaPage')} size={size}/>
          </Link>
          <Link style={styles.link} to="/CrisPage" underlayColor="rgba(0,0,0,0)">
            <Ionicons name={'shopping'}  color={isActive(location.pathname,'/CrisPage')} size={size}/>
          </Link>
          <Link style={styles.link} to="/EzePage" underlayColor="rgba(0,0,0,0)">
            <Ionicons name={'heart'} color={isActive(location.pathname,'/EzePage')} size={size}/>
          </Link>

          <Link style={styles.link} to="/profile" underlayColor="rgba(0,0,0,0)">
            <Ionicons name={'account'} color={color} size={size}/>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    flex:1,
    alignItems: "center"
  },
  footer: {
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f3f3f3'
  },
  contentContainer: {
    flexDirection: "row",
    width:width,
    height: 80,
    justifyContent:'center',
    alignItems: "center",
    backgroundColor:'#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  redirectTo: {
    backgroundColor: "#C20FE1",
    padding: 10,
    width: 100,
    textAlign: "center",
    borderRadius: 4,
    marginBottom: 10,
    color: "#ffffff",
    fontWeight: "500",
  },
});
