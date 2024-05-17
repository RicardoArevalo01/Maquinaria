import React, {useEffect, useState} from 'react';
import {CustomSearchInput} from './CustomSearchInput';
import {CustomList, ListProps} from './CustomList';

interface Props<T> extends ListProps<T> {
  placeholder?: string;
  textCompare?: (item: T) => string[];
  children?: JSX.Element | JSX.Element[];
}

export const SearchListFilter = <T extends unknown>({
  data,
  renderItem,
  ListEmptyText,
  refreshFunction,
  numColumns = 1,
  isHorizontal = false,
  loadMore,
  placeholder,
  textCompare,
  children,
}: Props<T>) => {
  const [result, setResult] = useState(data);
  useEffect(() => {
    setResult(data);
  }, [data]);

  return (
    <>
      {textCompare && (
        <CustomSearchInput
          placeholder={placeholder ?? ''}
          catalog={data}
          textCompare={textCompare}
          result={setResult}
        />
      )}
      {children}
      <CustomList
        data={result}
        renderItem={renderItem}
        ListEmptyText={ListEmptyText}
        refreshFunction={refreshFunction}
        numColumns={numColumns}
        isHorizontal={isHorizontal}
        loadMore={loadMore}
      />
    </>
  );
};
