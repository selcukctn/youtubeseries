import React from "react";
import { SafeAreaView, Text, Dimensions, StyleSheet, StatusBar } from "react-native";






const App = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <Text style={styles.text}>Abone Ol</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF0000'
    },
    text:{
        fontSize:50,
        color:'white',
        fontFamily:'bir',
    },
});



export default App;