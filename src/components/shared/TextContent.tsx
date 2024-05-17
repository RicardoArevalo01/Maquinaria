import { useContext, useState } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { useThemeStore } from "../../shared";
import { fonts } from "../../theme";

export interface TextContentProps {
    content?: string;
    style?: StyleProp<TextStyle>;
    color?: string;
    align?: 'center' | 'left' | 'right';
    marginVertical?: number;
    marginHorizontal?: number;
    fontFamily?: string;
    uppercase?: boolean;
}

export const TextContent = ( {
    content,
    color,
    align = 'left',
    style,
    fontFamily,
    marginVertical = 0,
    marginHorizontal = 0,
    uppercase = false
}: TextContentProps ) => {

    const {
        theme: { theme, themeInfo }
    } = useThemeStore();
  

    return (

        <Text style={[
            {
                color: color ? color : theme.colors.onSurface,
                textAlign: align,
                marginVertical: marginVertical,
                marginHorizontal: marginHorizontal,
                fontFamily: fontFamily ? fontFamily : fonts.regular,
            },
        ]}>
            {content}
        </Text>

    )
}