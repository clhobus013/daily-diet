import { Button } from "@components/Button";
import { Container, Content, Description, Details, Subtitle, Title } from "./styles";
import { MealTag } from "@components/MealTag";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Header } from "@components/Header";

export function MealDetails() {

    const theme = useTheme();

    return (
        <Container>
            <Header/>

            <Content>
                <Details>
                    <Title>Sanduiche</Title>
                    <Description>Sanduiche de pao integral com atum e salda de alface e tomate</Description>

                    <Subtitle>Data e hora</Subtitle>
                    <Description>12/08/2022 as 16:00</Description>

                    <MealTag/>
                </Details>

                <Button>
                    <Button.Icon icon={PencilSimpleLine} />
                    <Button.Title>Editar refeição</Button.Title>
                </Button>

                <Button variant="secondary">
                    <Button.Icon icon={Trash} color={theme.COLORS.GRAY_100}/>
                    <Button.Title>Excluir refeição</Button.Title>
                </Button>
            </Content>
        </Container>
    )
}