import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import StackNavigation from './StackNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native'





const App = () => {
  return (
    
  <View style={{flex:1}}>

  <NavigationContainer>   
 <StackNavigation />
 </NavigationContainer>

  </View>

  )
}

export default App