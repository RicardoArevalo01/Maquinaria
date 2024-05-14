import {useRef} from 'react';
import {Animated, Easing, EasingStatic} from 'react-native';
import { EasingFunction } from 'react-native-reanimated';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 1000,
    easing: EasingFunction = Easing.linear,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: easing,
    }).start();
  };

  const zoomAndFadeOut = (
    maxScale: number, 
    zoomDuration: number = 500,
    easing: EasingFunction = Easing.linear,
  ) => {
    scale.setValue(1);
    fadeOut();
    Animated.timing(scale, {
      toValue: maxScale,
      duration: zoomDuration,
      useNativeDriver: true,
      easing: easing,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    zoomAndFadeOut,
    scale,
  };
};
