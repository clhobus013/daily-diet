import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Icon, IconButton, Progress, Text } from "./styles";

type Props = TouchableOpacityProps & {
    progress: number;
}

export function DietProgress({progress, ...rest}: Props) {
    const navigation = useNavigation();

    return(
        <Container progress={progress}>
            <IconButton {...rest} onPress={() => navigation.navigate("statistics")}>
                <Icon progress={progress}/>
            </IconButton>
            <Progress>{progress.toFixed(2).replace(".", ",")}%</Progress>
            <Text>das refeições dentro da dieta</Text>
        </Container>
    )
}