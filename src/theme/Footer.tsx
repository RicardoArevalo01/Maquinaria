import React, {memo, useContext} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {checkEnviroment} from '../api/routes';
import {VersionApp} from '../helpers/VersionApp';
import {icons} from './appTheme';
import {AuthContext} from '../context/AuthContext';
import {CheckInternetContext} from '../context/CheckInternetContext';
import {Info} from '../components/CustomReactNativePaper/Info';
import {Icon} from 'react-native-paper';
import {ThemeContext} from '../context/ThemeContext';

export const Footer = memo(() => {
  const {width} = useWindowDimensions();
  const {JWTInfo} = useContext(AuthContext);
  const {status} = useContext(AuthContext);
  const {hasConnection} = useContext(CheckInternetContext);
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.elevation.level2,
        paddingLeft: '4.5%',
        paddingRight: '4%',
      }}>
      <View
        style={{
          position: 'absolute',
          left: '1%',
          bottom: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          size={width * 0.03}
          color={hasConnection ? 'lightgreen' : 'red'}
          source={icons.signal}
        />
      </View>
      {checkEnviroment !== 'Producción' && (
        <Info
          infoTextColor={theme.colors.onSurfaceVariant}
          property={'Ambiente'}
          info={checkEnviroment}
        />
      )}
      {status === 'authenticated' && (
        <>
          <Info
            infoTextColor={theme.colors.onSurfaceVariant}
            property={'Usuario'}
            info={JWTInfo?.userName ?? ''}
          />
        </>
      )}
      <Info
        infoTextColor={theme.colors.onSurfaceVariant}
        property={'Versión'}
        info={VersionApp}
      />
    </View>
  );
});
