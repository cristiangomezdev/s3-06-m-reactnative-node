import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native'

const Option = ({ text1, text2, ligth, path}) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(path)
    }
    return (
        <TouchableHighlight underlayColor="rgba(155, 155, 155, 0.1)" style={styles.card} onPress={handleClick} > 
            <View>
                <Text style={ ligth ? styles.titleCardLigth : styles.titleCard}>{text1}</Text>
                <Text style={ ligth ? styles.desCardLight : styles.desCard}>{text2}</Text>
                <TouchableHighlight style={styles.arrow} underlayColor="rgba(155, 155, 155, 0.9)" onPress={handleClick}>
                    <AntDesign name="right" size={18} color={!ligth ? '#9B9B9B' : 'rgba(155, 155, 155, 0.4)'} />
                </TouchableHighlight>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card:{
        padding: 20,
        borderBottomColor : 'rgba(155, 155, 155, 0.2)',
        borderBottomWidth : 1
    },
    titleCard:{
        fontFamily : 'taviraj-m',
        fontWeight : '700',
        fontSize: 18,
        color : '#222222',
        letterSpacing : 1,
        paddingBottom : 2
    },
    desCard : {
        fontFamily : 'taviraj-m',
        color : '#9B9B9B',

    },
    titleCardLigth:{
        fontSize : 16,
        fontFamily : 'taviraj',
        color : 'rgba(155, 155, 155, 0.7)',
        fontWeight : 'bold'

    },
    desCardLight:{
        fontFamily : 'taviraj-m',
        color : 'rgba(155, 155, 155, 0.5)',
    },
    arrow:{
        position: 'absolute',
        right : 30,
        top: 7,
        backgroundColor : 'rgba(155, 155, 155, 0.2)',
        padding : 10,
        borderRadius : 100
    },

})

export default Option;
