import { Pressable, StyleProp, Text, TextStyle } from "react-native"
import { useContext, useEffect, useState } from "react"
import { lightenColor } from "../../helpers"
import { useThemeStore } from "../../shared"
import { fonts } from "../../theme"

export interface TitleProps {
    text?: string
    size?: 'ant-man' | 'very-tiny' | 'tiny' | 'small' | 'medium' | 'large'
    style?: StyleProp<TextStyle>
    color?: string
    align?: 'center' | 'left' | 'right'
    marginVertical?: number
    marginHorizontal?: number
    weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extra-bold' | 'black'
    uppercase?: boolean

    onPress?: () => void
}

export const Title = ({
    text,
    size = 'medium',
    color ,
    align = 'left',
    style,
    weight = 'semibold',
    marginVertical = 0,
    marginHorizontal = 0,
    uppercase = false,

    onPress
}: TitleProps
) => {

    const [titelSize, setTitleSize] = useState<number>(0)
    const [titleWeight, setTitleWeight] = useState<string>('')
    const {
        theme: { theme, themeInfo }
     } = useThemeStore();

    useEffect(() => {
        switch (size) {
            case 'ant-man':
                setTitleSize(9)
                break
            case 'very-tiny':
                setTitleSize(10)
                break
            case 'tiny':
                setTitleSize(12)
                break
            case 'small':
                setTitleSize(14)
                break
            case 'medium':
                setTitleSize(16)
                break
            case 'large':
                setTitleSize(20)
                break
            default:
                setTitleSize(24)
                break
        }
    }, [size])

    useEffect(() => {
        switch (weight) {
            case 'light':
                setTitleWeight(fonts.light)
                break
            case 'regular':
                setTitleWeight(fonts.regular)
                break
            case 'medium':
                setTitleWeight(fonts.medium)
                break
            case 'semibold':
                setTitleWeight(fonts.semiBold)
                break
            case 'bold':
                setTitleWeight(fonts.bold)
                break
            case 'extra-bold':
                setTitleWeight(fonts.extraBold)
                break
            case 'black':
                setTitleWeight(fonts.black)
                break
            default:
                setTitleWeight(fonts.semiBold)
                break
        }
    }, [weight])

    const textStyle: StyleProp<TextStyle> = [
        {
            fontSize: titelSize,
            fontFamily: titleWeight,
            color: color ? color : theme.colors.onSurfaceVariant,
            textAlign: align,
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            textTransform: uppercase ? 'uppercase' : 'none'
        },
        themeInfo.isDarkTheme && {
            color: color ? color : theme.colors.onSurfaceVariant
        }
    ]

    return (
        <>
        
            {
                onPress ? (
                    <Pressable onPress={onPress}>
                        <Text style={[textStyle, style]}>{text}</Text>
                    </Pressable>
                ) : (
                    <Text style={[textStyle, style]}>{text}</Text>
                )
            }

        </>
    )   
}