import { StyleProp, Text, TextStyle } from "react-native"
import { useContext } from "react"
import { useThemeStore } from "../../shared"

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

    const {
        theme: { theme, themeInfo }
    } = useThemeStore();
    
    return (

        <Text
            style={[
                {
                    fontSize: 25,
                    textAlign: align,
                    fontWeight: 'bold',
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