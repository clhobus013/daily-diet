import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealRemoveById(id: string) {
    try {
        const meals = await mealGetAll();
        const mealsFiltered = meals.filter(meal => meal.id !== id );

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsFiltered));
    } catch (error) {
        throw error;
    }
}