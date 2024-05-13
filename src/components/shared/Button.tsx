import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"
import { colors } from "../../theme/globals"
import { darkenColor, lightenColor } from "../../helpers"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useEffect, useState } from "react"

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

    onPress?: () => void
    onLongPress?: () => void
}   

export const Button = ( {
    text, 
    icon,
    iconAlign = 'left',
    innerColor = colors.primary,
    size = 'medium',
    color = colors.primary,
    outiline = false,
    disabled = false,
    marginVertical = 5,

    onLongPress, 
    onPress
}: ButtonProps ) => {
    
    const [buttonSize, setButtonSize] = useState<number>(0)
    const [buttonColor, setButtonColor] = useState<string>('')
    const [buttonPress, setButtonPress] = useState<boolean>(false)

    useEffect(() => {
        if(disabled) return;
        
        if(color == colors.light) setButtonColor(innerColor)
        else setButtonColor('white')

        if(outiline) setButtonColor(color)

    }, [color, disabled, outiline])


    useEffect(() => {
        switch (size) {
            case 'tiny':
                setButtonSize(5)
                break;
            case 'small':
                setButtonSize(8)
                break;
            case 'medium':
                setButtonSize(10)
                break;
            case 'large':
                setButtonSize(13)
                break;
        }
    }, [size])

    return (

        <Pressable style={[
            {
                backgroundColor: color && !outiline ? color : 'transparent',
                padding: buttonSize,
                borderRadius: 10,
                flex: 0,
                marginVertical: marginVertical,
                flexDirection: 'row',
            },
            outiline && {
                borderWidth: 1,
                borderColor: color ? color : colors.secondary
            },
            disabled && {
                backgroundColor: lightenColor(color, 0.6)
            },
            buttonPress && {
                backgroundColor: darkenColor(color, 0.2)
            },
            (buttonPress && outiline) && {
                backgroundColor: 'transparent',
                borderColor: darkenColor(color, 0.2)
            }
        ]}
            onPress={ onPress }
            onLongPress={ onLongPress }
            onPressIn={() => setButtonPress(true)}
            onPressOut={() => setButtonPress(false)}
        >
            {

                icon && iconAlign === 'left' && (
                    <Icon 
                        name={icon as string} 
                        size={buttonSize + 15} 
                        style={{
                            position: 'absolute',
                            padding: buttonSize - 2,
                            marginLeft: 9,
                            color: buttonColor
                        }}
                    />
                )

            }
            
            <Text style={[
                {
                    fontSize: buttonSize + 6,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    flex: 1,
                    color: buttonColor,
                }
            ]}>
                {text}
            </Text>

            {

                icon && iconAlign === 'right' && (
                    <Icon 
                        name={icon as string} 
                        size={buttonSize + 15} 
                        style={{
                            position: 'absolute',
                            padding: buttonSize - 2,
                            marginRight: 9,
                            top: 0,
                            right: 0,
                            color: buttonColor
                        }}
                    />
                )

            }
            {

                (outiline && !disabled && buttonPress) && 
                <View style={[
                    buttonPress && {
                        backgroundColor: darkenColor(color, 0.2),
                        opacity: 0.05
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