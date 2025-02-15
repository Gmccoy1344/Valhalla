import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function Welcome(){
    return(
        <View style={styles.container}>
            <ImageBackground source={require("./images/Wave.jpg")} style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });

  export default Welcome;