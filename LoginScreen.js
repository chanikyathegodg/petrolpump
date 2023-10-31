import React, { useContext, useState } from 'react'

import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from './components/InputText'
import Colors from './config/Colors'; 
import { Formik } from 'formik';
import authApi from "./api/auth";
import * as Yup from 'yup';
import UserContext from './context/UserContext';




const validationlogin = Yup.object().shape({
email:Yup.string().required().email().label("Email"),
password:Yup.string().required().min(4).label("Password"),
sap_code:Yup.string().required().min(3).label("sap_code")
})


const LoginScreen = ({navigation,...props }) => {


    const [loginFailed, setLoginFailed] = useState(false);
  
  const {setUser} = useContext(UserContext);
  
    const handleSubmit = async ({ email, password,sap_code }) => {
      const result = await authApi.login(email, password,sap_code);
    console.log(result.data.message);

       
      if (result.data.message == "invalid credientials") return setLoginFailed(true)
else{
  setLoginFailed(false);
  
  const userr = result.data;


if(userr.token){
  
setLoginFailed(false);
setUser(userr.user.sap_code);
console.log(userr);
navigation.navigate('Dashboard')

}

}
     
    };
    
     
    return (
      
      <Formik
      initialValues={{ email: '',password:'',sap_code:'' }}
      onSubmit={handleSubmit}
      validationSchema={validationlogin}
    >
         {({ handleChange, handleBlur,errors, handleSubmit, values }) => (
  
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>
    
  
         
  
  
  
     <InputText
             
  
             autoCapitalize='none'
             autoCorrect={false}
        placeholder='Email'
        onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.username}
        placeholderTextColor='white'
  
     style={{width:'100%'}}  icon='email' />
       <Text style={{ color:'red' }}> {errors.email}</Text>



       <InputText 
       placeholder= 'Password'
  
       
       onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
             value={values.password}
       autoCapitalize='none'
       autoCorrect={false}
        secureTextEntry={true}
  
        placeholderTextColor='white'
  
     style={{width:'100%'}}  icon='lock' />
  
  <Text style={{ color:'red' }}> {errors.password}</Text>

  <InputText placeholder='Sap Code'
     onChangeText={handleChange('sap_code')}
             onBlur={handleBlur('sap_code')}
             value={values.sap_code}
  
  autoCapitalize='none'
  autoCorrect={false}
  
        placeholderTextColor='white'
  
     style={{width:'100%'}}  icon='qr-code' />
    <Text style={{ color:'red' }}> {errors.sap_code}</Text>


  <TouchableOpacity   
  onPress={handleSubmit} 
  style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
   <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Login</Text>
  </TouchableOpacity>
  


{loginFailed === true
           ? (<Text style={{ color:'red',fontSize:18,marginTop:10,paddingBottom:10 }}>
           
           Username and Password are Invalid</Text>)
           : (<Text></Text>)
          }

              <Text  style={{fontSize: 16, fontWeight:'bold',fontWeight: 700}}>
                I'm a new user.{" "}
              </Text>
              <TouchableOpacity   
  onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={{
              color: Colors.primary,
              fontSize: 17,  
              fontWeight: 700   
            }} 
          
 
    >
                Create New Account
              </Text>
              </TouchableOpacity>
  
              
  
            
              <Text style={{
              color: Colors.danger,
              fontSize: 17,  
              marginTop:10,
              fontWeight: 700   
            }} 
          
            >
                Forgot Password
              </Text>
              
  
    </KeyboardAvoidingView>
    )}
    </Formik>
    
    )
  }

export default LoginScreen