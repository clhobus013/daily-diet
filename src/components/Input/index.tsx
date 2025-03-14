import { TextInputProps } from "react-native";
import { Container, Form, Label } from "./styles";

type InputProps = TextInputProps & {
    label: string
}

export function Input({label, ...rest}: InputProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <Form {...rest}/>
        </Container>
    )
}