import React,{useState,useEffect} from "react";
import {Text, View} from 'react-native'
import { useLocation } from "react-router-native";
import ListaProductos from "../components/list_Perros/ListaProductos";
import {api} from '../helpers/api'
import Loader from "./Loader";

const ListProducts = () => {

    const [products, setProducts] = useState('');
    const {search} = useLocation();
    const subcategory =  new URLSearchParams(search).get('subcategoriesId');

     useEffect(() => {
        api.getProducts(subcategory).then((response)=>{
            setProducts(response.resjson.products)
        })
    }, [search]); 

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
