
import React from 'react'

import LottieView from 'lottie-react-native';

const AcitivtyIndicatior = ({ visible = false }) => {
    if(!visible) return null;
  return (
    <LottieView
    autoPlay
    loop
   
    source={require('../assets/loader.json')}
  />

    
  )
}

export default AcitivtyIndicatior