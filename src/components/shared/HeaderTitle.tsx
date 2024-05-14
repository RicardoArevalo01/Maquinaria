import { StyleProp, Text, TextStyle } from "react-native"
import { fonts } from "../../theme/appFonts"
import { useContext } from "react"
import { ThemeContext } from "../../context"

export interface HeaderTitleProps {   
    text?: string,
    align?: 'center' | 'left' | 'right'
    style?: StyleProp<TextStyle>
}

export const HeaderTitle = ( { 
    text, 
    align = 'left', 
    style ,
}: HeaderTitleProps ) => {

    const {theme} = useContext(ThemeContext);
    
    return (

        <Text
            style={[
                {
                    fontSize: 25,
                    textAlign: align,
                    fontFamily: fonts.bold,
                    color: theme.colors.onSurfaceVariant,
                    marginTop: 5,
                },
                style
            ]}
        >
            {text}
        </Text>

    )
}