import { ArrowLeft } from "phosphor-react-native";
import { Container, IconButton, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Header() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return(
        <Container>
            <IconButton onPress={handleGoBack}>
                <ArrowLeft/>
            </IconButton>
            <Title>Nova Refeição</Title>
        </Container>
    )
}