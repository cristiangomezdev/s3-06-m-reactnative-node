
import React from "react"
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native"

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const ImageWidth = Math.floor(ScreenWidth * 0.3)
const ContenedorHeight = Math.floor(ScreenWidth * 0.5)


const ProductoItem = (props) => (
        <View key= {props.id} style={Styles.contenedor}>
            <View style={Styles.contenedorImagen}>
                <Image source={props.image} style={Styles.image} />
            </View>
            <View style={Styles.contenedorProducto}>
                <Text style={Styles.name}>{props.name}</Text>
                <Text style={Styles.brand}>{props.brand}</Text>
                <Text style={Styles.size}>{props.size}</Text>
                <Text style={Styles.price}>{props.price}</Text>
            </View>
        </View>
    )


const Styles = {
    contenedor: {flex: 1, flexDirection: 'row', backgroundColor : 'rgb(255,255,255)', borderRadius : 10, 
                justifyContent : 'center', marginLeft : 10, marginRight : 10, marginTop:5, height: ContenedorHeight},
    contenedorImagen: {padding: 0, alignContent: 'flex-start', justifyContent : 'center', height: ContenedorHeight, borderRadius : 10},
    contenedorProducto: {flex:1, flexDirection: 'column', padding: 5, marginTop: 2},
    image: {width: ImageWidth, height: ContenedorHeight, resizeMode: 'cover', borderRadius : 10},
    name: {color: '#222222', fontWeight: "bold", fontSize: 16, padding: 5},
    brand: {color: '#9B9B9B', fontSize: 11, padding: 5},
    size: {color: '#9B9B9B', fontSize: 11, padding: 5},
    price: {color: '#222222', fontWeight: "bold", fontSize: 14, padding: 5}
}
    

export default ProductoItem