import { Pressable } from "react-native"

export interface IconButtonProps {
    icon?: React.ReactNode
    size?: 'tiny' | 'small' | 'medium' | 'large'
    color?: string
    disabled?: boolean
    marginVertical?: number

    onPress?: () => void
    onLongPress?: () => void

}

export const Iconbutton = (  ) => {
    return (

        <Pressable>

            

        </Pressable>

    )
}