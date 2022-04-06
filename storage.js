import React ,{useState, useEffect} from 'react'
import {View,Text, StyleSheet ,BackHandler,Image,ImageBackground} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
 export default function Storage({ navigation }){
    const [uname,setuname]=useState("")
    const [em,setem]=useState("")
    const [con,setcon]=useState("")

    useEffect(() => {
      async function getData()
      {
          const val = await AsyncStorage.getItem('Uname')
          setuname(val)
          const val1 = await AsyncStorage.getItem('Em')
          setem(val1)
          const val2 = await AsyncStorage.getItem('Con')
          setcon(val2)
      }
      getData()
    }, [])
function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, [])   
 return(
    <View style={styles.container}>
      <ImageBackground source={require("./assets/bg.jpg")} style={styles.image}>
      <Image source={require("./assets/prof.png")} style={styles.image1}/>
        <Text style={styles.text1}>{uname}</Text>
        <Text style={styles.text}>{em}</Text>
        <Text style={styles.text}>{con}</Text>
        </ImageBackground>
    </View>
 );
 }
 const styles = StyleSheet.create({
    container: {
       // flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height:"100%",
        width:"100%",
        margin:0
    },
    text : {
        fontSize : 18,
        marginBottom : 20,
        // marginLeft:"20%",
        textAlign:'center',
        color:'white'

    },
    text1 : {
      fontSize : 24,
      marginBottom : 20,
      textAlign:'center',
      color:'yellow'
    },
    image:{
      width:"100%",
      height:"100%",
      alignItems: "center",
      justifyContent: "center",
      opacity:0.8
    },
    button : {
        margin:20,
        width:250
    },
    image1:{
      width:"35%",
      height:"20%",
      alignItems: "center",
      justifyContent: "center",
      resizeMode:"cover",
      marginBottom: 20,
      // marginTop: '20%',
    }
    });
    
