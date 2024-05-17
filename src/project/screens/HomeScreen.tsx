import React, { ReactElement } from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useThemeStore } from '../../shared';
import { BaseScreen } from '../../theme';
import { Card, HeaderTitle, ItemGroup, Spacer, TextContent, Title } from '../../components/shared';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    theme: {theme},
  } = useThemeStore();

  return (
    <BaseScreen
      isScroll
    >
      <Spacer />

      <HeaderTitle 
        text="Espacio de trabajo"
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontSize: 30
        }}
      />

      <Title 
        weight='medium'
        align='center'
        text='Seleccione su espacio de trabajo'
      />

      <Spacer size={15}/>

      {
        Array.from({ length: 7 }).map((_, i) => (
          <React.Fragment key={i}>
            <Card
              onPress={() => navigation.navigate('App' as never)}
              color={theme.colors.elevation.level1}
              
            >
              <ItemGroup
                justifyContent='space-between'
              >
                <Title 
                  text='Espacio de trabajo 1'
                  weight='semibold'
                />
                <Icon 
                  name='arrow-forward-ios'
                  size={20}
                  color={theme.colors.primary}
                />
              </ItemGroup>
              
              <Spacer />
              <TextContent
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              />
            </Card>
            <Spacer />
          </React.Fragment>
        )) as ReactElement<any, any>[]
      }
      

    </BaseScreen>
  );
};
