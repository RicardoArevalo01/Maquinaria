
import { useNavigation } from "@react-navigation/native"
import { InputText } from "../components/CustomUiKitten/Inputs/InputText"
import { Button, HeaderTitle, ScreenContainer, Spacer } from "../components/shared"
import { colors } from "../theme/globals"
import { Text } from "react-native"

export const OlvidePasswordScreen = (  ) => {

    const navigation = useNavigation()

    return (

        <ScreenContainer
            color={"white"}
            style={{
                padding: 40,
                paddingBottom: 150,
                justifyContent: 'center'
            }}
        >
            <HeaderTitle align="center" text="Recuperar contraseña" />
            

            
            <Text style={{
                textAlign: 'center',
                color: colors.grey
            }}>
                Se envirá un correo electrónico con las instrucciones para recuperar su contraseña
            </Text>

            <Spacer size={10} />

            <InputText 
                label="Correo electrónico:"
                placeholder="Coloque su correo electrónico"
                icon="email"
                keyboardType="email-address"
            />
            <Spacer size={5} />
            
            <Button 
                text="Enviar"
                color={colors.primary}
                onPress={() => navigation.navigate('Login' as never)}
            />

            <Button 
                text="Volver al inicio de sesión"
                outiline
                color={colors.primary}
                onPress={() => navigation.navigate('Login' as never)}
                icon='arrow-back'
            />

            

            

        </ScreenContainer>

    )
}