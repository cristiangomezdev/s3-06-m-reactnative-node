import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import { useFonts } from 'expo-font';
import Loader from './Loader';


const Profile = () => {
    let [fontsLoaded] = useFonts({
        'poppins': require('../assets/fonts/Poppins-Medium.ttf'),
      });

      if (!fontsLoaded) {
        return <Loader />;
      }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titlePage} >My Profile</Text>
                <View>
                    <Image source={{uri : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}} 
                    style={{width:30, height: 30}}
                    />
                    <View>
                        <Text>Nombre de Usuario</Text>
                        <Text>email</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop : 20
    },
    titlePage :{
        fontFamily : 'poppins',
        fontSize : 34,
        color : '#222222'
    }
})

export default Profile;
