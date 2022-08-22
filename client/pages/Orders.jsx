import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import Card from '../components/orders/card';
import TypeOrder from '../components/orders/TypeOrder';

const Orders = () => {
    let data = [
        {
            order : '1947034',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
        {
            order : '1947035',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
        {
            order : '1947036',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
        {
            order : '1947037',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
        {
            order : '1947038',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
        {
            order : '1947039',
            date : '05-12-2019',
            tracking : 'IW3475453455',
            quantity : '3',
            amount : '1220',
            status : 'Delivered'
        },
    ]
    const renderItem = ({item})=>{
        <Card {...item} />
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titlePage}>My Orders</Text>
            <TypeOrder />
            <ScrollView style={styles.listCard}>
                {data.map((item, i) =>(
                    <Card key={i} {...item} />
                ))}
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        backgroundColor : '#f3f3f3',
        paddingBottom : 80
    },
    titlePage :{
        fontSize : 28,
        fontWeight : '700',
        color : '#222222',
        paddingBottom : 10,
        letterSpacing : 1,
    },
    listCard :{
        marginBottom : 130,
        paddingBottom : 40,
    },
})

export default Orders;
