import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { MealForm } from "@screens/MealForm";
import { Statistics } from "@screens/Statistics";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="feedback"
                component={Feedback}
            />
            <Screen
                name="mealDetails"
                component={MealDetails}
            />
            <Screen
                name="mealForm"
                component={MealForm}
            />
            <Screen
                name="statistics"
                component={Statistics}
            />
        </Navigator>
    )
}