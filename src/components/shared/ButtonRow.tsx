import { StyleProp, View, ViewStyle } from "react-native"

export interface ButtonRowProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const ButtonRow = ({
    children,
    style,
}:ButtonRowProps) => {
    return (

        <View
            style={[
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                },
                style
            ]}
        >

            {children}
            
        </View>

    )
}