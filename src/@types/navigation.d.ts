export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            feedback: {
                IsWithinDiet: boolean;
            };
            mealDetails: {
                mealId: string;
            };
            mealForm: {
                mealId?: string;
            };
            statistics: undefined;
        }
    }
}