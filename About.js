import React from "react";
import {
  StyleSheet,
  Text,
  View  
} from "react-native";
import Storage from "./storage"
export default function About({ navigation }) {
    return (
        <View>
        <Text style={styles.sign}>{}</Text>    
        </View>
    );
  }
  const styles = StyleSheet.create({
    sign: {
      alignItems: "center",
      justifyContent: "center",
      fontSize:40
    }
  });