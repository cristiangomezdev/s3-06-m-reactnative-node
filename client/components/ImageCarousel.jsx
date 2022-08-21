import React,{useState} from 'react'
import {View,Image,Text,ScrollView,Dimensions,StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");
const height = width;

const images = [
  {
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
  },
];
let amount = width/images.length;
console.log(amount)
export const ImageCarousel = () => {
  const [state, setFirst] = useState({
    active:0
  })

const change = ({nativeEvent}) =>{
  const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  if(slide !== state.active){
    setFirst({active:slide})
  }
}
  return (
    <View style={style.container}>
      <ScrollView 
      pagingEnabled 
      horizontal
      onScroll={change}
      showsHorizontalScrollIndicator={false}
      style={style.scroll}>
        {
          images.map((image,index)=>(
            <Image
            key={image.id}
            source={{uri: image.uri}}
            style={style.image}
          />
          ))
        }
      </ScrollView>
      <View style={style.pagination}>
        {
          images.map((i,index)=>(
            <View 
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            key={i.id} 
            style={index==state.active ? style.paginglineActive : style.pagingline }
            />
          ))
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{width,height:height/2,backgroundColor: "#f3f3f3",},
  scroll:{width,height},
  image:{width,height:height/2,resizeMode:'contain'},
  pagination:{flexDirection:'row',position:'absolute',bottom:0,width:'100%'},
  pagingline:{height:3,width:amount},
  paginglineActive:{height:3,backgroundColor:'#56CBF9',width:amount},
})
