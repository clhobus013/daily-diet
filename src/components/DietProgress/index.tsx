import { TouchableOpacityProps } from "react-native";
import { Container, Icon, IconButton, Progress, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {

}

export function DietProgress({...rest}: Props) {

    const navigation = useNavigation();

    return(
        <Container>
            <IconButton {...rest} onPress={() => navigation.navigate("statistics")}>
                <Icon/>
            </IconButton>
            <Progress>90,86%</Progress>
            <Text>das refeições dentro da dieta</Text>
        </Container>
    )
}