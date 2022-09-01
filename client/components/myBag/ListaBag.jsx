import { useFonts } from "expo-font";
import Loader from "../../pages/Loader";
import ButtonCheckOut from "../ButtonCheckOut";


import {View, Text, FlatList, StyleSheet, ScrollView, Dimensions,Alert} from 'react-native'
import productos from '../../data/productosBag'
import {useSelector} from 'react-redux';
import BagItem from './BagItem'
import {getTotal,getProducts} from '../../reducer/cartReducer'
import SubNavProducts from "../subNavforPage/subNavProducts";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;


const ListaBag = () => {
    const products = useSelector((state) => state.CartReducer);
    const totalCart = useSelector((state) => getTotal(state.CartReducer))
  
    let [fontsLoaded] = useFonts({
        poppins: require("../../assets/fonts/Poppins-Light.ttf"),
        "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        taviraj: require("../../assets/fonts/Taviraj-Light.ttf"),
        "taviraj-m": require("../../assets/fonts/Taviraj-Medium.ttf"),
      });
    
      if (!fontsLoaded) {
        return <Loader />;
      }
      function myFunct(total, element) {
        return total + element.price * element.cantidad
      };
      
    let totalBag = productos.reduce(myFunct, 0)

    return (
      <View style={styles.containView}>  
        <ScrollView style={styles.container}>
        <SubNavProducts />
          
        <View>
          <Text style={styles.titlePage}>My Bag</Text>
        </View>
        <View>          
          {products.cart !== "" ? products.cart.map((item, i) => (<BagItem {...item} key={i}/>)) : null}
          <View style={styles.contenedorTotal}>
            <Text style={styles.totalBag}> Total: ${totalCart} </Text>
          </View>
          <View>
            <ButtonCheckOut />
          </View>
         </View> 
         </ScrollView>
      </View>
    )
} 



const styles = StyleSheet.create({

    containView : {
        paddingBottom : 100,
        height : ScreenHeight,
      },
    container: {
        width: "100%",
        backgroundColor: "#F9F9F9",
        paddingBottom: 0,
        paddingTop: 5,
        marginBottom: 30,
      },        
    titlePage: {
        marginLeft:20,
        paddingTop: 20,
        fontFamily: "poppins",
        fontSize: 28,
        fontWeight: "700",
        color: "#222222",
        paddingBottom: 5,
        letterSpacing: 1,
    },
    contenedorTotal: {
      width: "100%",
      backgroundColor: "#F9F9F9",
      paddingBottom: 0,
      paddingTop: 5,
      marginBottom: 30,
      alignItems: "center"
    },        
  totalBag: {
      marginLeft:20,
      paddingTop: 20,
      fontFamily: "poppins",
      fontSize: 28,
      fontWeight: "700",
      color: "#222222",
      paddingBottom: 5,
      letterSpacing: 1,
  },
    contenedorLista: {
      marginLeft:15,   
    } 
  });

  export default ListaBag
