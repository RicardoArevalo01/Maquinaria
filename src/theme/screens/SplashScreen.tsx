import React, {useEffect} from 'react';
import {Animated, Image, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import { useAnimation } from '../../hooks';
import { useThemeStore } from '../../shared';

export const SplashScreen = () => {
  const {
    theme: {theme, themeInfo},
  } = useThemeStore();
  const isFocused = useIsFocused();
  const {fadeIn, opacity, zoomAndFadeOut, scale, position} = useAnimation();
  const handleZoomAndFadeOut = () => {
    fadeIn(1000); // Hace un fade-in con una duración de 500 ms
    setTimeout(() => {
      zoomAndFadeOut(5, 1800); // Después de 1000 ms (1 segundo), aplica el zoom y fade-out
    }, 2000);
  };
  useEffect(() => {
    handleZoomAndFadeOut();
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <Animated.Image
        source={require('../../assets/images/splash.png')}
        style={{
          opacity,
          transform: [{translateY: position}, {scale}],
          height: '50%',
          width: '50%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}></Animated.Image>
    </View>
  );
};
