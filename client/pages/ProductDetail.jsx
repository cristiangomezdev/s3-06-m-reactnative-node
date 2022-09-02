import React,{useState,useEffect} from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import { ImageCarousel } from "../components/ImageCarousel";
import { useFonts } from 'expo-font';
import Loader from '../pages/Loader';
import Button from "../components/Button";
import { useSelector,useDispatch } from "react-redux";
import { types } from "../types/types";
import { add } from "../actions/cart";
import { useNavigate ,useLocation,useParams} from "react-router-native";
import productosDetail from "../data/productosDetail";
import { api } from "../helpers/api";


const { width } = Dimensions.get("window");
const ScreenHeight = Dimensions.get("window").height;

const images = [
 /*  {
    description: "Comida",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 1,
  },
  {
    description: "Accesorios",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 2,
  },
  {
    description: "Juguetes",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 3,
  },
  {
    description: "Alimentos",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 4,
  }, */
];

export default function ProductDetail() {
  const [product, setProduct] = useState('');
  let params = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    taviraj: require("../assets/fonts/Taviraj-Light.ttf"),
    "taviraj-m": require("../assets/fonts/Taviraj-Medium.ttf"),
  });


   useEffect(() => {
      api.getProduct(params.id).then((response)=>{
          setProduct(response.resjson.product)
      })
  }, []);

  if (!fontsLoaded || !product) {
    return <Loader />;
  }
 
  const onPressHandler = () => {
    dispatch(add(product));
    Alert.alert('Added','your product is now in your bag')
    navigate('/bag')
  };

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
         <ImageCarousel images={product.images} id={product._id}/> 
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.exced} numberOfLines={1}>{product.name}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
          </View>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subprice}>{product.name}</Text>
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.content}>
             {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonSticky}>
         <Button text={'Add to bag'} onPressHandler={onPressHandler} /> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: ScreenHeight,
    backgroundColor: "#f3f3f3",
  },
  container: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    minHeight: ScreenHeight / 2.4 - 70,
  },
  containerTitle: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000",
  },
  exced:{
    fontFamily: "poppins",
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 0,
    letterSpacing : 1,
    width:180,
    flexWrap: 'wrap'
  },
  containerSubtitle: {
    fontWeight:'1000'
  },
  containerContent: {
    justifyContent: "center",
  },
  content: {
    fontFamily: "taviraj",
    fontWeight: "700",
    lineHeight:20,
    fontSize: 14,
    color:'grey',
    
  },
  containerButton: {
    alignItems: "center",
  },
  buttonSticky: {
    height: 80,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    color: "#FFFF",
  },
  price: {
    fontFamily: "poppins",
    color: "#000",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 0,
  },
  subprice: { 
    fontFamily: "taviraj-m",
     color: "#aaa",
     letterSpacing : 0.1,
     fontWeight: "700",
      fontSize: 14,
       top: -8,
      marginBottom:15 }
});
