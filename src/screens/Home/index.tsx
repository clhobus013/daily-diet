import { useCallback, useState } from "react";
import { Alert, SectionList} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";

import { MealDTO } from "src/dtos/MealDTO";
import { MealsByDayDTO } from "src/dtos/MealsByDayDTO";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { Container, MealSectionHeader, Text } from "./styles";

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { DietProgress } from "@components/DietProgress";
import { MealItem } from "@components/MealItem/intex";

export function Home() {
    const [meals, setMeals] = useState<MealsByDayDTO[]>([]);

    const navigation = useNavigation();

    async function storageMealGetAll() {
        try {
            const meals = await mealGetAll();

            const sortedMeals = [...meals].sort((a, b) => {
                if (b.date.getTime() !== a.date.getTime()) {
                  return b.date.getTime() - a.date.getTime(); // Ordena por data
                }
                return b.time.getTime() - a.time.getTime(); // Se a data for igual, ordena por horário
            });

            const groupedMeals = sortedMeals.reduce<{ title: string; data: MealDTO[] }[]>((acc, meal) => {
                const dateStr = meal.date.toLocaleDateString();
              
                let section = acc.find((s) => s.title === dateStr);
              
                if (!section) {
                  section = { title: dateStr, data: [] };
                  acc.push(section);
                }
              
                section.data.push(meal);
                return acc;
            }, []);

            setMeals(groupedMeals);
        } catch (error) {
            Alert.alert("Buscar refeições", "Não foi possível carregar as informações");
        }
    }

    function handleNewMeal() {
        navigation.navigate('mealForm', {});
    }

    function getProgress() {
        const allMeals = meals.flatMap(day => day.data);

        const totalMeals = allMeals.length;
        if (totalMeals === 0) return 0;

        // Contar refeições dentro da dieta
        const mealsWithinDiet = allMeals.filter(meal => meal.isWithinDiet).length;
        return (mealsWithinDiet / totalMeals) * 100;
    }
    
    useFocusEffect(useCallback(() => {
        storageMealGetAll();
    }, []));

    return(
        <Container>
            <HomeHeader/>
            <DietProgress progress={getProgress()}/>

            <Text>Refeições</Text>
            <Button onPress={handleNewMeal}>
                <Button.Icon icon={Plus}/>
                <Button.Title>Nova refeição</Button.Title>
            </Button>

            <SectionList
                style={{flex: 1}}
                sections={meals}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <MealItem title={item.name} time={item.time.toLocaleTimeString().slice(0, 5)} isWithinDiet={item.isWithinDiet} onPress={() => navigation.navigate('mealDetails', {mealId: item.id})}/>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <MealSectionHeader>{title}</MealSectionHeader>
                )}

            />
        </Container>
    )
}