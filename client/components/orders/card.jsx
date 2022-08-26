import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { formatDate } from '../../helpers/parseDate'
import { Link } from 'react-router-native'
const Card = ({NumberOrder, date, totalPrice, products, amount, status, _id}) => {
  const handleClick = ()=>{

  }
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.data}>
        <Text style={styles.nOrder}>{`Order Nº  ${NumberOrder}`}</Text>
        <Text style={styles.dateOrder}>{formatDate(date)}</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.dateOrder}>
          Quantity: <Text style={styles.bold}>{products.length}</Text>
        </Text>
        <Text style={styles.dateOrder}>
          Total Amount: <Text style={styles.bold}>${totalPrice}</Text>
        </Text>
      </View>
      <View style={styles.data}>
        <Link to={`/profile/orders/detail/${_id}`} style={styles.buttonOrder} underlayColor='rgba(170,170,170,0.1)'>
          <Text>Details</Text>
        </Link>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card :{
        borderColor : 'rgba(150,150,150,0.5)',
        borderStyle : 'solid',
        borderWidth : 1,
        borderRadius : 10,
        margin : 10,
        padding : 15,
        marginBottom : 30,
        backgroundColor : '#ffffff' 
    },
    data :{
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 10,
        justifyContent : 'space-between'
    },
    nOrder:{
        fontWeight : '500',
        fontSize : 18
    },
    dateOrder:{
        color : '#9B9B9B',
    },
    buttonOrder:{
        borderColor : '#222222',
        borderWidth : 1,
        borderRadius : 50,
        paddingVertical : 10,
        paddingHorizontal : 30
    },
    status:{
        color : '#2AA952'
    },
    bold : {
        fontWeight : '700',
        color : 'black'
    },
    shadowProp: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
});

export default Card;
