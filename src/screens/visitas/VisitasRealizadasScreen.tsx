import { Text } from "react-native"
import { BaseScreen } from "../../Template"
import { HeaderTitle } from "../../components/shared"
import { CustomFAB } from "../../components"
import { useNavigation } from "@react-navigation/native"


export const VisitasRealizadasScreen = (  ) => {

    const navigation = useNavigation();

    return (

        <BaseScreen>
            <HeaderTitle 
                text="Visitas Realizadas"
            />

            <CustomFAB 
                label="Nueva Visita"
                icon="plus"
                onPress={() => navigation.navigate('SeleccionarClienteVisita' as never)}
            />
        </BaseScreen>

    )
}