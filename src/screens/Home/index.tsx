import { SectionList} from "react-native";
import { Container, MealSectionHeader, Text } from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { DietProgress } from "@components/DietProgress";
import { Button } from "@components/Button";
import { MealItem } from "@components/MealItem/intex";

export function Home() {

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

            <Text>Refeicões</Text>
            <Button/>

            <SectionList
                sections={sections}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <MealItem/>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <MealSectionHeader>{title}</MealSectionHeader>
                )}

            />
        </Container>
    )
}