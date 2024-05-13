
import { useNavigation } from "@react-navigation/native"
import { ScreenContainer, Title, Spacer, Button } from "../components/shared"
import { InputText } from "../components/CustomUiKitten/Inputs/InputText"
import { useEffect, useState } from "react"
import { colors } from "../theme/globals"

export const LoginScreen = (  ) => {

    const navigation = useNavigation()

    const [loginForm, setLoginForm] = useState({
        usuario: '',
        password: ''
    })
    const [returnData, setReturnData] = useState({
        data: {
            

           
        },

        error:{
            password: '',
            usuario: ''
        }
    })

    useEffect(() => {
        console.log(loginForm)
    }, [loginForm])

    return (
        <>
            <ScreenContainer style={{
                backgroundColor: 'white',
                padding: 40,
                paddingBottom: 150,
                justifyContent: 'center'
            }}>

                
                    <Title 
                        text="Iniciar Sesión" 
                        align="center" 
                        uppercase 
                        weight="bold" 
                        onPress={() => console.log('click')}
                    />
                    <Title text="Maquinarias Enriques" align="center" size="small" weight="regular" />
                    
                    <Spacer size={10} />

                    <InputText 
                        label="Usuario:"
                        placeholder="Coloque su usuario"
                        icon="person"
                        status={returnData.error.usuario ? 'danger' : 'basic'}
                        caption={returnData.error.usuario}
                        value={loginForm.usuario}
                        returnValue={(value) => setLoginForm({...loginForm, usuario: value})}
                    />

                    <Spacer />

                    <InputText 
                        label="Contraseña:"
                        placeholder="Coloque su contraseña"
                        icon="lock"
                        password
                        status={returnData.error.password ? 'danger' : 'basic'}
                        caption={returnData.error.password}
                        value={loginForm.password}
                        returnValue={(value) => setLoginForm({...loginForm, password: value})}
                    />

                    <Spacer />
                    
                    <Button 
                        text="Ingresar"     
                        onPress={() => navigation.navigate('App' as never)}
                        color={colors.primary}
                        icon="arrow-forward"
                        iconAlign="right"
                    />

                    <Title 
                        text="Olvidé mi contraseña" 
                        size="very-tiny" 
                        color={colors.primary} 
                        align="right" 
                        weight="medium" 
                        marginVertical={5}
                        onPress={() => navigation.navigate('OlvidePassword' as never)}
                    />

                        
               
            </ScreenContainer>
        
        </>

    )
}