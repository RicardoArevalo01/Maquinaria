import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useContext, useEffect, useState } from "react"
import { lightenColor, darkenColor } from "../../helpers"
import { useThemeStore } from "../../shared"
import { fonts } from "../../theme"

export interface ButtonProps {
    text?: string
    icon?: React.ReactNode
    iconAlign?: 'left' | 'right' | 'center'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    color?: string
    innerColor?: string
    outiline?: boolean
    disabled?: boolean
    marginVertical?: number
    style?: StyleProp<ViewStyle>
    flex?: number
    marginHorizontal?: number

    onPress?: () => void
    onLongPress?: () => void
}   

export const Button = ( {
    text, 
    icon,
    iconAlign = 'left',
    innerColor,
    size = 'medium',
    color,
    outiline = false,
    disabled = false,
    marginVertical = 5,
    flex = 0,
    style,
    marginHorizontal = 5,

    onLongPress, 
    onPress
}: ButtonProps ) => {
    
    const { 
        theme: {theme, themeInfo},
    } = useThemeStore();
    
    const [buttonSize, setButtonSize] = useState<number>(0)
    const [buttonPress, setButtonPress] = useState<boolean>(false)


    useEffect(() => {
        switch (size) {
            case 'tiny':
                setButtonSize(4)
                break;
            case 'small':
                setButtonSize(7)
                break;
            case 'medium':
                setButtonSize(10)
                break;
            case 'large':
                setButtonSize(12)
                break;
        }
    }, [size])

    const handleOnPress = () => {

        if(disabled) return
        onPress && onPress()

    }

    const handleOnLongPress = () => {
            
        if(disabled) return
        onLongPress && onLongPress()
    
    }

    return (
  
        <Pressable style={[
            {
                backgroundColor: color ? color : theme.colors.primary,
                padding: buttonSize,
                marginHorizontal: marginHorizontal,
                borderRadius: 10,
                flex: flex,
                marginVertical: marginVertical,
                flexDirection: 'row',
                alignItems: 'center',
            },
            buttonPress && {
                backgroundColor: color ? darkenColor(color, 0.3) : darkenColor(theme.colors.primary, 0.3)
            },
            disabled && {
                backgroundColor: color ? lightenColor(color, 0.8) : lightenColor(theme.colors.primary, 0.8),
            },
            outiline && {
                borderWidth: 1.5,
                borderColor: color ? color : theme.colors.primary,
                backgroundColor: 'transparent'
            },
            outiline && disabled && {
                borderColor: color ? lightenColor(color, 0.8) : lightenColor(theme.colors.primary, 0.8)
            },
            style
        ]}
            onPress={ handleOnPress }
            onLongPress={ handleOnLongPress }
            onPressIn={() => setButtonPress(true)}
            onPressOut={() => setButtonPress(false)}
        >
            {

                icon && iconAlign === 'left' && (
                    <Icon 

                        name={icon as string} 
                        size={buttonSize + 8} 
                        style={[
                            {
                                position: 'absolute',
                                paddingTop: 2,
                                marginLeft: 14,
                                color: innerColor ? innerColor : theme.colors.onPrimary,
                                alignSelf: 'center'
                            },
                            (themeInfo.isDarkTheme && innerColor) ? {
                                color: darkenColor(innerColor, 0.3)
                            }: {},
                            (themeInfo.isDarkTheme && !innerColor) ? {
                                color: color ? darkenColor(color, 0.8) : darkenColor(theme.colors.onPrimary, 0.8)
                            }: {},
                            outiline && {
                                color: innerColor ? innerColor : theme.colors.primary
                            },
                        ]}
                    />
                )

            }
            
            <Text style={[
                {
                    fontSize: buttonSize + 4,
                    textAlign: 'center',
                    fontFamily: fonts.semiBold,
                    flex: 1,
                    color: innerColor ? innerColor : theme.colors.onPrimary,
                    ...(icon && iconAlign === 'left' ? { marginLeft: 12 } : {}),
                    ...(icon && iconAlign === 'right' ? { marginRight: 12 } : {})
                },
                disabled && {
                    color: color ? lightenColor(color, 0.8) : lightenColor(theme.colors.primary, 0.8)
                },
                outiline && {
                    color: color ? color : theme.colors.primary
                },
                themeInfo.isDarkTheme && !outiline &&{
                    color: color ? darkenColor(color, 0.8) : darkenColor(theme.colors.onPrimary, 0.8)
                }
            ]}>
                {text}
            </Text>

            {
                icon && iconAlign === 'right' && (
                    <Icon 
                        name={icon as string} 
                        size={buttonSize + 8} 
                        style={[
                            {
                                position: 'absolute',
                                paddingTop: 2,
                                right: 0,  
                                marginRight: 14,
                                color: innerColor ? innerColor : theme.colors.onPrimary,
                                alignSelf: 'center'
                            },
                            (themeInfo.isDarkTheme && innerColor) ? {
                                color: darkenColor(innerColor, 0.3)
                            }: {},
                            (themeInfo.isDarkTheme && !innerColor) ? {
                                color: color ? darkenColor(color, 0.8) : darkenColor(theme.colors.onPrimary, 0.8)
                            }: {},
                            outiline && {
                                color: innerColor ? innerColor : theme.colors.primary
                            },
                        ]}
                    />
                )

            }
            {

                (outiline && !disabled && buttonPress) && 
                <View style={[
                    buttonPress && {
                        backgroundColor: color ? darkenColor(color, 0.3) : darkenColor(theme.colors.primary, 0.3),
                        opacity: 0.1
                    },
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 10
                    }
                ]}/>

            }
        </Pressable>
    )
}