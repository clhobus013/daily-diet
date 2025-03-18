import { ArrowLeft } from "phosphor-react-native";
import { Container, IconButton, Title } from "./styles";

export function Header() {
    return(
        <Container>
            <IconButton>
                <ArrowLeft/>
            </IconButton>
            <Title>Nova Refeição</Title>
        </Container>
    )
}