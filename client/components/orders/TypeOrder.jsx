import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

const TypeOrder = () => {
  return (
    <View style={styles.containButton}>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.textButton}>Delivered</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>Processing</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text>Cancelled</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
    containButton : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        paddingBottom : 10
    },
    button:{
        padding : 7,
        backgroundColor : '#222222',
        borderRadius : 20,
        paddingHorizontal : 20
    },
    textButton:{
        color : 'white',
    }
    
});

export default TypeOrder;
