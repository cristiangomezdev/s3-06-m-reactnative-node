import React from "react";
import { useNavigate } from "react-router-native";
import { useFonts } from 'expo-font';
import { StyleSheet, TouchableHighlight, Image, Text, View, ScrollView, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import Loader from './Loader';

const ScreenWidth = Dimensions.get("window").width;
const { width } = Dimensions.get("window");

export default function Success() {
    let navigate = useNavigate();
    let [fontsLoaded] = useFonts({
        'poppins': require('../assets/fonts/Poppins-Light.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'taviraj' : require('../assets/fonts/Taviraj-Light.ttf'),
        'taviraj-m' : require('../assets/fonts/Taviraj-Medium.ttf'),
      });
      if (!fontsLoaded) {
        return <Loader />;
      }

    return (
        <View style={styles.container}  >
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <ScrollView>
                <Image source={require('../assets/bags.png')} style={styles.image} />  
                <Text style={styles.text}> Success!  </Text>
                <Text style={styles.text1}> Your order will be delivered soon. Thank you for choosing our app!  </Text>
                <View style={styles.buttonContain} >
                    <TouchableHighlight style={styles.boton} onPress={() => navigate(-1)}>
                        <Text style={styles.botonText}>CONTINUE SHOPPING</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: ScreenWidth,

    },
    buttonContain: {
        flex: 0,
        alignItems: "center",
    },
    boton: {
        width: ScreenWidth - 50,
        backgroundColor: "#56CBF9",
        width:  width - 40,
        height: 50,
        alignItems: "center",
        borderRadius: 30,
    },
    botonText: {
        color: "#fff",
        fontSize: 20,
        margin: 10,
        fontFamily : 'poppins',
    },
    
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 50,
        fontFamily: 'poppins',
        marginBottom: 80,
        marginTop: 30,
        textAlign: "center",
    },
    text1: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 22,
        fontFamily: 'taviraj',
        marginBottom: 60,
        textAlign: "center",
    },
    image:{
      marginTop: 200,
      marginLeft:130,
      marginBottom: 40,
    }
});