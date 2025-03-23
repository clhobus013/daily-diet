import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/dtos/MealDTO";

export async function mealGetAll() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
        const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

        meals.map(meal => {
            meal.date = new Date(meal.date);
            meal.time = new Date(meal.time);
        })

        return meals;
    } catch (error) {
        throw error;
    }
}