import React,{useState,useEffect} from "react";
import {Text, View} from 'react-native'
import ListaProductos from "../components/list_Perros/ListaProductos";
import {api} from '../helpers/api'
import Loader from "./Loader";

const ListProducts = () => {

    const [products, setProducts] = useState('');

    useEffect(() => {
        api.getProducts().then((response)=>{
            setProducts(response.resjson.products)
        })
    }, []);

    if (!products) {
        return <Loader />;
      }
    return (
        <View>
            <ListaProductos products={products}  />
        </View>
    )
}

export default ListProducts
