import React, {useEffect, useState} from 'react';
import {LayoutChangeEvent, View, useWindowDimensions} from 'react-native';
import {SkImage} from '@shopify/react-native-skia';
import {DrawImageModal} from './DrawComponents/DrawImageModal';
import {useDraw} from './DrawHooks/useDraw';
import {Canvas, Image as SkiaImage, Path} from '@shopify/react-native-skia';

import {CustomButton} from '../../components';

interface Props {
  draw: (draw: string[]) => void;
  image: SkImage | null;
  text: string;
  initialDraw: string[];
}

export const DarwImage = ({draw, image, text, initialDraw}: Props) => {
  const {width} = useWindowDimensions();
  const {resizeResponsiveDraw} = useDraw({});
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [paths, setpaths] = useState<string[]>(
    resizeResponsiveDraw(initialDraw, dimensions.width, dimensions.height),
    //initialDraw,
  );
  useEffect(() => {
    if (dimensions.width !== 0 && dimensions.height !== 0) {
      setpaths(
        resizeResponsiveDraw(initialDraw, dimensions.width, dimensions.height),
      );
    }
  }, [dimensions, initialDraw]);

  const [isDraw, setIsDraw] = useState(false);
  return (
    <View>
      <Canvas
        style={{
          width: width * 0.12 * (780 / 330),
          height: width * 0.12,
          overflow: 'hidden',
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
            strokeWidth={0.4}
            path={path}
            style="stroke"
            strokeJoin="round"
          />
        ))}
      </Canvas>
      <CustomButton
        onPress={() => setIsDraw(true)}
        title={`Rayado ${text}`}></CustomButton>
      <DrawImageModal
        CloseFunction={() => setIsDraw(false)}
        isVisible={isDraw}
        image={image}
        draw={e => {
          draw(e);
          setpaths(
            resizeResponsiveDraw(e, dimensions.width, dimensions.height),
          );
        }}
        initialDraw={initialDraw}></DrawImageModal>
    </View>
  );
};
