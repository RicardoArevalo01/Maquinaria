import React, {useEffect} from 'react';
import {BaseScreen} from '../../theme';
import {useGetPostsQuery} from '../../services';
import {CustomList} from '../../components';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

export const ProfileScreen = () => {
  const isFocused = useIsFocused();
  const {
    data,
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
    currentData,
  } = useGetPostsQuery();

  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused]);

  useEffect(() => {
    console.log({error});
  }, [error]);

  useEffect(() => {
    console.log({isFetching});
  }, [isFetching]);

  return (
    <BaseScreen>
      <CustomList
        data={data ?? []}
        renderItem={item => <Text>{item.title}</Text>}
        ListEmptyText={'No hay Posts'}
        refreshFunction={refetch}
        isRefreshing={isLoading}
      />
    </BaseScreen>
  );
};
