import { Card, ItemGroup, MaterialIcon, Spacer, Title } from "../../components/shared"
import { useThemeStore } from "../../shared";

interface Props {
    text: string;
    icon: string;

    onPress: () => void;
}

export const OpcionPerfil = ( {
    text,
    icon,
    onPress
}:Props
 ) => {

    const {theme: {theme} } = useThemeStore();

    return (
    
        <>
        <Spacer size={7}/>
        <Card
                paddingVertical={15}
                color={theme.colors.elevation.level1}
                onPress={onPress}
                style={{marginVertical: 0}}
            >
                <ItemGroup>
                    <ItemGroup>
                        <MaterialIcon 
                            name={icon} 
                            size={20} 
                            style={{marginRight: 10}}
                            color={theme.colors.onSurfaceVariant}
                        />
                        <Title text={text} size="small"/>
                    </ItemGroup>
                    <MaterialIcon 
                            name='arrow-forward-ios' 
                            size={18} 
                        />
                </ItemGroup>
            </Card>
        </>
    )
}