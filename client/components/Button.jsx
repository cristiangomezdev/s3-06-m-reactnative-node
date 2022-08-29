import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
  } from "react-native";
  const { width } = Dimensions.get("window");
export default function Button({text,onPressHandler}){
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
    },
    button: {
      backgroundColor: "#56CBF9",
      width: width - 40,
      height: 50,
      alignItems: "center",
      borderRadius: 30,
    },
  });