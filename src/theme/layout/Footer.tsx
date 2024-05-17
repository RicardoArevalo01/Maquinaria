import React, {memo} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {checkEnviroment} from '../../api/routes';
import {VersionApp} from '../../helpers/VersionApp';
import {icons} from '../constants/appTheme';
import {Info} from '../../components/base/Info';
import {Icon} from 'react-native-paper';
import {
  useAuthStore,
  useConnectionStore,
  useThemeStore,
} from '../../shared/hooks';
import { ItemGroup, Title } from '../../components/shared';

export const Footer = memo(() => {
  const {width} = useWindowDimensions();
  const {
    auth: {status, jwtInfo},
  } = useAuthStore();
  const {
    connection: {isConnected},
  } = useConnectionStore();
  const {
    theme: {theme},
  } = useThemeStore();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.colors.elevation.level5,
        paddingHorizontal: 15,
        paddingVertical: 6,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Icon
            size={width * 0.025}
            color={isConnected ? 'lightgreen' : 'red'}
            source={icons.signal}
          />
        </View>
      
      {checkEnviroment !== 'Producción' && (
        
        <ItemGroup
          style={{
            marginLeft: 5,
          }}
        >
          <Title 
            text='Ambiente: '
            weight='semibold'
            size='ant-man'
          />
          <Title 
            text={checkEnviroment}
            weight='regular'
            size='ant-man'
          />
        </ItemGroup>

      )}
      {status === 'authenticated' && (
     
          <ItemGroup
            style={{
              marginLeft: 5,
            }}
          >
            <Title 
              text='Usuario: '
              weight='semibold'
              size='ant-man'
            />
            <Title 
              text={jwtInfo?.userName ?? ''}
              weight='regular'
              size='ant-man'
            />
        </ItemGroup>
      )}
      <ItemGroup
        style={{
          marginLeft: 5,
        }}
      >
          <Title 
            text='Versión: '
            weight='semibold'
            size='ant-man'
          />
          <Title 
            text={VersionApp}
            weight='regular'
            size='ant-man'
          />
      </ItemGroup>
    </View>
  );
});
