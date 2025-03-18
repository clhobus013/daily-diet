import { Container, Content, Header, IconButton, ScoreDescription, ScoreValue, StatRow, Title } from "./styles";
import { StatCard } from "@components/StatCard";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


export function Statistics() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <IconButton/>
        </TouchableOpacity>
        <ScoreValue>90%</ScoreValue>
        <ScoreDescription>das refeiçoes dentro da dieta</ScoreDescription>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <StatRow>
            <StatCard/>
        </StatRow>
        <StatRow>
            <StatCard/>
        </StatRow>
        <StatRow>
            <StatCard/>
            <StatCard/>
        </StatRow>
      </Content>
    </Container>
  );
}
