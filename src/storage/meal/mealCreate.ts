import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/dtos/MealDTO";
import { mealGetAll } from "./mealGetAll";

export async function MealCreate(newMeal: MealDTO) {
    try {
        const meals = await mealGetAll();
        const mealIndex = meals.map(meal => meal.id).indexOf(newMeal.id);

        if(mealIndex >= 0) {
            meals[mealIndex] = newMeal;
        } else {
            meals.push(newMeal);
        }

        const mealsParse = JSON.stringify(meals);
        await AsyncStorage.setItem(MEAL_COLLECTION, mealsParse);
    } catch (error) {
        throw error;
    }

}