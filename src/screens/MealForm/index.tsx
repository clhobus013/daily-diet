import { useState } from "react";
import { Alert, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";
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

export function MealForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [meal, setMeal] = useState<MealDTO>({
        id: '',
        name: '',
        description: '',
        date: new Date(),
        time: new Date(),
        isWithinDiet: null
    });

    const navigation = useNavigation();

    async function handleSubmit() {
        try {
            setIsLoading(true);

            if(!meal.name || !meal.description || meal.isWithinDiet === null ){
                throw new AppError("Por favor, preencha todos os campos");
            }

            navigation.navigate('mealDetails');
            await MealCreate(meal);
            
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
                mode: 'date'
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
                        Cadastrar refeição
                    </Button.Title>
                </Button>
            </Content>
        </Container>
    )
}