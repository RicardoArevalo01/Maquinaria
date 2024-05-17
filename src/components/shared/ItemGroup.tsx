import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";

export interface ItemGroupProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    direction?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    paddinHorizontal?: number;
    paddingVertical?: number;
    flexGrow?: number;
    width?: DimensionValue;
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const ItemGroup = ( {
    children,
    style,
    direction = 'row',
    justifyContent = 'space-between',
    alignItems = 'center',
    paddinHorizontal = 0,
    paddingVertical = 0,
    width = 'auto',
}:ItemGroupProps ) => {
    return (
        <View
            style={[
                {
                    flexDirection: direction,
                    alignItems: alignItems,
                    justifyContent: justifyContent,
                    paddingHorizontal: paddinHorizontal,
                    paddingVertical: paddingVertical,
                    width, 
                },
                style
            ]}
        >
            {children}
        </View>
    )
}