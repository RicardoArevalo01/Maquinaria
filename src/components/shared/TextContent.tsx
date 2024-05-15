import { useContext, useState } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { ThemeContext } from "../../context";
import { fonts } from "../../theme/appFonts";

export interface TextContentProps {
    content?: string;
    style?: StyleProp<TextStyle>;
    color?: string;
    align?: 'center' | 'left' | 'right';
    marginVertical?: number;
    marginHorizontal?: number;
    weight?: string;
    uppercase?: boolean;
}

export const TextContent = ( {
    content,
    color,
    align = 'left',
    style,
    weight = fonts.regular,
    marginVertical = 0,
    marginHorizontal = 0,
    uppercase = false
}: TextContentProps ) => {

    const {theme} = useContext(ThemeContext);
  

    return (

        <Text style={[
            {
                color: color ? color : theme.colors.onSurface,
                textAlign: align,
                marginVertical: marginVertical,
                marginHorizontal: marginHorizontal,
                fontFamily: weight
            },
        ]}>
            {content}
        </Text>

    )
}