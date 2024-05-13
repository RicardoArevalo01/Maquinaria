import { Pressable, StyleProp, Text, TextStyle } from "react-native"
import { font } from "../../theme/font"
import { colors } from "../../theme/globals"
import { useEffect, useState } from "react"

export interface TitleProps {
    text?: string
    size?: 'very-tiny' | 'tiny' | 'small' | 'medium' | 'large'
    style?: StyleProp<TextStyle>
    color?: string
    align?: 'center' | 'left' | 'right'
    marginVertical?: number
    marginHorizontal?: number
    weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold'
    uppercase?: boolean

    onPress?: () => void
}

export const Title = ({
    text,
    size = 'medium',
    color = colors.dark,
    align = 'left',
    style,
    weight = 'semiBold',
    marginVertical = 0,
    marginHorizontal = 0,
    uppercase = false,

    onPress
}: TitleProps
) => {

    const [titelSize, setTitleSize] = useState(0)
    const [titleFontWeight, setTitleFontWeight] = useState('')

    useEffect(() => {
        switch (size) {
            case 'very-tiny':
                setTitleSize(13)
                break
            case 'tiny':
                setTitleSize(15)
                break
            case 'small':
                setTitleSize(18)
                break
            case 'medium':
                setTitleSize(20)
                break
            case 'large':
                setTitleSize(22)
                break
            default:
                setTitleSize(24)
                break
        }
    }, [size])

    useEffect(() => {
        switch (weight) {
            case 'light':
                setTitleFontWeight(font.light)
                break
            case 'regular':
                setTitleFontWeight(font.regular)
                break
            case 'medium':
                setTitleFontWeight(font.medium)
                break
            case 'semiBold':
                setTitleFontWeight(font.semiBold)
                break
            case 'bold':
                setTitleFontWeight(font.bold)
                break
            default:
                setTitleFontWeight(font.semiBold)
                break
        }
    }, [weight])

    const textStyle: StyleProp<TextStyle> = {
        fontSize: titelSize,
        fontFamily: titleFontWeight,
        color: color,
        textAlign: align,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
        textTransform: uppercase ? 'uppercase' : 'none'
    }

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