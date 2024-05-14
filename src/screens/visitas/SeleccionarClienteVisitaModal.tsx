import { Button, Card, Text } from "react-native-paper"
import { BaseModal } from "../../Template"
import { useContext, useEffect, useState } from "react";
import { CustomButton, CustomSelector, SearchListFilter } from "../../components";
import { ItemContainer, Title } from "../../components/shared";
import { ThemeContext } from "../../context";
import { lightenColor } from "../../helpers/lightenColor";
import { useNavigation } from "@react-navigation/native";

interface SeleccionarClienteVisitaModalProps {
    setOpenModal: boolean
    CloseFunction: () => void
}   

export const SeleccionarClienteVisitaModal = ( {
    setOpenModal = true,
    CloseFunction,

}: SeleccionarClienteVisitaModalProps ) => {

    const [showModal, setShowModal] = useState(false);
    const {theme} = useContext(ThemeContext);
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

                    {/* <SearchListFilter
                    textCompare={(item) => [item.name]}
                        data={[
                            {id: 1, name: 'Cliente 1'},
                            {id: 2, name: 'Cliente 2'},
                            {id: 3, name: 'Cliente 3'},
                            {id: 4, name: 'Cliente 4'},
                            {id: 5, name: 'Cliente 5'},
                            {id: 6, name: 'Cliente 6'},
                            {id: 7, name: 'Cliente 7'},
                            {id: 8, name: 'Cliente 8'},
                            {id: 9, name: 'Cliente 9'},
                            {id: 10, name: 'Cliente 10'},
                        ]}
                        renderItem={(item) => <Text>{item.name}</Text>}
                        ListEmptyText="No hay clientes"
                        refreshFunction={() => {}}
                    /> */}

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
                    

                    <ItemContainer
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <CustomButton 
                            onPress={handleShowModal}
                            title="Cerrar"
                            icon="close"
                            type="contained-tonal"
                            color={theme.colors.error}
                        />
                        <CustomButton 
                            onPress={handleNavigate}
                            title="Registrar Visita"
                            icon="plus"
                            iconPosition="right"
                        />
                        
                    </ItemContainer>

                    
                    
                </Card>
            </BaseModal>

    )
}