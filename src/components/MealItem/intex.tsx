import { TouchableOpacityProps } from "react-native";
import { Container, Divider, MealCard, Status, Time, Title } from "./styles";

type Props = TouchableOpacityProps & {
    time: string;
    title: string;
    isWithinDiet: boolean;
}

export function MealItem({time, title, isWithinDiet, ...rest}: Props) {
    return(
        <Container {...rest}>
            <Time>{time}</Time>
            <Divider/>

            <MealCard>
                <Title>{title}</Title>
                <Status isWithinDiet={isWithinDiet}/>
            </MealCard>
        </Container>
    )
}