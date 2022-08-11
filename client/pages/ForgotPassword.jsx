import React from "react";
import { useNavigate } from "react-router-native";
import { StyleSheet, TouchableHighlight, TextInput, Text, View, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;

export default function ForgotPassword() {
    let navigate = useNavigate()
  
    return (
        <View style={styles.container}  >
            <ScrollView>
                <View>
                    <Text style={styles.text} >Forgot Password</Text>
                    <TextInput placeholder='Email' require style={styles.input} />
                </View>
                <Text style={styles.text1}> Please, enter your email address. You will receive a link to create a new password by email  </Text>
                <TouchableHighlight style={styles.boton}>
                    <Text style={styles.botonText}>SEND</Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=> navigate(-1) } underlayColor="rgba(0,0,0,0)">
                    <Text style={styles.text2}>Go Back </Text>
                </TouchableHighlight>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
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
        marginBottom: 50,
    },
    botonText: {
        fontSize: 25,
        color: 'white',
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
        marginBottom: 60,
    },
    text: {
        color: 'black',
        fontWeight: '#400',
        fontSize: 70,
        fontFamily: 'poppins',
        marginBottom: 80,
        marginTop: 30,
      },
      text1: {
        color: 'black',
        fontWeight: '#400',
        fontSize: 22,
        fontFamily: 'taviraj',
        marginBottom: 60,
        textAlign: "center",
      },
      text2: {
        color: 'black',
        fontWeight: '#400',
        fontSize: 22,
        fontFamily: 'taviraj',
        marginBottom: 60,
        textAlign: "center",
      },
});