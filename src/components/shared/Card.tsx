import { useContext, useState } from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"
import { ThemeContext } from "../../context"
import { darkenColor, lightenColor } from "../../helpers"

export interface CardProps {
    children?: React.ReactNode
    style?: StyleProp<ViewStyle>
    elevation?: number
    gap?: number
    color?: string

    onPress?: () => void
    onLongPress?: () => void
}

export const Card = ( { 
    children, 
    style, 
    elevation = 0, 
    gap= 0,
    color,

    onPress,
    onLongPress
}:CardProps ) => {

    const [cardPressed, setCardPressed] = useState(false)
    const {theme, themeInfo} = useContext(ThemeContext);

    const CardStyles = [
        {
            padding: 20,
            backgroundColor: color ? color : theme.colors.elevation.level2,
            borderRadius: 10,
            margin: gap,
            flex: 0,
            elevation: elevation,
            marginVertical: 5
        },
        cardPressed && {
            backgroundColor: color ? darkenColor(color, 0.03) : darkenColor(theme.colors.elevation.level2, 0.03)
        },
        cardPressed && themeInfo.isDarkTheme && {
            backgroundColor: color ? lightenColor(color, 0.03) : lightenColor(theme.colors.elevation.level2, 0.03)
        },
        style
    ]

    return (

        onPress ? (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                onPressIn={() => setCardPressed(true)}
                onPressOut={() => setCardPressed(false)}
            >
                <View style={CardStyles}>
                    {children}
                </View>
            </Pressable>
        ):
        (
            <View style={CardStyles}>
                {children}
            </View>
        )

    )
}