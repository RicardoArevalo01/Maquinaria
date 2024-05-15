import { Pressable, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useContext, useState } from "react"
import { darkenColor } from "../../helpers"
import { ThemeContext } from "../../context"
import { fonts } from "../../theme/appFonts"

export interface FloatButtonProps {
    icon?: React.ReactNode
    text?: string
    color?: string
    align?: 'left' | 'right' 
    disabled?: boolean

    onPress?: () => void
    onLongPress?: () => void
}

export const FloatButton = ( {

    icon,
    text,
    color,
    align = 'right',
    disabled = false,

    onPress,
    onLongPress

}: FloatButtonProps ) => {

    const [buttonPress, setButtonPress] = useState(false)

    const {theme, themeInfo} = useContext(ThemeContext);


    return (

        <Pressable
            style={[
                {
                    position: 'absolute',
                    bottom: 18,
                    backgroundColor: color ? color : theme.colors.primary,
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                    borderRadius: 10,
                    elevation: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                buttonPress && {
                    backgroundColor: color? darkenColor(color, 0.3) : darkenColor(theme.colors.primary, 0.3)
                },
                align == 'left' && { left: 15 },
                align == 'right' && { right: 15 }
            ]}
            onPress={ onPress }
            onLongPress={ onLongPress }
            onPressIn={() => setButtonPress(true)}
            onPressOut={() => setButtonPress(false)}
        >

            <Icon 
                name={icon as string}
                size={22}
                color="white"
                style={[
                    align == 'left' && { marginLeft: 5 },
                    align == 'right' && { marginRight: 5 },
                    themeInfo.isDarkTheme && { 
                        color: color ? darkenColor(color, 0.8) : darkenColor(theme.colors.primary, 0.8)
                    }
                ]}
            />

            <Text
                style={[
                    {
                        color: theme.colors.onPrimary,
                        fontFamily: fonts.semiBold,
                        fontSize: 14,
                        marginLeft: 5
                    },
                    themeInfo.isDarkTheme && { 
                        color: color ? darkenColor(color, 0.8) : darkenColor(theme.colors.primary, 0.8) 
                    }
                ]}
            >
                {text}
            </Text>
            
        </Pressable>

    )
}