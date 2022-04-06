import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default function FPass({navigation}) {
  const [Otp, setOtp] = useState('');
  const [Npassword, setNPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');

  function handleBackButtonClick() {
    navigation.navigate('OTP');
    // BackHandler.exitApp()
    return true;
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

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/forgot_pass21.png')}
      />

      <View>
        <Text style={styles.sign}>Please remember the password</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="OTP"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={Otp => setOtp(Otp)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=" New Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={Npassword => setNPassword(Npassword)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={Cpassword => setCPassword(Cpassword)}
        />
      </View>
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: RFValue(13),
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: wp('50'),
    height: hp('6'),
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    // marginBottom: 10,
    height: 250,
    width: 300,
  },
  sign: {
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'center',
    fontSize: 20,
    color: '#000',
  },
  TextInput: {
    height: hp('10'),
    flex: 1,
    padding: 0,
    marginLeft: 0,
  },
  Btn: {
    width: wp('35'),
    borderRadius: 25,
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#FF1493',
  },
});