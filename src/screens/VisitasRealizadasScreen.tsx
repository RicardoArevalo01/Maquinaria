import { ScrollView, Text, View } from "react-native"
import { Button, Card, HeaderTitle, ScreenContainer, Spacer, Title } from "../components/shared"
import { colors } from "../theme/globals"

export const VisitasRealizadasScreen = (  ) => {
    return (

        <ScreenContainer
            scroll
            style={{
                backgroundColor: colors.light,
            }}
        >
            <HeaderTitle text="Vistas Realizadas" />

            <Title 
                text="Historial de visitas"
                size="tiny"
                weight="regular"
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

            

        </ScreenContainer>

    )
}