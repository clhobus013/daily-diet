import styled, {css} from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 24px;
`;

export const FormRadio = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 8px;
`;

export const Label = styled.Text`
    ${({theme}) => css` 
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}

    margin-bottom: 4px;
`;