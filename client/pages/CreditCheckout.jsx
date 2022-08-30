import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { register } from "./../actions/auth";
import Button from '../components/Button'
import { useFonts } from 'expo-font';
import { StyleSheet, TextInput, Image, Text, View, ScrollView, TouchableHighlight, StatusBar } from 'react-native';
import { Dimensions,Alert } from 'react-native';
import Loader from './Loader';


const ScreenWidth = Dimensions.get("window").width;

export default function CreditCheckout() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [date, setDate] = useState();
  const [cvv, setCvv] = useState();
  const dispatch = useDispatch();

  const onSubmit = () => {
    navigate("/success");
    let user = {
      code: code,
      name: name,
      date: date,
      cvv:cvv
    };
   /*  dispatch(register(user))
      .then((response) => {
        if (response.status == "success") {
          Alert.alert("Success",response.message);
          navigate("/home");
        }
        if (response.status == "error") {
          Alert.alert("Error",response.message);
      }
      })
      .catch((error) => {
        navigate("/signup");
      }); */
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
            <Text style={styles.titlePage}>Credit Payment</Text>
         
            <TextInput value={code}
              onChangeText={(text) => setName(text)}
              placeholder='XXXX-XXXXX-XXXXX-XXXXX'
              required
              style={styles.input} />
            <TextInput
              value={name}
              onChangeText={(text) => setEmail(text)}
              placeholder='Name'
              required
              style={styles.input} />
            <View style={styles.inputsmallcontainer}>
                <TextInput 
                value={date}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder='03/15' 
                style={styles.inputsmall} 
                required />
                <TextInput 
                value={cvv}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder='CVV' 
                style={styles.inputsmall} 
                required />
            </View>
            <Image source={require('../assets/credit_baner.png')}  style={styles.creditcard}/>
          </View>

          <View style={styles.buttonContain}>
            <Button text={'Purchase'} onPressHandler={onSubmit}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 40,
    fontFamily: "poppins",
    fontSize: 28,
    fontWeight: "700",
    color: "#222222",
    paddingBottom: 5,
    letterSpacing: 1,
},
creditcard:{
    flex: 1,
    width: ScreenWidth,
    height: 50,
    resizeMode: 'contain',
    marginBottom:30
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
    paddingLeft: 20,
  },
  inputsmallcontainer:{
    flexDirection: 'row', flexWrap: 'wrap' ,justifyContent:'center'
  },
  inputsmall:{
    height: 74,
    width:'44%',
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
    paddingLeft: 20,

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