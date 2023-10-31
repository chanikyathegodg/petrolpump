
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Dashboard from './Dashboard/Dashboard';
import SelectProducts from './Dashboard/SelectProducts';
import TankList from './Dashboard/TankList';
import AllDus from './Dashboard/AllDus';
import DuData from './Dashboard/DuData';
import DuList from './Dashboard/DuList';




const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
   
      <Stack.Navigator>
       
<Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown:false }} />

       <Stack.Screen name="RegisterScreen" component={RegisterScreen}  options={{ headerShown:false }} />
       <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown:false }} />
   
       
     
   

   <Stack.Screen name="DuData" component={DuData} options={{ headerShown:true }} />
   


  
   <Stack.Screen name="SelectProducts" component={SelectProducts} options={{ headerShown:true }} />


<Stack.Screen name="TankList" component={TankList} options={{ headerShown:true }} />
      
<Stack.Screen name="DuList" component={DuList} options={{ headerShown:true }} />
      <Stack.Screen name="AllDus" component={AllDus} options={{ headerShown:true }} />
    
   
   
    
     
   
    
  
      
      </Stack.Navigator>
    
  );
}

export default StackNavigation;