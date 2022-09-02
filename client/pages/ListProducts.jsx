import React,{useState,useEffect} from "react";
import {Text, View} from 'react-native'
import { useLocation } from "react-router-native";
import ListaProductos from "../components/list_Perros/ListaProductos";
import {api} from '../helpers/api'
import Loader from "./Loader";
import SubNavProducts from "../components/subNavforPage/subNavProducts";     
const ListProducts = () => {

    const [products, setProducts] = useState('');
    const location = useLocation();
    const subcategory =  new URLSearchParams(location.search).get('subcategoriesId');

     useEffect(() => {
        api.getProducts(subcategory).then((response)=>{
            setProducts(response.resjson.products)
        })
    }, [location.key]); 

    if (!products) {
        return <Loader />;
      }
    return (
        <View>
            <SubNavProducts />
            <ListaProductos products={products}  />
        </View>
    )
}

export default ListProducts
