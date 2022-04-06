import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,ImageBackground
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation }) {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function store()
  {
    await AsyncStorage.setItem('uname',Username)
  }
  function validateUsername(Username) {
    if (Username == "") {
      alert("Enter  valid username")
      navigation.navigate('Login');
    }
    else{
      return true
    }
  }
  function pass(password)
  {
    if(!password)
    {
      alert("Enter valid password")
      navigation.navigate('Login');
    }
  }
  function full(){
    navigation.navigate('Navigator');
    store();
    validateUsername(Username);
    pass(password)
  }
  function handleBackButtonClick() {
    BackHandler.exitApp()
        return false;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
        }, []);
  return (
    <ImageBackground source={require('./assets/sign.png')} style={{width:'100%', height:'100%', flex:1}}>
    <View style={styles.container} >
      <Image style={styles.image} source={require("./assets/log.png")} />
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="gray"
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.acc}>Create new account</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => full()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize:RFValue(13),
    margin:0
  },
 
  image: {
    marginBottom: 5,
    width:wp('95'),
    height:hp('45')
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: wp('70'),
    height: hp('7'),
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: hp('30'),
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: hp('5'),
    color:"black"
    //marginBottom:10
  },
  cbutton: {
    height: hp('5'),
  },
  acc:{
    color:"black"
  },
  loginBtn: {
    width: wp('50'),
    borderRadius: 15,
    height: hp('7'),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#FF1493",
  },
  loginText:{
    color:"white"
  },
});