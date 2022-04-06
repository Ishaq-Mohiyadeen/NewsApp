import React from 'react'
import MyStack from './stack.js'
import Navigator from './navigator.js'
import {LogBox} from 'react-native'

LogBox.ignoreLogs([
   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
 ]);
const App = () => {
   return (
      <MyStack />
   )
}
export default App;