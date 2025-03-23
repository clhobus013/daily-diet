import { useEffect, useState } from "react";
import { Alert, Platform } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { MealDTO } from "src/dtos/MealDTO";
import { AppError } from "src/@utils/AppError";
import { Container, Content, FormDate, FormInputs } from "./styles";

import { MealCreate } from "@storage/meal/mealCreate";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { RadioInput } from "@components/RadioInput";
import { DateTimeButton } from "@components/DateTimeButton";
import { mealGetById } from "@storage/meal/mealGetById";

type RouteParams = {
    mealId?: string
}

export function MealForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [meal, setMeal] = useState<MealDTO>({
        id: `${Date.now()}-${Math.random().toString(5)}`,
        name: '',
        description: '',
        date: new Date(),
        time: new Date(),
        isWithinDiet: false
    });
    
    const navigation = useNavigation();
    const route = useRoute();
    
    const { mealId } = route.params as RouteParams || {};

    async function storageMealGet() {
        try {
            const meal = await mealGetById(mealId!);
            if(meal) {
                setMeal(meal);
            }
        } catch (error) {
            Alert.alert("Editar refeição", "Não foi possível carregar as informações");
        }
    }
    
    async function handleSubmit() {
        try {
            setIsLoading(true);

            if(!meal.name || !meal.description ){
                throw new AppError("Por favor, preencha todos os campos");
            }

            await MealCreate(meal);
            navigation.navigate('feedback', {isWithinDiet: meal.isWithinDiet});
            
        } catch (error) {
            let message = "Não foi possível salvar a refeição";

            if(error instanceof AppError){
                message = error.message;
            }

            Alert.alert("Cadastro refeição", message);
        } finally {
            setIsLoading(false);
        }
    }

    const showDatePicker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: meal.date,
                onChange: (event, selectedDate) => {
                    if (event.type === 'set' && selectedDate) {
                        setMeal(prevMeal => ({ ...prevMeal, date: selectedDate }));
                    }
                },
                mode: 'date',
            });
        }
    };

    const showTimePicker = () => {
        if (Platform.OS === 'android') {
            DateTimePickerAndroid.open({
                value: meal.time,
                onChange: (event, selectedTime) => {
                    if (event.type === 'set' && selectedTime) {
                        setMeal(prevMeal => ({ ...prevMeal, time: selectedTime }));
                    }
                },
                mode: 'time',
                is24Hour: true
            });
        }
    };

    useEffect(() => {
        if(!!mealId){
            storageMealGet();
        }
    }, [])

    return (
        <Container>
            <Header />

            <Content>
                <FormInputs>
                    <Input
                        label="Nome"
                        value={meal.name}
                        onChangeText={(value) => setMeal(prevMeal => ({ ...prevMeal, name: value }))}
                    />
                    <Input
                        label="Descrição"
                        value={meal.description}
                        onChangeText={(value) => setMeal(prevMeal => ({ ...prevMeal, description: value }))}
                        numberOfLines={4}
                        multiline
                        style={{ height: 120 }}
                        textAlignVertical="top"
                    />
                    <FormDate>
                        <DateTimeButton
                            label="Data"
                            value={meal.date.toLocaleDateString()}
                            onPress={showDatePicker}
                        />
                        <DateTimeButton
                            label="Hora"
                            value={meal.time.toLocaleTimeString().slice(0, 5)}
                            onPress={showTimePicker}
                        />
                    </FormDate>

                    <RadioInput 
                        label="Está dento da dieta?" 
                        options={[
                            { name: "Sim", variant: "success", value: true },
                            { name: "Não", variant: "error", value: false }
                        ]}
                        selectedValue={meal.isWithinDiet}
                        onValueChange={(value) => setMeal(prevMeal => ({ ...prevMeal, isWithinDiet: value }))}
                    />
                </FormInputs>

                <Button variant="primary" onPress={handleSubmit} disabled={isLoading}>
                    <Button.Title>
                        { mealId ? "Salvar alterações" : "Cadastrar refeição" }
                    </Button.Title>
                </Button>
            </Content>
        </Container>
    )
}