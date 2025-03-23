export type MealDTO = {
    id: string;
    name: string;
    description: string;
    date: Date;
    time: Date;
    isWithinDiet: boolean | null;
}