import { View } from "react-native"

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ScreenContainer = ( {children}:Props ) => {
    return (

        <View>
            {children}
        </View>

    )
}