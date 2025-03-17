import { useTheme } from "styled-components/native";
import { Circle } from "phosphor-react-native";
import { Container, FormRadio, Label } from "./styles";

import { Button } from "@components/Button";

export function RadioInput() {

    const theme = useTheme();
    return (
        <Container>
            <Label>Está dentro da dieta?</Label>

            <FormRadio>
                <Button variant="success">
                    <Button.Icon icon={Circle} weight="fill" color={theme.COLORS.GREEN_DARK} size="8px"/>
                    <Button.Title>
                        Sim
                    </Button.Title>
                </Button>

                <Button variant="error">
                    <Button.Icon icon={Circle} weight="fill" color={theme.COLORS.RED_DARK} size="8px"/>
                    <Button.Title>
                        Não
                    </Button.Title>
                </Button>
            </FormRadio>
        </Container>
    )
}