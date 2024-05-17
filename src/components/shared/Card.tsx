import { useState } from "react"
import { DimensionValue, Pressable, StyleProp, View } from "react-native"
import { darkenColor, lightenColor } from "../../helpers"
import { useThemeStore } from "../../shared"

export interface CardProps {
    children?: React.ReactNode
    style?: StyleProp<StyleMedia>
    elevation?: number
    margin?: number
    marginHorizontal?: number
    marginVertical?: number
    color?: string
    paddingVertical?: number
    paddingHorizontal?: number
    padding?: number
    borderRadious?: number
    width?: DimensionValue

    onPress?: () => void
    onLongPress?: () => void
}

export const Card = ( { 
    children, 
    style, 
    elevation = 0, 
    margin= 0,
    marginHorizontal = 20,
    marginVertical = 0,
    color,
    paddingVertical,
    paddingHorizontal,
    padding = 20,
    borderRadious = 10,
    width = '100%',

    onPress,
    onLongPress
}:CardProps ) => {

    const [cardPressed, setCardPressed] = useState(false)
    const { theme: {theme, themeInfo} } = useThemeStore();

    const CardStyles = [
        {
            padding: padding,
            paddingVertical: paddingVertical ? paddingVertical : 20,
            paddingHorizontal: paddingHorizontal ? paddingHorizontal : 20,
            backgroundColor: color ? color : theme.colors.elevation.level2,
            borderRadius: borderRadious,
            width: width,
            flex: 0,
            elevation: elevation,
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
                style={{ width: width }}
            >
                <View
                    style={{ 
                        width: '100%', 
                        alignSelf: 'center',
                        padding: margin,
                        paddingHorizontal: marginHorizontal,
                        paddingVertical: marginVertical,
                        backgroundColor: 'transparent'
                    }}
                >
                    <View style={CardStyles}>
                        {children}
                    </View>
                </View>
                
            </Pressable>
        ):
        (
            <View
                style={{ 
                    width: width, 
                    alignSelf: 'center',
                    padding: margin,
                    paddingHorizontal: marginHorizontal,
                    paddingVertical: marginVertical,
                    backgroundColor: 'transparent'
                }}
            >
                <View style={CardStyles}>
                    {children}
                </View>
            </View>
        )

    )
}