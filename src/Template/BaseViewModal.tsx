import React, {useContext, useState} from 'react';
import {Platform, View} from 'react-native';
import {BaseModal, BaseModalProps} from './BaseModal';
import {CustomButton} from '../components/CustomReactNativePaper/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/ThemeContext';
import {CustomColors} from '../theme/appColors';

interface Props extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
}

export const BaseViewModal = ({CloseFunction, isVisible, children}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  return (
    <BaseModal CloseFunction={CloseFunction} isVisible={isVisible}>
      <View
        style={{
          flex: 1,
          margin: 10,
          backgroundColor: theme.colors.background,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          borderRadius: 15,
          padding: 15,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 50,
          }}
          onLayout={event =>
            setDimensions({
              width: event.nativeEvent.layout.width,
              height: event.nativeEvent.layout.height,
            })
          }>
          {children}
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          top:
            Platform.OS === 'ios'
              ? dimensions.height + 25
              : dimensions.height - 15,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CustomButton
            onPress={CloseFunction}
            title={'Cerrar'}
            style={{backgroundColor: CustomColors.red}}
          />
        </View>
      </View>
    </BaseModal>
  );
};
