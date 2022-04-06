import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet, ImageBackground , Image , BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './storage';
 export default function Intro({ navigation })
{
    const [visible,Isvisible] = useState(true);
    const [uname,setuname]=useState("")
    const [em,setem]=useState("")
    const [con,setcon]=useState("")
    async function getData()
    {
        
       var val = await AsyncStorage.getItem('Uname')
        setuname(val)
        check()
        console.log(uname,"sure");
    }
    function check(){
        
        Isvisible(false);
        console.log(uname,"ok")
        setTimeout(() => { 
            if(uname != "")
            {
                console.log("innnn")
            if(!uname)
            {
                navigation.navigate('Signup')
                console.log("sign")   
            }
            else{
                navigation.navigate('Navigator')
                console.log("nav")
            }
            }
            
        }, 5000);
    
    }
useEffect(() => {
    getData();
    //  check()
    }, [uname]);
return(
    <View style={styles.container}>
            <Image style={styles.image} source={require("./assets/front.png")} />
    </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      fontSize:25,
      margin:0,
    //   width:"100%",
    //   height:"100%"
    },
    loginBtn: {
        // width:"50%",
        borderRadius: 15,
        height:40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#FF1493",
        width:190
      },
      text : {
        fontSize: 30,
        alignItems: "center",
      justifyContent: "center",
     },
     text1:{
        fontSize:17,
        marginTop:0,
        marginLeft:10,
        marginRight:10
     },
    image: {
      height:"100%",
      width:"100%"
    }
})