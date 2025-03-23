import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/dtos/MealDTO";

export async function mealGetById(id: string) {
    try {
        const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
        const mealsParsed: MealDTO[] = storage ? JSON.parse(storage) : [];

        const mealsFiltered = mealsParsed.filter(meal => meal.id === id);
        const meal = mealsFiltered.length > 0 ? mealsFiltered[0] : null;

        if (meal) {
            meal.date = new Date(meal.date);
            meal.time = new Date(meal.time);
        }

        return meal;
    } catch (error) {
        throw error;
    }
}