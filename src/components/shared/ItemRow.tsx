import { StyleProp, View, ViewStyle } from "react-native";

export interface ItemRowProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const ItemRow = ( {
    children,
    style,
    justifyContent = 'flex-start'
}:ItemRowProps ) => {
    return (

        <View
            style={[
                {
                    flexDirection: 'row',
                    justifyContent: justifyContent,
                },
                style
            ]}
        >

            {children}
            
        </View>

    )
}