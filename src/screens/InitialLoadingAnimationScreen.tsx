import { useNavigation } from "@react-navigation/native"
import LottieView from 'lottie-react-native';
import { useEffect, useState } from "react";

export const InitialLoadingAnimationScreen = (  ) => {

    const auth = true;

    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)

    //cambiar de pantalla despues de 3 segundos
    useEffect(() => {
        // Navega a otra pantalla después de 3000 ms (3 segundos)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate((auth ? 'App' : 'AuthStackNavigation') as never)
        }, 900);
    });

    return (
        <>
            {
                // mostrar por 3 segundos el componente InitialLoadingAnimationScreen

                loading && 
                <LottieView source={require('../assets/Loader/initial-loading.json')} autoPlay loop style={{
                    flex: 1,
                    height: 100,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>

            }


        </>

    )
}