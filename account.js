import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,BackHandler,ImageBackground,Image} from 'react-native'
export default function Account({ navigation })
{
    function handleBackButtonClick() {
        //navigation.goBack() 
        BackHandler.exitApp()
        return true;
        }
      
        useEffect(() => {
          BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
          return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
          };
        }, []);
        async function clean()
        {
            await AsyncStorage.clear()
            console.log("clear")
        }
        function full()
        {
            clean()
            navigation.navigate('Login')
        }
        // useEffect(() => {
        //   clean()
        //   }, []);
    return(
        <View style={styles.container}>
          <ImageBackground source={require("./assets/account.jpg")} style={styles.image}>
            <Image source={require("./assets/logo.jpg")} style={styles.image1}/>
            <TouchableOpacity style={styles.signupBtn1} onPress={() => navigation.navigate('storage')}><Text style={styles.text}>PROFILE</Text></TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn} onPress={() => full()}><Text style={styles.text}>LOGOUT</Text></TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%",
  },
  signupBtn1:{
    width:"50%",
    borderRadius: 25,
    height:"10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    color:'white',
    backgroundColor: "#FF1493",
  },
  signupBtn: {
    width:"50%",
    borderRadius: 25,
    height:"10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    color:'white',
    backgroundColor: "#FF1493",
    },
  text: {
    color:'white',
    fontSize:18
  },
  image:{
    width:"100%",
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image1:{
    width:"50%",
    height:"40%",
    alignItems: "center",
    justifyContent: "center"
  }
})