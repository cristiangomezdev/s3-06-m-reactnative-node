import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Stack, ActivityIndicator } from '@react-native-material/core'
const Loader = () => {
    return (
        <View style={styles.container}>
            <Stack fill center spacing={1} >
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
