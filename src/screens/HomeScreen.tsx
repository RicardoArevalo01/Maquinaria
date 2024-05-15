import React, {useContext, useState} from 'react';
import {BaseScreen} from '../Template';
import {useImage} from '@shopify/react-native-skia';
import { Card, HeaderTitle, ItemRow, Spacer, TextContent, Title } from '../components/shared';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from '../context';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);

  return (
    <BaseScreen>
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

      <Spacer size={10}/>

      <Card
        onPress={() => navigation.navigate('App' as never)}
      >
        <ItemRow
          justifyContent='space-between'
        >
          <Title 
            weight='semiBold'
            text='Espacio de trabajo 1'
          />
          <Icon 
            name='arrow-forward-ios'
            size={20}
            color={theme.colors.primary}
          />
        </ItemRow>
        
        <Spacer />
        <TextContent
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </Card>
      <Spacer />

      <Card
        onPress={() => navigation.navigate('App' as never)}
      >
        <ItemRow
          justifyContent='space-between'
        >
          <Title 
            weight='semiBold'
            text='Espacio de trabajo 2'
          />
          <Icon 
            name='arrow-forward-ios'
            size={20}
            color={theme.colors.primary}
          />
        </ItemRow>
        <Spacer />
        <TextContent
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </Card>
      <Spacer/>

      <Card
        onPress={() => navigation.navigate('App' as never)}
      >
        <ItemRow
          justifyContent='space-between'
        >
          <Title 
            weight='semiBold'
            text='Espacio de trabajo 3'
          />
          <Icon 
            name='arrow-forward-ios'
            size={20}
            color={theme.colors.primary}
          />
        </ItemRow>
        <Spacer />
        <TextContent
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </Card>
      <Spacer/>

      <Card
        onPress={() => navigation.navigate('App' as never)}
      >
        <ItemRow
          justifyContent='space-between'
        >
          <Title 
            weight='semiBold'
            text='Espacio de trabajo 4'
          />
          <Icon 
            name='arrow-forward-ios'
            size={20}
            color={theme.colors.primary}
          />
        </ItemRow>
        <Spacer />
        <TextContent
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </Card>

    </BaseScreen>
  );
};
