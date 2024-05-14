import React from 'react';
import {BaseActionSheet} from '../BaseActionSheet';
import {SheetManager, SheetProps} from 'react-native-actions-sheet';
import {SearchListFilter} from '../../../../components';
import {Text} from 'react-native-paper';
import {SelectorItemButton} from './SelectorComponents/SelectorItemButton';

export const SelectorSheet = (props: SheetProps<'selector'>) => {
  return (
    <BaseActionSheet id={props.sheetId}>
      <Text style={{marginBottom: 10}}>
        Seleccione {props.payload?.title ?? 'una opción'}
      </Text>
      <SearchListFilter
        data={props.payload?.items ?? []}
        renderItem={item => (
          <SelectorItemButton
            onPress={() =>
              SheetManager.hide(props.sheetId, {
                payload: item,
              })
            }
            title={item[props.payload?.keyProperty ?? '']}
          />
        )}
        ListEmptyText={'No existen items para mostrar'}
        refreshFunction={() => {}}></SearchListFilter>
    </BaseActionSheet>
  );
};
