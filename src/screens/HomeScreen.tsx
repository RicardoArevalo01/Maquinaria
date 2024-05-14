import React, {useState} from 'react';
import {BaseScreen} from '../Template';
import {DarwImage, DrawSignature} from '../utils';
import {useImage} from '@shopify/react-native-skia';

export const HomeScreen = () => {
  const [drawExample, setdrawExample] = useState<string[]>([]);
  const [drawSignatureExample, setdrawSignatureExample] = useState<string[]>(
    [],
  );
  const imgLeft = useImage(require('../assets/izq.jpg'));
  return (
    <BaseScreen>
      <DarwImage
        initialDraw={drawExample}
        draw={drawValue => {
          setdrawExample(drawValue);
          console.log(JSON.stringify(drawValue, null, 3));
        }}
        image={imgLeft}
        text={'Izq'}
      />
      <DrawSignature
        draw={drawSignature =>
          console.log(JSON.stringify(drawSignature, null, 3))
        }
        text={'Firmar'}
      />
    </BaseScreen>
  );
};
