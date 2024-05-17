import { TouchableRipple } from "react-native-paper";
import { CustomBoolean } from "../../components";
import { Card, ItemGroup, MaterialIcon, Spacer, Title } from "../../components/shared"
import { useThemeStore } from "../../shared";
import { Switch, Text, View } from "react-native";

interface Props {
    text: string;
    icon: string;

    onPress: () => void;
}

export const OpcionPerfilDarkTheme = ( {
    text,
    icon,
    onPress
}:Props
 ) => {

    const {theme: {theme, themeInfo} } = useThemeStore();

    const hanldePress = () => {


        onPress();
    }

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
                    <Switch 
                        value={themeInfo.isDarkTheme}
                        onValueChange={hanldePress}
                    />
                </ItemGroup>
            </Card>
        </>
    )
}