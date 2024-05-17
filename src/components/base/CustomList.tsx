import React from 'react';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

export interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  ListEmptyText: string;
  refreshFunction: () => void;
  numColumns?: number;
  isHorizontal?: boolean;
  loadMore?: () => void;
  isRefreshing?: boolean;
}

export const CustomList = <T extends unknown>({
  data,
  renderItem,
  ListEmptyText,
  refreshFunction,
  numColumns = 1,
  isHorizontal = false,
  loadMore,
  isRefreshing = false,
}: ListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      numColumns={numColumns}
      horizontal={isHorizontal}
      style={{width: '100%'}}
      contentContainerStyle={{}}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={refreshFunction}></RefreshControl>
      }
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={
        <Text variant="bodyLarge">
          {isRefreshing ? `Cargando...` : ListEmptyText}
        </Text>
      }></FlatList>
  );
};
