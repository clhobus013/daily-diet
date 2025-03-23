import { Button } from "@components/Button";
import { Bold, Container, Image, Subtitle, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteProps = {
    isWithinDiet: boolean;
}

export function Feedback() {
    const navigation = useNavigation();
    const route = useRoute();

    const image = {
        success: require("@assets/feedback_success.png"),
        fail: require("@assets/feedback_fail.png")
    }

    const { isWithinDiet } = route.params as RouteProps;

    const title =  isWithinDiet ? "Continue assim !" : "Que pena!";
    const source = isWithinDiet ? image.success : image.fail;

    function handleGoHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Title isWithinDiet={isWithinDiet}>{title}</Title>
            {isWithinDiet ?  
                <Subtitle>Você continua <Bold>dentro da dieta.</Bold> Muito bem!</Subtitle> :
                <Subtitle>Você <Bold>saiu da dieta.</Bold> dessa vez, mas continue se esforçando e não desista!</Subtitle>
            }
            <Image source={source}/>
            <Button onPress={handleGoHome}>
                <Button.Title>Ir para a página inicial</Button.Title>
            </Button>
        </Container>
    )
}