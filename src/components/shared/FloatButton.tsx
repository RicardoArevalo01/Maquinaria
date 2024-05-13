import { Pressable } from "react-native"
import { colors } from "../../theme/globals"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useState } from "react"
import { darkenColor } from "../../helpers"
import { Title } from "./Title"

export interface FloatButtonProps {
    icon?: React.ReactNode
    text?: string
    color?: string
    align?: 'left' | 'right' 
    disabled?: boolean

    onPress?: () => void
    onLongPress?: () => void
}

export const FloatButton = ( {

    icon,
    text,
    color = colors.secondary,
    align = 'right',
    disabled = false,

    onPress,
    onLongPress

}: FloatButtonProps ) => {

    const [buttonPress, setButtonPress] = useState(false)


    return (

        <Pressable
            style={[
                {
                    position: 'absolute',
                    bottom: 18,
                    backgroundColor: color,
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                    borderRadius: 10,
                    elevation: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                buttonPress && {
                    backgroundColor: darkenColor(color, 0.2)
                },
                align == 'left' && { left: 15 },
                align == 'right' && { right: 15 }
            ]}
            onPress={ onPress }
            onLongPress={ onLongPress }
            onPressIn={() => setButtonPress(true)}
            onPressOut={() => setButtonPress(false)}
        >

            <Icon 
                name={icon as string}
                size={22}
                color="white"
                style={[
                    align == 'left' && { marginLeft: 5 },
                    align == 'right' && { marginRight: 5 }
                ]}
            />

            <Title
                size="very-tiny"
                text={text as string}
                color="white"
                weight="semiBold"
            />
            
        </Pressable>

    )
}