import { Text } from "react-native"
import { BaseModal, BaseScreen } from "../../Template"
import { Button, Card, FloatButton, HeaderTitle, Title } from "../../components/shared"
import { CustomFAB } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from "react"

import { SeleccionarClienteVisitaModal } from "./SeleccionarClienteVisitaModal"
import { ThemeContext } from "../../context"


export const PlanificacionVisitasScreen = (  ) => {

    const [showModal, setShowModal] = useState(false);
    const {theme , toggleTheme, changeThemeColor} = useContext(ThemeContext);
    

    return (

        <BaseScreen>
            <HeaderTitle 
                text="Planificación de Visitas"
            />

            
 
            <Card>
                <Title 
                    weight='medium'

                    size="small"
                    text='Visitas programadas'
                />  
            </Card> 

            <Button 
                text="Seleccionar Cliente"
                icon="add"
                onPress={() => toggleTheme()}
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