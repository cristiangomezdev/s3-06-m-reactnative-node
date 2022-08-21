import React, { useState} from "react";
import { useNavigate } from "react-router-native";
import { useFonts } from 'expo-font';
import { StyleSheet, TextInput, Image, Text, View, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import { login } from "./../actions/auth";
import { useDispatch,useSelector } from "react-redux";
import Loader from './Loader';

const ScreenWidth = Dimensions.get("window").width;

export default function Login() {

    let navigate =useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => state.AuthReducer.token); 


    const handleClick = () => {
        navigate('/signup')
    }

    const onLogin = () => {
        let user = {
            username: username,
            password: password,
        };

         dispatch(login(user))
            .then((response) => {
                if (response.status == "success") {
                    navigate("/home");
                }
            })
            .catch((error) => {
               navigate("/");
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
 /*  */
    return (<>
        <View style={styles.container}  >
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
        />
        <ScrollView>
            <View>
                <Text style={styles.text} >Login</Text>
                <TextInput 
                    value={username}
                    onChangeText={setUsername}  
                    placeholder='Email'
                    required
                    style={styles.input} />
                <TextInput 
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry={true}
                    placeholder='Password'
                    required
                    style={styles.input} />
            </View>
            <TouchableHighlight onPress={() => navigate('/forgotpassword')} underlayColor="rgba(0,0,0,0)">
                <Text style={styles.text1}>Forgot your password?  <Image style={styles.arrow} source={require('../assets/Vector.png')} /> </Text>
            </TouchableHighlight>
            <View style={styles.buttonContain} >
                <TouchableHighlight onPress={() => onLogin()} style={styles.boton}>
                    <Text style={styles.botonText}>LOGIN</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={handleClick} underlayColor="rgba(0,0,0,0)">
                <Text style={styles.text2}>Or Sign up with social account </Text>
            </TouchableHighlight>
            <View style={styles.image}>
                <Image source={require('../assets/iconsgoogle.png')} />
                <Image source={require('../assets/iconofacebook.png')} />
            </View>
        </ScrollView>
        </View></>)
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
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
