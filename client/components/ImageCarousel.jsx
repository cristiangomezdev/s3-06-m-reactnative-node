import React,{useState} from 'react'
import {View,Image,Text,ScrollView,Dimensions,StyleSheet} from 'react-native';
import noAvailable from '../assets/no-image-available.jpg'
const {width} = Dimensions.get("window");
const height = width;



export const ImageCarousel = ({images}) => {
  const [state, setFirst] = useState({
    active:0
  })
  let amount = width/images.length; 
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
          images.length === 0 ? <Image source={noAvailable} style={style.image}/> :
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
            style={index==state.active ? {height:3,backgroundColor:'#56CBF9',width:amount} : {height:3,width:amount} }
            />
          ))
        }
      </View>
    </View>
  )
  
}

const style = StyleSheet.create({
  container:{width,height:height,backgroundColor: "#f3f3f3",},
  scroll:{width,height},
  image:{width,height:height,resizeMode:'contain'},
  pagination:{flexDirection:'row',position:'absolute',bottom:0,width:'100%'},
/*   pagingline:{height:3,width:amount},
  paginglineActive:{height:3,backgroundColor:'#56CBF9',width:amount}, */
})
