import { Card, Text } from "react-native-paper"
import { useContext, useEffect, useState } from "react";
import { CustomButton, CustomSelector, SearchListFilter } from "../../components";
import { Button, ButtonRow, Title } from "../../components/shared";
import { lightenColor } from "../../helpers/lightenColor";
import { useNavigation } from "@react-navigation/native";
import { useThemeStore } from "../../shared";
import { BaseModal } from "../../theme";

interface SeleccionarClienteVisitaModalProps {
    setOpenModal: boolean
    CloseFunction: () => void
}   

export const SeleccionarClienteVisitaModal = ( {
    setOpenModal = true,
    CloseFunction,

}: SeleccionarClienteVisitaModalProps ) => {

    const [showModal, setShowModal] = useState(false);
    const { 
        theme: {theme, themeInfo},
        onToggleTheme
     } = useThemeStore();
    const navigation = useNavigation();

    useEffect(() => {
        setOpenModal ? setShowModal(true) : setShowModal(false);
    }, [setOpenModal])

    const handleShowModal = () => {
        CloseFunction()
        setShowModal(false);
    }

    const handleNavigate = () => {
        setShowModal(false);
        CloseFunction(),
        navigation.navigate('RegistrarVisita' as never);
    }

    return (

        <BaseModal
                isVisible={showModal}
                CloseFunction={handleShowModal}
                animationType="fade"
                isAlert={false}
            >
                <Card
                    style={{
                        width: '85%',
                        padding: 10,
                        margin: 10
                    }}
                >
                    <Title 
                        text="Seleccionar Cliente"
                        align="center"
                        size="medium"
                    />

                    <CustomSelector
                        catalog= {[
                            {id: 1, name: 'Cliente 1'},
                            {id: 2, name: 'Cliente 2'},
                            {id: 3, name: 'Cliente 3'},
                            {id: 4, name: 'Cliente 4'},
                            {id: 5, name: 'Cliente 5'},
                        ]}
                        getResult={(result  ) =>{console.log(result as ({
                            id: number;
                            name: string;
                        }))}}
                        keyProperty={'name'}  
                        type="single"

                    />
                    

                    <ButtonRow>
                        <Button
                            flex={1}
                            text="Cancelar"
                            icon="close"
                            color={theme.colors.error}
                            onPress={handleShowModal}
                        />

                        <Button
                            text="Aceptar"
                            onPress={handleNavigate}
                            flex={1}
                            icon="check"
                            iconAlign="right"
                        />
                    </ButtonRow>
                    
                    
                </Card>
            </BaseModal>

    )
}