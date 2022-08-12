import React from "react";
import { useNavigate } from "react-router-native";
import { StyleSheet, TouchableHighlight, Image, Text, View, ScrollView, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;

export default function Success() {
    let navigate = useNavigate()

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
        width: ScreenWidth,
        flex: 1,
        alignItems: 'center'
    },
    boton: {
        width: ScreenWidth - 50,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 20,
        color: 'white',
        margin: 'auto'
    },
    botonText: {
        fontSize: 25,
        color: 'white',
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
      marginLeft:150,
      marginBottom: 40,
    }
});