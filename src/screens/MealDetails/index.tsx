import { Button } from "@components/Button";
import { Container, Content, Description, Details, Subtitle, Title } from "./styles";
import { MealTag } from "@components/MealTag";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { mealGetById } from "@storage/meal/mealGetById";
import { AppError } from "src/@utils/AppError";
import { MealDTO } from "src/dtos/MealDTO";

export function MealDetails() {
    const [ meal, setMeal ] = useState<MealDTO | null>(null);

    const navigation = useNavigation();

    const theme = useTheme();

    function handleEditMeal() {
        navigation.navigate('mealForm');
    }

    async function getMeal() {
        try {
            const meal = await mealGetById('');
            setMeal(meal);
        } catch (error) {
            let message = "Não foi possível buscar as informações";

            if(error instanceof AppError){
                message = error.message;
            }

            Alert.alert("Detalhes da refeição", message);
        }
    }

    useEffect(() => {
        getMeal();

        console.log(meal);
    }, [])

    return (
        <Container>
            <Header/>

            {meal === null ? (<></>) : (
                <Content>
                    <Details>
                        <Title>{meal.name}</Title>
                        <Description>{meal.description}</Description>

                        <Subtitle>Data e hora</Subtitle>
                        <Description>{meal.date.toLocaleDateString()} as {meal.time.toLocaleTimeString().slice(0, 5)}</Description>

                        <MealTag isWithinDiet={meal.isWithinDiet ?? false}/>
                    </Details>

                    <Button onPress={handleEditMeal}>
                        <Button.Icon icon={PencilSimpleLine} />
                        <Button.Title>Editar refeição</Button.Title>
                    </Button>

                    <Button variant="secondary">
                        <Button.Icon icon={Trash} color={theme.COLORS.GRAY_100}/>
                        <Button.Title>Excluir refeição</Button.Title>
                    </Button>
                </Content>
            )}
        </Container>
    )
}