import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import Card from '../components/orders/card';
import TypeOrder from '../components/orders/TypeOrder';
import Loader from "./Loader";
import { api } from '../helpers/api'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-native';
import NotFound from '../components/orders/NotFound';

const Orders = () => {
    const [Orders, setOrders] = useState([]);
    const [Status, setStatus] = useState(null);
    const state = useSelector(state => state.AuthReducer.user)
    const location = useLocation()
    const navigate = useNavigate()

    const getApi= async() =>{
        let { resjson , status } = await api.getOrdersUser(state._id, location.search)
        if(status === 200 || status === 304){
            setOrders(resjson.order)
            setStatus(status)
        } else{
            setStatus(status)
            setOrders([])
        }

    }
    useEffect(() => {
        if(!location.search){
            navigate('/profile/orders?type=Delivered')
        } else{
            getApi()
        }
        return () => {
            setStatus(null)
            setOrders([])
        };
    }, [location]);

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: "#FFFFFF", paddingHorizontal : 10}} >
                <Text style={styles.titlePage}>My Orders</Text>
                <TypeOrder />
            </View>
            { Status === null &&<View style={{height : '65%'}}><Loader /></View> }
            { Status !== null && Status !== 200 && <NotFound />  }
            {Orders.length > 0 && (
                <ScrollView style={styles.listCard}>
                    {Orders.map((item, i) =>(
                        <Card key={i} {...item} />
                    ))}
                    
                </ScrollView>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
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
        paddingHorizontal : 10
    },
})

export default Orders;
