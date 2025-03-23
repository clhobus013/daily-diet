import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { MealDTO } from "src/dtos/MealDTO";
import { AppError } from "src/@utils/AppError";
import { mealGetById } from "@storage/meal/mealGetById";
import { mealRemoveById } from "@storage/meal/mealRemoveById";
import { Container, Content, Description, Details, Subtitle, Title } from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealTag } from "@components/MealTag";
import { AlertModal } from "@components/AlertModal";

type RouteParams = {
    mealId: string;
}

export function MealDetails() {
    const [ meal, setMeal ] = useState<MealDTO | null>(null);
    const [ showModal, setShowModal] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { mealId } = route.params as RouteParams;

    function handleEditMeal() {
        navigation.navigate('mealForm', {mealId: meal!.id});
    }

    async function getMeal() {
        try {
            const meal = await mealGetById(mealId);
            setMeal(meal);
        } catch (error) {
            let message = "Não foi possível buscar as informações";

            if(error instanceof AppError){
                message = error.message;
            }

            Alert.alert("Detalhes da refeição", message);
        }
    }

    async function handleStorageMealRemove() {
        try {

            await mealRemoveById(meal!.id);
            navigation.navigate('home');
            
        } catch (error) {
            let message = "Não foi possível remover a refeição";

            if(error instanceof AppError){
                message = error.message;
            }

            Alert.alert("Exclusão da refeição", message);
        } finally {
            setShowModal(false);
        }
    }

    function handleToggleModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        getMeal();
    }, [mealId])

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

                    <Button variant="secondary" onPress={handleToggleModal}>
                        <Button.Icon icon={Trash} color={theme.COLORS.GRAY_100}/>
                        <Button.Title>Excluir refeição</Button.Title>
                    </Button>

                    <AlertModal visible={showModal} onCancel={handleToggleModal} onSuccess={handleStorageMealRemove}/>
                </Content>
            )}
        </Container>
    )
}