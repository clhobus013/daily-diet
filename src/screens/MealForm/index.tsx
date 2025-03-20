import { Input } from "@components/Input";
import { Container, Content, FormDate, FormInputs } from "./styles";
import { Button } from "@components/Button";
import { RadioInput } from "@components/RadioInput";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";

export function MealForm() {
    const navigation = useNavigation();

    function handleGoMeal(){
        navigation.navigate('mealDetails');
    }

    return (
        <Container>
            <Header/>

            <Content>
                <FormInputs>
                    <Input
                        label="Nome"
                    />
                    <Input
                        label="Descrição"
                        numberOfLines={4}
                        multiline
                        style={{height: 120}}
                        textAlignVertical="top"
                    />
                    <FormDate>
                        <Input
                            label="Data"
                        />
                        <Input
                            label="Hora"
                        />
                    </FormDate>

                    <RadioInput/>
                </FormInputs>

                <Button variant="primary" onPress={handleGoMeal}>
                    <Button.Title>
                        Cadastrar refeição
                    </Button.Title>
                </Button>
            </Content>
        </Container>
    )
}