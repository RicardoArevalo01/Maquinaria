import React from 'react';
import LottieView from 'lottie-react-native';

export const LoadingModal = () => (
  <LottieView
    source={require('../../../assets/Lottie/Loader-Modal.json')}
    style={{flex: 1, backgroundColor: 'rgba(0, 0, 0,0.3)'}}
    speed={1.75}
    autoPlay
    loop
  />
);
