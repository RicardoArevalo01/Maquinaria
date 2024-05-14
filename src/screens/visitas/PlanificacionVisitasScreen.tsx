import { Button, Text } from "react-native"
import { BaseModal, BaseScreen } from "../../Template"
import { HeaderTitle } from "../../components/shared"
import { CustomFAB } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { SeleccionarClienteVisitaModal } from "./SeleccionarClienteVisitaModal"


export const PlanificacionVisitasScreen = (  ) => {

    const [showModal, setShowModal] = useState(false);

    return (

        <BaseScreen>
            <HeaderTitle 
                text="Planificación de Visitas"
            />

            <CustomFAB 
                label="Nueva Visita"
                icon="plus"
                onPress={() => setShowModal(true)}
            />

            <SeleccionarClienteVisitaModal 
                setOpenModal={showModal}
                CloseFunction={() => setShowModal(false)}
            />
            
        </BaseScreen>

    )
}