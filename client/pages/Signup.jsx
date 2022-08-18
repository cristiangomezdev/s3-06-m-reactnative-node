import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { register } from "./../actions/auth";
import { useFonts } from 'expo-font';
import { StyleSheet, TextInput, Image, Text, View, ScrollView, TouchableHighlight, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import Loader from './Loader';

const ScreenWidth = Dimensions.get("window").width;

export default function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const onRegister = () => {
    let user = {
      name: name,
      password: password,
      email: email,
    };
    dispatch(register(user))
      .then((response) => {
        console.log("login" + response.status)
        if (response.status == "success") {
          navigate("/");
        }
      })
      .catch((error) => {
        navigate("/signup");
      });
  };

  let [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'taviraj': require('../assets/fonts/Taviraj-Light.ttf'),
    'taviraj-m': require('../assets/fonts/Taviraj-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return <Loader />;
  }
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text} >Sign up</Text>
            <TextInput value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Name and Lastname'
              required
              style={styles.input} />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              required
              style={styles.input} />
            <TextInput 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder='Password' 
            style={styles.input} 
            required />
          </View>
          <TouchableHighlight onPress={() => navigate('/')} underlayColor="rgba(0,0,0,0)">
            <Text style={styles.text1}>Already have account?  <Image style={styles.arrow} source={require('../assets/Vector.png')} /> </Text>
          </TouchableHighlight>
          <View style={styles.buttonContain}>
            <TouchableHighlight onPress={() => onRegister()} style={styles.boton}>
              <Text style={styles.botonText}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.text2}>Or sign up with social account </Text>
          <View style={styles.image}>
            <Image source={require('../assets/iconsgoogle.png')} />
            <Image source={require('../assets/iconofacebook.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: ScreenWidth,
  },
  boton: {
    width: ScreenWidth - 40,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20,
    color: 'white',
  },
  buttonContain: {
    width: ScreenWidth,
    flex: 1,
    alignItems: 'center'
  },
  botonText: {
    fontSize: 25,
    color: 'white',
  },
  text: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 80,
    fontFamily: 'poppins',
    marginBottom: 80,
    marginTop: 30,
  },
  text1: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 22,
    fontFamily: 'taviraj',
    marginBottom: 40,
    textAlign: "right",
  },
  text2: {
    color: 'black',
    fontWeight: 'normal',
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