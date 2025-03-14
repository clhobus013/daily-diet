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

export const Form = styled.TextInput`
    padding: 14px;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_500};

    ${({theme}) => css` 
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;