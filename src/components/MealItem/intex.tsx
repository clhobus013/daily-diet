import { Container, Divider, MealCard, Status, Time, Title } from "./styles";

export function MealItem() {
    return(
        <Container>
            <Time>12:00</Time>
            <Divider/>

            <MealCard>
                <Title>Almoço</Title>
                <Status/>
            </MealCard>
        </Container>
    )
}