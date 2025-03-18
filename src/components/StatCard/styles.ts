import styled, {css} from "styled-components/native";

export const Card = styled.View`
    flex: 1;
    align-items: center;

    padding: 16px;
    
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
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
`;