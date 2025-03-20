import { useTheme } from "styled-components/native";
import { Circle } from "phosphor-react-native";

import { Container, FormRadio, Label } from "./styles";

import { Button } from "@components/Button";
import { ButtonVariantProps } from "@components/Button/styles";

type Props = {
    label: string;
    options: {name: string, value: any, variant: ButtonVariantProps}[];
    selectedValue: any;
    onValueChange: (value: any) => void;
}

export function RadioInput({label, options, selectedValue, onValueChange}: Props) {
    const theme = useTheme();
    
    return (
        <Container>
            {label && <Label>{label}</Label>}

            <FormRadio>
                {options.map(option => {
                    const color = option.variant === "success" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
                    return(
                    <Button key={option.name} variant={option.variant} selected={selectedValue === option.value} onPress={() => onValueChange(option.value)}>
                        <Button.Icon icon={Circle} weight="fill" color={color} size="8px"/>
                        <Button.Title>
                            {option.name}
                        </Button.Title>
                    </Button>
                )})}
            </FormRadio>
        </Container>
    )
}