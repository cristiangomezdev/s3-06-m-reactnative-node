import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
  } from "react-native";
  import { useFonts } from 'expo-font';
  const { width } = Dimensions.get("window");
export default function Button({text,onPressHandler}){

  let [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
    taviraj: require("../assets/fonts/Taviraj-Light.ttf"),
    "taviraj-m": require("../assets/fonts/Taviraj-Medium.ttf"),
  });


    return(
      <View style={styles.containerButton}>
        <TouchableWithoutFeedback onPress={onPressHandler}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>
                {text}
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
    },
    buttonText:{
      color: "#fff",
      fontSize: 20,
      margin: 10,
      fontFamily : 'poppins',
      fontWeight:'700'
    },
    button: {
      backgroundColor: "#56CBF9",
      width: width - 40,
      height: 50,
      alignItems: "center",
      borderRadius: 30,
    },
  });