import React, {useEffect, useState} from 'react';

import {LayoutChangeEvent, View, useWindowDimensions} from 'react-native';
import {
  Canvas,
  Image as SkiaImage,
  Path,
  SkImage,
} from '@shopify/react-native-skia';
import {BaseModalProps, BaseModal} from '../../../Template/BaseModal';
import {useDraw} from '../DrawHooks/useDraw';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {icons} from '../../../theme/appTheme';

interface Props extends BaseModalProps {
  image: SkImage | null;
  draw: (draw: string[]) => void;
  initialDraw: string[];
}

export const DrawImageModal = ({
  isVisible,
  CloseFunction,
  image,
  draw,
  initialDraw,
}: Props) => {
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
    resizeResponsiveDraw,
  } = useDraw({});
  useEffect(() => {
    if (dimensions.width !== 0 && dimensions.height !== 0) {
      setPaths(
        resizeResponsiveDraw(initialDraw, dimensions.width, dimensions.height),
      );
    }
  }, [dimensions, initialDraw]);
  return (
    <BaseModal CloseFunction={CloseFunction} isVisible={isVisible} style={{}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: '3%',
        }}>
        <Canvas
          style={{
            width: width * 0.35 * (780 / 330),
            height: width * 0.35,
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
          {image && (
            <SkiaImage
              image={image}
              fit="contain"
              x={0}
              y={0}
              width={dimensions.width}
              height={dimensions.height}
            />
          )}
          {paths.map((path, index) => (
            <Path
              key={index}
              color={'red'}
              strokeWidth={1}
              path={path}
              style="stroke"
              strokeJoin="round"
            />
          ))}
          <Path
            color={'red'}
            strokeWidth={1}
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
            iconColor="red"
            mode="contained"
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
