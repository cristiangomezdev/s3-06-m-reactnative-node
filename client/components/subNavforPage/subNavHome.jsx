import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';
import { Link, useLocation } from 'react-router-native';

const ScreenWidth = Dimensions.get("window").width;

const SubNavHome = () => {
    let location = useLocation()
    let isActive = (search) =>{
        let styleSelected = [styles.buttonCategorie]
        if (location.search === search) {
            styleSelected.push(styles.selectedButton)
        }
        return [styleSelected]
    }
    let isActiveText = (search) =>{
        let styleSelected = [styles.textButton]
        if (location.search === search) {
            styleSelected.push(styles.selectedText)
        }
        return [styleSelected]
    }
    return (
        <View style={styles.container}>
            <Link to='/home?cate=dog' style={isActive('?cate=dog')} underlayColor="rgba(0,0,0,0)" ><Text style={isActiveText('?cate=dog')}>Perros</Text></Link>
            <Link to='/home?cate=cat' style={isActive('?cate=cat')} underlayColor="rgba(0,0,0,0)" ><Text style={isActiveText('?cate=cat')}>Gatos</Text></Link>
            <Link to='/home?cate=otros' style={isActive('?cate=otros')} underlayColor="rgba(0,0,0,0)"><Text style={isActiveText('?cate=otros')}>Otros</Text></Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor : '#FFFFFF',
        flexDirection : 'row',
        width : '100%'
    },
    buttonCategorie:{
        width : ScreenWidth / 3,
        paddingVertical : 10
    },
    textButton : {
        textAlign : 'center',
        fontSize : 16,
        letterSpacing : 1
    },
    selectedButton : {
        borderBottomColor : '#56CBF9',
        borderBottomWidth : 5,
    },
    selectedText :{
        fontSize : 16,
        fontWeight : 'bold'
    }
})

export default SubNavHome;
