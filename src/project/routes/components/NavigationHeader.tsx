import { View } from "react-native"
import { useThemeStore } from "../../../shared";
import { ItemGroup, Title } from "../../../components/shared";
import Icon from "react-native-vector-icons/MaterialIcons";
import { icons } from "../../../theme";
import { useNavigation } from "@react-navigation/native";

interface Props {

    goProfile?: boolean;
    goBack?: boolean;
    name?: string;

}

export const NavigationHeader = ( {
    goProfile,
    goBack,
    name
}:Props
 ) => {

    const {theme: {theme, themeInfo} } = useThemeStore();
    const navigation = useNavigation();

    return (

        <>

            <View
                style={{
                    backgroundColor: theme.colors.elevation.level5,
                    elevation: 0,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ItemGroup
                    paddinHorizontal={25}
                    width={'100%'}
                >
                    {
                        goBack && (
                            <Icon 
                                name='arrow-back'
                                size={25}
                                color={theme.colors.onSurface}
                                onPress={() => navigation.goBack()}
                            />
                        )
                    }
                    <Title 
                        text={name || 'Maquinarias Enriques'}
                        color={theme.colors.onSurface}
                    />
                    {
                        goProfile && (
                            <Icon 
                                name={icons.profile}
                                size={30}
                                color={theme.colors.onSurface}
                                onPress={() => navigation.navigate('PerfilScreen' as never)}
                            />
                        )
                    }
                </ItemGroup>
            </View>
        </>

    )
} 