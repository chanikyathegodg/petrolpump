import React, { useContext, useState } from 'react'


import {KeyboardAvoidingView, Platform, TouchableOpacity,Text} from 'react-native'
import InputText from './components/InputText'
import Colors from './config/Colors';
import { Formik } from 'formik';
import authApi from "./api/auth";
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

          


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const validationregister = Yup.object().shape({
email:Yup.string().required().email().label("Email"),
name:Yup.string().required().label("Name of the outlet"),
password:Yup.string().required().min(4).label("Password"),
password_confirmation: Yup.string().required()
.oneOf([Yup.ref('password'), null], 'Passwords must match'),
phone_number: Yup.string().required().min(10).max(10).matches(phoneRegExp, 'Phone number is not valid').label("Phone number"),


})


const Register = ({navigation}) => {




   const [loginFailed, setLoginFailed] = useState(false);
   

  

  const handleSubmit = async ({ name,email,password,password_confirmation,sap_code,phone_number }) => {
   const result = await authApi.register(name,email,password,password_confirmation,sap_code,phone_number);
 
   if (result.status == 422)
   {
      setLoginFailed(true);
      return(alert(result.data.message));
   } 



   if (!result.ok) return( setLoginFailed(true));
   setLoginFailed(false);

  const userr = result.data;

console.log({token:userr.token});



navigation.navigate('Dashboard');

 };

  return (
    
   <Formik
   initialValues={{phone_number:"",email:"",password:"",password_confirmation:"",sap_code:"",name:"" }}  
   onSubmit={handleSubmit}
   validationSchema={validationregister}
 >
      {({ handleChange, handleBlur, errors,handleSubmit, values }) => (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'11%'}}>

    
   <InputText
         
         onChangeText={handleChange('phone_number')}
           onBlur={handleBlur('phone_number')}
           value={values.phone_number}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder= 'PhoneNumber'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='phone' />

<Text style={{ color:'red' }}> {errors.phone_number}</Text>


<InputText
          
          onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}

           autoCapitalize='none'
           autoCorrect={false}
      placeholder='Email Id'

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='email' />

<Text style={{ color:'red' }}> {errors.email}</Text>


     
     <InputText 

onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}

     placeholder='Password'
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />

<Text style={{ color:'red' }}> {errors.password}</Text>

     
<InputText 


onChangeText={handleChange('password_confirmation')}
           onBlur={handleBlur('password_confirmation')}
           value={values.password_confirmation}

     placeholder='Re-Enter Password'
     autoCapitalize='none'
     autoCorrect={false}
      secureTextEntry={true}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='lock' />

<Text style={{ color:'red' }}>{errors.password_confirmation}</Text>
         
<InputText

onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}


 placeholder= 'Name of the outlet'
autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='assignment' />
<Text style={{ color:'red' }}> {errors.name}</Text>

<InputText placeholder='Sap Code'


 onChangeText={handleChange('sap_code')}
           onBlur={handleBlur('sap_code')}
           value={values.sap_code}


autoCapitalize='none'
autoCorrect={false}

      placeholderTextColor='white'

   style={{width:'100%'}}  icon='qr-code' />


<Text style={{ color:'red' }}> {errors.name}</Text>




<TouchableOpacity 

onPress={handleSubmit} 
style={{width:'100%',backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:25,marginTop:20,borderColor:Colors.primary,borderWidth:2,}}>
 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Sign Up</Text>
</TouchableOpacity>
 </KeyboardAvoidingView>
  )}
  </Formik>
  
  )
}

export default Register