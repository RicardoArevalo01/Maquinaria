import React, {useState} from 'react';

import {LayoutChangeEvent, View, useWindowDimensions} from 'react-native';
import {Canvas, Path} from '@shopify/react-native-skia';
import {
  BaseModalProps,
  BaseModal,
} from '../../../theme/Template/screens/BaseModal';
import {useDraw} from '../DrawHooks/useDraw';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {icons} from '../../../theme';

interface Props extends BaseModalProps {
  draw: (draw: string[]) => void;
}

export const DrawSignatureModal = ({isVisible, CloseFunction, draw}: Props) => {
  const {width} = useWindowDimensions();
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const {
    onClear,
    onTouchMove,
    onTouchEnd,
    onUndo,
    paths,
    setPaths,
    currentPath,
    resizeDrawToOriginalImg,
  } = useDraw({imgWidth: 800, imgHeight: 350});
  return (
    <BaseModal CloseFunction={CloseFunction} isVisible={isVisible} style={{}}>
      <View
        style={{
          borderRadius: 15,
          backgroundColor: 'white',
          padding: '3%',
        }}>
        <Canvas
          style={{
            width: width * 0.8,
            height: width * 0.35,
            //backgroundColor: 'grey',
            overflow: 'hidden',
          }}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onLayout={({
            nativeEvent: {
              layout: {width, height},
            },
          }: LayoutChangeEvent) =>
            setDimensions({
              width,
              height,
            })
          }>
          {paths.map((path, index) => (
            <Path
              key={index}
              color={'black'}
              strokeWidth={4}
              path={path}
              style="stroke"
              strokeJoin="round"
            />
          ))}
          <Path
            color={'black'}
            strokeWidth={4}
            path={currentPath}
            style="stroke"
            strokeJoin="round"
          />
        </Canvas>
        <View
          style={{
            width: dimensions.width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <IconButton
            onPress={CloseFunction}
            icon={icons.close}
            mode="contained"
            iconColor="red"
          />
          <IconButton onPress={onUndo} icon={icons.undo} mode="contained" />
          <IconButton onPress={onClear} icon={icons.trash} mode="contained" />
          <IconButton
            onPress={() => {
              draw(
                resizeDrawToOriginalImg(
                  paths,
                  dimensions.width,
                  dimensions.height,
                ),
              );
              CloseFunction();
            }}
            icon={icons.check}
            mode="contained"
          />
        </View>
      </View>
    </BaseModal>
  );
};
