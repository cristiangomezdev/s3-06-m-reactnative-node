import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
  } from "react-native";
  import { useNavigate } from "react-router-native";
  const { width } = Dimensions.get("window");

export default function Button(){
 let navigate = useNavigate();
const handleSubmit = () =>{
  navigate('/credit')
}

    return(
      <View style={styles.containerButton}>
        <TouchableWithoutFeedback onPress={()=>navigate('/credit')}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>
                Check Out
            </Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
      )   
}

const styles = StyleSheet.create({
    containerButton: {
      flex: 0,
      alignItems: "center",
      marginBottom:50
    },
    buttonText:{
      color: "#fff",
      fontSize: 20,
      margin: 10,
      fontFamily : 'poppins',
    },
    button: {
      backgroundColor: "#56CBF9",
      width: width - 40,
      height: 50,
      alignItems: "center",
      borderRadius: 30,
    },
  });