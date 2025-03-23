import { TouchableOpacityProps } from "react-native";
import { Container, Label, Value } from "./styles";

type Props = TouchableOpacityProps & {
    label: string;
    value: string;
}

export function DateTimeButton({ label, value, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Container>
    )
} 