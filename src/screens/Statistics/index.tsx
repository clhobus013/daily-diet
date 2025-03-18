import { Container, Content, Header, IconButton, ScoreDescription, ScoreValue, StatRow, Title } from "./styles";
import { StatCard } from "@components/StatCard";
import { TouchableOpacity } from "react-native";


export function Statistics() {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
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
