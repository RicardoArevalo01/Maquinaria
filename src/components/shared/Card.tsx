import { StyleProp, View, ViewStyle } from "react-native"

export interface CardProps {
    children?: React.ReactNode
    style?: StyleProp<ViewStyle>
    elevation?: number
    gap?: number
}

export const Card = ( { 
    children, 
    style, 
    elevation = 0, 
    gap= 0 
}:CardProps ) => {
    return (

        <View style={[
            {
                padding: 20,
                backgroundColor: 'white',
                borderRadius: 10,
                margin: gap,
                flex: 0,
                elevation: elevation,
                marginVertical: 5
            },
            style
        ]}>
            {children}
        </View>

    )
}