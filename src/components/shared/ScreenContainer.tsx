import { StyleProp, View, ViewStyle, ScrollView } from "react-native"
import { colors } from "../../theme/globals"

export interface ScreenContainerProps {
    children?: React.ReactNode
    style?: StyleProp<ViewStyle>
    scroll?: boolean
    padding?: number
    color?: string
}

export const ScreenContainer = ( {
    children, 
    style,
    scroll = false,
    padding = 20,
    color = colors.light
}: ScreenContainerProps  ) => {

    if(scroll) return (
        <ScrollView>
            <View
                style={[
                    {
                        flex: 1,
                        padding: padding,
                        backgroundColor: color
                    },
                    style
                ]}
            >
                {children}
            </View>
        </ScrollView>
    )

    return (

        <View
            style={[
                {
                    flex: 1,
                    padding: padding,
                    backgroundColor: color
                },
                style
            ]}
        >
            {children}
        </View>

    )
}