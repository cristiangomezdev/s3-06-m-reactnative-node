import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const NotFound = () => {
    return (
        <View style={styles.container}>
            <Text>No se pudo encontrar Ordenes de compra</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height : '30%',
        // flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default NotFound;
