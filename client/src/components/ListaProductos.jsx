import React from "react";
import {View, Text, FlatList} from 'react-native'
import productos from '../data/productos'
import ProductoItem from './ProductoItem'

const ListaProductos = () => {
    return (
        <FlatList
            data= {productos}
            style= {{backgroundColor: 'E5E5E5', margin: 5}}
            renderItem= {({item: producto}) => (
                <ProductoItem {...producto} />
            )}
        />
    )
} 

export default ListaProductos







