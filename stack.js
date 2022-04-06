import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Login from './login';
import SignUp from './signup';
import FPass from './fpass';
import FRPass from './frpass';
import Home from './Home';
import Storage from './storage';
import Intro from './intro'
import Account from './account';
import Detail from './details';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  headerShown:false,
  style: {
    height: '10%',
  },
};

function MyStack() {
  return (
      <NavigationContainer> 
              <Stack.Navigator initialRouteName='Intro' screenOptions={screenOptions}>
                 <Stack.Screen name="Navigator" component={Navigator} />
                 <Stack.Screen name="Intro" component={Intro} />
                 <Stack.Screen name="Login" component={Login} />
                 <Stack.Screen name="Signup" component={SignUp} />
                 <Stack.Screen name="OTP" component={FRPass} />
                 <Stack.Screen name="ForgetPassword" component={FPass} />
                 <Stack.Screen name="Home" component={Home} />
                 <Stack.Screen name="account" component={Account} />
                 <Stack.Screen name="storage" component={Storage} />
                 <Stack.Screen name="detail" component={Detail} />
             </Stack.Navigator>
      </NavigationContainer>
  );
}

function Navigator() {
  return (
      <Tab.Navigator screenOptions={screenOptions} initialRouteName='Home'>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="group" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
};

export default MyStack;