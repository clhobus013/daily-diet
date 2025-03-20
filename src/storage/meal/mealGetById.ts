import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "src/dtos/MealDTO";

export async function mealGetById(id: string) {
    try {
        const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${id}`);
        const mealParsed: MealDTO = storage ? JSON.parse(storage) : null;

        mealParsed.date = new Date(mealParsed.date);
        mealParsed.time = new Date(mealParsed.time);

        console.log("MEAL STORAGE", mealParsed);

        return mealParsed;
    } catch (error) {
        throw error;
    }
}