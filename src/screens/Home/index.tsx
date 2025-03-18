import { SectionList} from "react-native";
import { Container, MealSectionHeader, Text } from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { DietProgress } from "@components/DietProgress";
import { Button } from "@components/Button";
import { MealItem } from "@components/MealItem/intex";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {

    const navigation = useNavigation();

    const sections = [
        {
          title: '12.08.22',
          data: ['X-tudo', 'Whey', 'Salada'],
        },
        {
          title: '11.08.22',
          data: ['X-tudo', 'Whey', 'Salada'],
        },
      ];

    return(
        <Container>
            <HomeHeader/>
            <DietProgress/>

            <Text>Refeições</Text>
            <Button>
                <Button.Icon icon={Plus}/>
                <Button.Title>Nova refeição</Button.Title>
            </Button>

            <SectionList
                sections={sections}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <MealItem title="Almoço" time="12:00" onPress={() => navigation.navigate('mealDetails')}/>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <MealSectionHeader>{title}</MealSectionHeader>
                )}

            />
        </Container>
    )
}