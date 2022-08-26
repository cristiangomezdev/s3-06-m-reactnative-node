import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { useParams } from 'react-router-native';
import BagItem from '../myBag/BagItem';

const DetailOrder = () => {
    let params = useParams()
    return (
        <View>
            <ScrollView style={styles.container} >
                <View>
                    <Text>Nº Order</Text>
                    <Text>Date</Text>
                </View>
                <View>
                    <Text>Status</Text>
                    <Text>Quantity Items</Text>
                </View>
                <View>
                    <BagItem/>
                </View>
                <Text>Order Information</Text>
                <View>
                    <Text>shippingAddress</Text>
                    <Text></Text>
                </View>
                <View>
                    <Text>paymentMethod</Text>
                    <Text></Text>
                </View>
                <View>
                    <Text>delivery method</Text>
                    <Text></Text>
                </View>
                <View>
                    <Text>total price</Text>
                    <Text></Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        paddingHorizontal : 10,
        paddingVertical : 20
    }
})

export default DetailOrder;
