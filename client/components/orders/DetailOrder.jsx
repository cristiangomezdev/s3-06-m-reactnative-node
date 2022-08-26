import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { useParams } from 'react-router-native';
import { api } from '../../helpers/api';
import BagItem from '../myBag/BagItem';
import { formatDate, parseTargetCredit } from '../../helpers/FunctionVarious'
import Loader from '../../pages/Loader';

const DetailOrder = () => {
    let params = useParams()
    const [Data, setData] = useState();
    const [status, setStatus] = useState();
    const getApi = async ()=>{
        let {resjson, status} = await api.getOneOrder(params.id)
        if (status === 200 ) {
            setStatus(status)
            setData(resjson.order)
        }
    }
    useEffect(() => {
        getApi()
        return ()=>{

        }
    }, []);

    if (!Data) {
        return <Loader />
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerScroll} >
                <View style={styles.datePrimary}>
                    <Text style={styles.titleBold}>Nº Order: {Data.NumberOrder}</Text>
                    <Text style={styles.textLight}>{formatDate(Data.date)}</Text>
                </View>
                <View style={styles.datePrimary}>
                    <Text>Cantidad de Productos:  {Data.products.length}</Text>
                    <Text style={styles.status} >{Data.status}</Text>
                </View>
                <View>
                    {Data.products.map((p, i)=>(
                        <BagItem key={i} {...p} detailOrder={true}/>
                    ))}
                </View>
                <Text style={styles.secondSectionTitle}>Información de la Orden</Text>
                <View style={styles.dataInfo}>
                    <Text style={[styles.textLight, styles.subtitleOrder]} >Dirección de envío:   </Text>
                    <Text style={styles.data}>{Data.shippingAddress}</Text>
                </View>
                <View style={styles.dataInfo}>
                    <Text style={[styles.textLight, styles.subtitleOrder]}>Metodo de pago:   </Text>
                    <Text style={styles.data}>{parseTargetCredit(Data.paymentMethod)}</Text>
                </View>
                <View style={styles.dataInfo}>
                    <Text style={[styles.textLight, styles.subtitleOrder]}>Metodo de envío:   </Text>
                    <Text style={styles.data}>{Data.methodDelivered}</Text>
                </View>
                <View style={[styles.dataInfo, styles.lastItem]}>
                    <Text style={[styles.textLight, styles.subtitleOrder]}>Total:   </Text>
                    <Text style={styles.data}>${Data.totalPrice}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingBottom : 100
    },
    containerScroll :{
        paddingHorizontal : 10,
        marginBottom : 15
    },
    datePrimary : {
        paddingVertical : 10,
        paddingHorizontal : 10,
        flex :1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    titleBold:{
        fontWeight : '700',
        fontSize : 19
    },
    textLight : {
        color : '#9B9B9B'
    },
    status:{
        color : '#2AA952',
        fontWeight : '600',
        letterSpacing : 1
    },
    secondSectionTitle:{
        marginTop : 30,
        marginBottom : 20,
        paddingHorizontal : 10,
        fontSize : 16,
        fontWeight : '500'
    },
    dataInfo:{
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        width : '100%',
        paddingBottom : 10,
        fontSize : 18
    },
    data:{
        flexGrow : 0.6,
        maxWidth : '60%',
        fontSize : 15
    },
    subtitleOrder:{
        fontSize : 15,
        minWidth : '40%'
    },
    lastItem : {
        marginBottom : 30
    }
})

export default DetailOrder;
