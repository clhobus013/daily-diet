import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/dtos/MealDTO";

export async function MealCreate(meal: MealDTO) {
    try {
        const mealParse = JSON.stringify(meal);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${meal.id}`, mealParse);
    } catch (error) {
        throw error;
    }

}