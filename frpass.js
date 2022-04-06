import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function FRPass({ navigation }) {
  const [Contact, setContact] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/fp.png")} />

      <View>
         <Text style={styles.sign}>Enter your conatct number to get OTP</Text>
       </View>
       
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Contact Number"
          placeholderTextColor="gray"
          keyboardType="numeric"
          onChangeText={(Contact) => setContact(Contact)}
        />
      </View>
      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('ForgetPassword')} >
        <Text style={styles.loginText}>GET OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Login')} >
        <Text style={styles.loginText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize:RFValue(13)
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width:wp('50'),
    height: hp('6'),
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: hp('10'),
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  image: {
    marginTop:10,
    marginBottom: 10
  },
  sign: {
    alignItems:"center",
    marginBottom: 20,
    justifyContent: "center",
    fontSize:20
  },
  Btn: {
    width: "80%",
    borderRadius: 25,
    height:hp('7'),
    width:wp("30"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginText:{
    color:"white"
  }
});