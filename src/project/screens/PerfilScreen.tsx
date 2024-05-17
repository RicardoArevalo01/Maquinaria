import { View } from "react-native"
import { Card, ItemGroup, MaterialIcon, ProfilePic, Spacer, Title } from "../../components/shared"
import { BaseScreen } from "../../theme"
import { useAuthStore, useThemeStore } from "../../shared";
import { capitalizeWords } from "../../helpers/capitalizeWords";
import Icon from "react-native-vector-icons/MaterialIcons";
import { OpcionPerfil } from "../components/OpcionPerfil";
import { OpcionPerfilDarkTheme } from "../components/OpcionPerfilDarkTheme";
import { Alert } from "../../utils";
import { useNavigation } from "@react-navigation/native";

export const PerfilScreen = (  ) => {

    const { theme: { theme, themeInfo } , onToggleTheme } = useThemeStore();
    const navigation = useNavigation();

    const {
        auth: {status, jwtInfo},
        logOut,
      } = useAuthStore();

    const handleLogout = () => {
        Alert.show('yesno', {
            title: 'Aviso',
            message: '¿Desea cerrar sesión?',
            onPress: logOut,
        });
    };

    return (

        <BaseScreen>
            <Spacer size={10}/>
            <Card
                color={theme.colors.elevation.level1}
                paddingVertical={15}
            >
                <ItemGroup
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <ProfilePic 
                        size={100}
                    />
                    <ItemGroup
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Title
                            text={capitalizeWords(jwtInfo?.firstName || 'name') + ' ' + capitalizeWords(jwtInfo?.lastName || 'lastname')}
                            weight='bold'
                        />


                        <Title
                            text={jwtInfo?.userName || 'username'}
                            weight='regular'
                            size="small"
                        />

                        <Title
                            text={capitalizeWords(jwtInfo?.role || 'Rol')}
                            weight='bold'
                            size="tiny"
                            align="right"
                        />          
                    </ItemGroup>
                </ItemGroup>
                
            </Card>
            
            <OpcionPerfilDarkTheme 
                text={"Establecer Tema " + (themeInfo.isDarkTheme ? 'Claro' : 'Oscuro')}
                icon={themeInfo.isDarkTheme ? 'light-mode' : 'dark-mode'}
                onPress={() => onToggleTheme()}
            />

            <OpcionPerfil 
                text="Cambiar Contraseña"
                icon="lock"
                onPress={() => navigation.navigate('CambiarContraseña' as never)}
            /> 

            <OpcionPerfil 
                text="Cerrar Sesión"
                icon="logout"
                onPress={handleLogout}
            />

            
        
        </BaseScreen>

    )
}