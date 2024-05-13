import { StyleProp, Text, TextStyle } from "react-native"
import { font } from "../../theme/font"
import { colors } from "../../theme/globals"

export interface HeaderTitleProps {   
    text?: string,
    align?: 'center' | 'left' | 'right'
    style?: StyleProp<TextStyle>
    color?: string  
}

export const HeaderTitle = ( { 
    text, 
    align = 'left', 
    style ,
    color = colors.dark
}: HeaderTitleProps ) => {
    return (

        <Text
            style={[
                {
                    fontSize: 25,
                    textAlign: align,
                    fontFamily: font.semiBold,
                    color: color,
                    marginTop: 10
                },
                style
            ]}
        >
            {text}
        </Text>

    )
}