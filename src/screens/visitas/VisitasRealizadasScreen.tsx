import { Text } from "react-native"
import { BaseScreen } from "../../Template"
import { FloatButton, HeaderTitle } from "../../components/shared"
import { CustomFAB } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { SeleccionarClienteVisitaModal } from "./SeleccionarClienteVisitaModal"
import { useState } from "react"


export const VisitasRealizadasScreen = (  ) => {
    
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

    return (

        <BaseScreen>
            <HeaderTitle 
                text="Visitas Realizadas"
            />

            <FloatButton 
                text="Nueva Visita"
                icon="add"
                onPress={() => setShowModal(true)}
            />

            <SeleccionarClienteVisitaModal 
                setOpenModal={showModal}
                CloseFunction={() => setShowModal(false)}
            />
        </BaseScreen>

    )
}