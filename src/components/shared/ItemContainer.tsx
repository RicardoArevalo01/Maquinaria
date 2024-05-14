import { StyleProp, View, ViewStyle } from "react-native"

export interface ItemContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const ItemContainer = ({
    children,
    style,
}:ItemContainerProps) => {
    return (

        <View
            style={style}
        >

            {children}
            
        </View>

    )
}