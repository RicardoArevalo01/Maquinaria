import { Pressable, StyleProp, Text, TextStyle } from "react-native"
import { useContext, useEffect, useState } from "react"
import { fonts } from "../../theme/appFonts"
import { ThemeContext } from "../../context"

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
    color ,
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
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        switch (size) {
            case 'very-tiny':
                setTitleSize(12)
                break
            case 'tiny':
                setTitleSize(14)
                break
            case 'small':
                setTitleSize(16)
                break
            case 'medium':
                setTitleSize(18)
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
                setTitleFontWeight(fonts.light)
                break
            case 'regular':
                setTitleFontWeight(fonts.regular)
                break
            case 'medium':
                setTitleFontWeight(fonts.medium)
                break
            case 'semiBold':
                setTitleFontWeight(fonts.semiBold)
                break
            case 'bold':
                setTitleFontWeight(fonts.bold)
                break
            default:
                setTitleFontWeight(fonts.semiBold)
                break
        }
    }, [weight])

    const textStyle: StyleProp<TextStyle> = {
        fontSize: titelSize,
        fontFamily: titleFontWeight,
        color: theme.colors.onSurfaceVariant,
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