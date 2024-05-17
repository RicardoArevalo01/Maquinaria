import { Text } from "react-native"
import { Button, Card, FloatButton, HeaderTitle, ProfilePic, Title } from "../../components/shared"
import { CustomFAB } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from "react"

import { SeleccionarClienteVisitaModal } from "./SeleccionarClienteVisitaModal"
import { useThemeStore } from "../../shared"
import { BaseScreen } from "../../theme"


export const PlanificacionVisitasScreen = (  ) => {

    const [showModal, setShowModal] = useState(false);
    const {
        theme: {theme, themeInfo},
        onToggleTheme
    } = useThemeStore();
    

    return (

        <BaseScreen>
 
            <Card>
                <Title 
                    weight='medium'
                    size="small"
                    text='Filtrar:'
                />  
            </Card> 
            
            <ProfilePic 
                size={90}
                onPress={() => console.log('ProfilePic')}
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