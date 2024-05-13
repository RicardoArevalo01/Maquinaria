import { Text, View } from "react-native"
import { ScreenContainer } from "../components/shared"
import { AutocompleteMultiselect } from "../components/CustomUiKitten/Inputs/AutocompleteMultiselect"
import { Autocomplete, AutocompleteItem } from "@ui-kitten/components";
import { useCallback, useState } from "react";

const movies = [
    { title: 'Star Wars' },
    { title: 'Back to the Future hajhsakhaskashkhsahks' },
    { title: 'The Matrix' },
    { title: 'Inception' },
    { title: 'Interstellar' },
  ];

export const RegistrarVisitaScreen = (  ) => {

    const [value, setValue] = useState(null);
    const [data, setData] = useState(movies);

    const filter = (item: any , query: string): boolean => item.title.toLowerCase().includes(query.toLowerCase());

    const onSelect = useCallback((index : number): void => {
        setValue(data[index].title);
    }, [data]);

  const onChangeText = useCallback((query): void => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  }, []);

  const renderOption = (item, index): React.ReactElement => (

        <AutocompleteItem
            key={index}
            title={item.title}
        /> 
    
  );

    return (

        <ScreenContainer>
            <Autocomplete
                style={{
                    alignSelf: 'center',
                    position: 'relative',
                    top: 20,
                }}
                placeholder='Place your Text'
                value={value}
                placement='inner top'
                onSelect={onSelect}
                onChangeText={onChangeText}
                textStyle={{
                    width: '95%',
                    alignSelf: 'center',
                    position: 'absolute',
                    right: 0,
                    left: 0,
                }}
            >
                {data.map(renderOption)}
            </Autocomplete>
        </ScreenContainer>

    )
}