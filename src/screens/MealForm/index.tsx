import { Input } from "@components/Input";
import { Container, FormDate, FormInputs } from "./styles";
import { Button } from "@components/Button";
import { RadioInput } from "@components/RadioInput";

export function MealForm() {
    return (
        <Container>
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

            <Button variant="primary">
                <Button.Title>
                    Cadastrar refeição
                </Button.Title>
            </Button>
        </Container>
    )
}