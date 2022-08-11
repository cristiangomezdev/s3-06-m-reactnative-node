import React from "react";
import { useNavigate } from "react-router-native";
import { StyleSheet, TextInput, Image, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;

export default function Signup() {
  let navigate = useNavigate()
  return (
    <View style={styles.container}  >
      <ScrollView>
        <View>
          <Text style={styles.text} >Sign up</Text>
          <TextInput placeholder='Name' require style={styles.input} />
          <TextInput placeholder='Email' style={styles.input} />
          <TextInput placeholder='Password' style={styles.input} />
        </View>
        <TouchableHighlight onPress={() => navigate('/login')} underlayColor="rgba(0,0,0,0)">
          <Text style={styles.text1}>Already have account?  <Image style={styles.arrow} source={require('../assets/Vector.png')} /> </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.boton}>
          <Text style={styles.botonText}>SIGN UP</Text>
        </TouchableHighlight>
        <Text style={styles.text2}>Or sign up with social account </Text>
        <View style={styles.image}>
          <Image source={require('../assets/iconsgoogle.png')} />
          <Image source={require('../assets/iconofacebook.png')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    width: ScreenWidth,
  },
  boton: {
    width: 480,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    color: 'white',
  },
  botonText: {
    fontSize: 25,
    color: 'white',
  },
  text: {
    color: 'black',
    fontWeight: '#400',
    fontSize: 80,
    fontFamily: 'poppins',
    marginBottom: 80,
    marginTop: 30,
  },
  text1: {
    color: 'black',
    fontWeight: '#400',
    fontSize: 22,
    fontFamily: 'taviraj',
    marginBottom: 40,
    textAlign: "right",
  },
  text2: {
    color: 'black',
    fontWeight: '#400',
    fontSize: 20,
    fontFamily: 'taviraj',
    marginBottom: 40,
    marginTop: 40,
    textAlign: "center",
  },
  input: {
    height: 74,
    backgroundColor: 'white',
    borderColor: 'grey',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 3,
    marginRight: 10,
    marginLeft: 10,
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  arrow: {
    width: 40,
    height: 18,
  }
});