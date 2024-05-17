import { StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useThemeStore } from "../../shared";

export interface MaterialIconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
}

export const MaterialIcon = ( {
    name,
    size = 25,
    color,
    style

}:MaterialIconProps ) => {

    const {theme: {theme} } = useThemeStore();

    return (

        <Icon

            name={name}
            size={size}
            color={color ? color : theme.colors.primary}
            style={style}
        
        />


    )
}