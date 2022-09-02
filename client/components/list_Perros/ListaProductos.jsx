import React from "react";
import {View, Text, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native'
import productos from '../../data/productos'
import ProductoItem from './ProductoItem'
import { useFonts } from "expo-font";
import {useParams,useLocation} from 'react-router-native';
import {useState,useEffect} from "react";
import {api} from '../../helpers/api'
import Loader from "../../pages/Loader";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const ListaProductos = ({products}) => {
  const categoryId = products [0].categoriesId
  const subCategoryId = products [0].subCategoriesId

  const [subcategoryname, setSubcategoryname] = useState('');

   useEffect(() => {
      api.getCategory(categoryId).then((response)=>{
          const subCategorias = response.resjson.categorie.subCategories
          const subCategoria = subCategorias.filter(obj=> {return obj._id === subCategoryId})
          setSubcategoryname(subCategoria[0].name)
      })
  }); 


    let [fontsLoaded] = useFonts({
        poppins: require("../../assets/fonts/Poppins-Light.ttf"),
        "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        taviraj: require("../../assets/fonts/Taviraj-Light.ttf"),
        "taviraj-m": require("../../assets/fonts/Taviraj-Medium.ttf"),
      });

      if (!fontsLoaded) {
        return <Loader />;
      }
    return (
      <View style={styles.containView}>  
        <ScrollView style={styles.container}>
   

          <View>
            <Text style={styles.titlePage}>{subcategoryname}</Text>
          </View>

          <View>       
            {products.map((item, i) => (             
              <ProductoItem {...item}
              key={i}                
              />
            ))}
          </View>  
         </ScrollView>
        </View>
    )
} 

const styles = StyleSheet.create({

  containView : {
    paddingBottom : 110,
    height : ScreenHeight,
  },
  container: {
    width: "100%",
    backgroundColor: "#F3F3F3",
    paddingBottom: 0,
    //paddingTop: 5,
    marginBottom: 80,
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
  contenedorLista: {
    marginLeft:15,   
    } 
  });

  
  

export default ListaProductos







