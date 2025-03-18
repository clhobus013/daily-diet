import { Container, StatRow, Title } from "./styles";
import { StatCard } from "@components/StatCard";


export function Statistics() {
  return (
    <Container>
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
    </Container>
  );
}
