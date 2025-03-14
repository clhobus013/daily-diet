import { Button } from "@components/Button";
import { Bold, Container, Image, Subtitle, Title } from "./styles";

export function Feedback() {
    return (
        <Container>
            <Title>Continue assim !</Title>
            <Subtitle>Voce continua <Bold>dentro da dieta.</Bold> Muito bem!</Subtitle>
            <Image source={require("@assets/feedback_success.png")}/>
            <Button>
                <Button.Title>Ir para a página inicial</Button.Title>
            </Button>
        </Container>
    )
}