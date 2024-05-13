import { View } from "react-native"

export interface SpacerProps {
    size?: number
}

export const Spacer = ( {
    size = 5
}: SpacerProps ) => {
    return (

        <View style={{
            margin: size
        }}/>

    )
}