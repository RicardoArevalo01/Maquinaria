
import { Text } from "react-native"
import { Button, Card, HeaderTitle, ScreenContainer, Spacer, Title } from "../components/shared"
import { colors } from "../theme/globals"
import { FloatButton } from "../components/shared/FloatButton"
import { useNavigation } from "@react-navigation/native"

export const PlanificacionVisitasScreen = (  ) => {

    const navigation = useNavigation()

    return (

        <ScreenContainer >
                <HeaderTitle text="Planificación de visitas" />

                <Button 
                    text="Crear visita"
                    onPress={() => {}}
                />

                <Spacer  />

                <Title 
                    text="Visitas programadas"
                    size="tiny"
                />

                <Card elevation={1}>
                    <Title 
                        text="Planificación de visitas"
                        size="tiny"
                    />
                    <Text>
                        Planificación de visitas
                    </Text>
                </Card>

                <Card elevation={1}>
                    <Title 
                        text="Planificación de visitas"
                        size="tiny"
                    />
                    <Text>
                        Planificación de visitas
                    </Text>
                </Card>

                <FloatButton 
                    text="Agregar visita" 
                    onPress={() => navigation.navigate('RegistrarVisita' as never)}
                    icon="add"
                />

        </ScreenContainer>

    )
}