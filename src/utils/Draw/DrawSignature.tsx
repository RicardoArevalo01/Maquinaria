import React, {useState} from 'react';
import {LayoutChangeEvent, View, useWindowDimensions} from 'react-native';

import {useDraw} from './DrawHooks/useDraw';
import {Canvas, Path} from '@shopify/react-native-skia';
import {DrawSignatureModal} from './DrawComponents/DrawSignatureModal';
import {CustomButton} from '../../components';

interface Props {
  draw: (draw: string[]) => void;
  text: string;
}

export const DrawSignature = ({draw, text}: Props) => {
  const {width} = useWindowDimensions();
  const {resizeResponsiveDraw} = useDraw({imgWidth: 800, imgHeight: 350});
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [paths, setpaths] = useState<string[]>([]);
  const [isDraw, setIsDraw] = useState(false);
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          borderWidth: 0.4,
          borderColor: 'black',
          borderRadius: 15,
        }}>
        <Canvas
          style={{
            width: width * 0.8,
            height: width * 0.35,
          }}
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
        </Canvas>
      </View>
      <CustomButton onPress={() => setIsDraw(true)} title={text} />
      <DrawSignatureModal
        CloseFunction={() => setIsDraw(false)}
        isVisible={isDraw}
        draw={e => {
          draw(e);
          setpaths(
            resizeResponsiveDraw(e, dimensions.width, dimensions.height),
          );
        }}
      />
    </View>
  );
};
