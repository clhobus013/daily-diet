import { Container, Status, Title } from "./styles";

type Props = {
    isWithinDiet: boolean;
}

export function MealTag({isWithinDiet}: Props) {

    const label = isWithinDiet ? "Dentro da dieta" : "Fora da dieta";

    return( 
        <Container>
            <Status isWithinDiet={isWithinDiet}/>
            <Title>{label}</Title>
        </Container>
    )
}