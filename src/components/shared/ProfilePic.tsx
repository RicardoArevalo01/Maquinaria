import { DimensionValue, Image, Pressable, StyleProp, View, ViewStyle } from "react-native"
import { useAuthStore, useThemeStore } from "../../shared";
import { Title } from "./Title";
import { Text } from "react-native-paper";
import { fonts } from "../../theme";
import { firstLettersName } from "../../helpers/firtsLettersName";
import { useState } from "react";
import { darkenColor } from "../../helpers";

export interface ProfilePicProps {

    image?: string;
    size?: number | DimensionValue;
    color?: string;
    border?: boolean;
    borderSize?: number;
    borderColor?: string;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;

    onPress?: () => void;
    onLongPress?: () => void;
}

export const ProfilePic = ( {

    image,
    border = false,
    borderSize = 5,
    borderColor,
    backgroundColor,
    size = 20,
    style,
    color,

    onPress,
    onLongPress

}:ProfilePicProps ) => {

    const { theme: { theme } } = useThemeStore();
    const [profilePressed, setProfilePressed] = useState(false)

    const {
        auth: {status, jwtInfo},
      } = useAuthStore();
    
    return (

        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            onPressIn={() => setProfilePressed(true)}
            onPressOut={() => setProfilePressed(false)}
        >
            {
               ( profilePressed && onPress || onLongPress) && (
                    <View
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            backgroundColor: darkenColor(color ? color : theme.colors.primary, 0.5),
                            opacity: 0.1,
                            height: size,
                            width: size,
                            borderRadius: 100,
                            ...(style as any),
                        }}
                    />
                )
            }
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color ? color : theme.colors.elevation.level5,
                    height: size,
                    width: size,
                    borderRadius: 100,
                    marginRight: 20,
                    ...(style as any),
                }}
            >
                {
                    image ? (
                        <Image
                            source={{uri: image}}
                            style={{
                                height: size,
                                width: size,
                                borderRadius: 100,
                                borderWidth: border ? borderSize : 0,
                                borderColor: borderColor ? borderColor : theme.colors.elevation.level5,
                                backgroundColor: backgroundColor ? backgroundColor : theme.colors.elevation.level5,
                            }}
                        />
                    ) : (
                        <Text
                            style={{
                                color: theme.colors.primary,
                                fontSize: size as number / 2.5,
                                fontFamily: fonts.semiBold,
                            }}
                        >
                            {firstLettersName(jwtInfo?.firstName + ' ' + jwtInfo?.lastName)}
                        </Text>
                    )
                }
            </View>
        </Pressable>

    )
}