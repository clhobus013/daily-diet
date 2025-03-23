import { Container, Content, Header, IconButton, ScoreDescription, ScoreValue, StatRow, Title } from "./styles";
import { StatCard } from "@components/StatCard";
import { useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { MealDTO } from "src/dtos/MealDTO";

export function Statistics() {
  const [meals, setMeals] = useState<MealDTO[]>([]);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function getMeals() {
    try {
      const meals = await mealGetAll();

      setMeals(meals);
    } catch (error) {
      Alert.alert("Buscar refeições", "Não foi possível carregar as informações");
    }
  }

  function getScoreValue() {
    const mealsWithinDiet = meals.filter(meal => meal.isWithinDiet)
    return ((mealsWithinDiet.length / meals.length ) * 100);
  }

  function getLongestDietStreak(){
    let maxStreak = 0;
    let currentStreak = 0;

    for (const meal of meals) {
        if (meal.isWithinDiet) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }

    return maxStreak.toString();
  }

  useEffect(() => {
    getMeals();
  }, [])

  return (
    <Container progress={getScoreValue()}>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <IconButton progress={getScoreValue()}/>
        </TouchableOpacity>
        <ScoreValue>{getScoreValue().toFixed(2).replace(".", ",")}%</ScoreValue>
        <ScoreDescription>das refeições dentro da dieta</ScoreDescription>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <StatRow>
          <StatCard
            title={getLongestDietStreak()}
            description="melhor sequência de pratos dentro da dieta"
          />
        </StatRow>
        <StatRow>
          <StatCard
            title={meals.length.toString()}
            description="refeições registradas"
          />
        </StatRow>
        <StatRow>
          <StatCard
            title={meals.filter(meal => meal.isWithinDiet).length.toString()}
            description="refeições dentro da dieta"
            variant="success"
          />
          <StatCard
            title={meals.filter(meal => !meal.isWithinDiet).length.toString()}
            description="refeições fora da dieta"
            variant="error"
          />
        </StatRow>
      </Content>
    </Container>
  );
}
