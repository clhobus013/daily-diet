import { ButtonVariantProps } from "@components/Button/styles";
import styled, {css} from "styled-components/native";

type Props = {
    variant: ButtonVariantProps;
}

export const Card = styled.View<Props>`
    flex: 1;
    align-items: center;

    padding: 16px;
    
    border-radius: 8px;
    background-color: ${({variant, theme}) => {
        switch (variant) {
            case 'success':
                return theme.COLORS.GREEN_LIGHT;

            case 'error':
                return theme.COLORS.RED_LIGHT;
        
            default:
                return theme.COLORS.GRAY_600;
        }
    }};
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
`;

export const Description = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    text-align: center;
`;