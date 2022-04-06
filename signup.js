import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default function SignUp({navigation}) {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState();
  const [Contact, setContact] = useState();
  const [Password, setPassword] = useState();
  const [CPassword, setCPassword] = useState();
  const [login, setlogin] = useState(0);
  async function store() {
    await AsyncStorage.setItem('Uname', Username);
    await AsyncStorage.setItem('Em', email);
    await AsyncStorage.setItem('Con', Contact);
  }
  function validateUsername(Username) {
    if (Username == '') {
      alert('Enter the valid username');
      navigation.navigate('Signup');
    } else {
      return true;
    }
  }
  function validateEmail(email) {
    if (!email) {
      alert('Enter valid Email id');
      navigation.navigate('Signup');
    }
    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    //    alert('Invalid email address');
    //    navigation.navigate('Signup');
    // }
    return true;
  }
  function log() {
    var log = 2;
    var log1 = log + 1;
    setlogin(log);
    console.log(login);
  }
  function getcontact(Contact) {
    return Contact;
  }
  function validateContact() {
    let val = getcontact(Contact);
    if (val.length != 10 || val == '') {
      alert('Enter the valid contact number');
      navigation.navigate('Signup');
    }
  }
  function pass(Password, CPassword) {
    if (Password != CPassword) {
      alert('check the password');
      navigation.navigate('Signup');
    } else {
      return true;
    }
  }
  function handleBackButtonClick() {
    navigation.goBack();
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  function full() {
    navigation.navigate('Navigator');
    validateUsername(Username);
    store();
    validateEmail('email');
    pass(Password, CPassword);
    validateContact();
    validateEmail(email);
    log();
  }
  return (
    <ImageBackground source={require('./assets/sign.png')} style={{width:'100%', height:'100%', flex:1}}>
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.sign}>SignUp</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            placeholderTextColor="gray"
            onChangeText={Username => setUsername(Username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Contact Number"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={Contact => setContact(Contact)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={Password => setPassword(Password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={CPassword => setCPassword(CPassword)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.ald}>Already have an account?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupBtn} onPress={() => full()}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    fontSize: RFValue(13),
    marginTop:"30%"
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: wp('60'),
    height: hp('6'),
    marginBottom: 20,
    alignItems: 'center',
    // opacity:0.8
  },
  TextInput: {
    height: hp('30'),
    flex: 1,
    padding: 10,
    marginLeft: 20,
    // opacity:0.4
  },
  sign: {
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'center',
    fontSize: 30,
    color:"black"
  },
  ald: {
    height: hp('6'),
    marginTop: 20,
    color:"black"
  },
  signupBtn: {
    width: wp('50'),
    borderRadius: 25,
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#FF1493',
  },
  loginText:{
    color:"white",
    fontSize:17
  }
});
