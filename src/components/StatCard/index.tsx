import { ButtonVariantProps } from "@components/Button/styles";
import { Card, Description, Title } from "./styles";

type Props = {
    title: string;
    description: string;
    variant?: ButtonVariantProps;
}

export function StatCard({ title, description, variant='primary' }: Props) {
    return (
         <Card variant={variant}>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </Card>
    )
}