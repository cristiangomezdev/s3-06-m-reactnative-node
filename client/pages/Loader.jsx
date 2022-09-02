import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Stack, ActivityIndicator } from '@react-native-material/core'
import { Dimensions } from "react-native";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
const Loader = (props) => {
    return (
        <View style={[styles.container, props.load]}>
            <Stack fill center spacing={4} >
                <ActivityIndicator size='large' color="error" />
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default Loader;
