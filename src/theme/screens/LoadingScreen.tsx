import React from 'react';
import LottieView from 'lottie-react-native';

export const LoadingScreen = () => {
  return (
    <LottieView
      source={require('../../assets/Lottie/Loader-FullScreen.json')}
      speed={1.75}
      autoPlay
      style={{flex: 1, backgroundColor: 'white'}}
      loop></LottieView>
  );
};
