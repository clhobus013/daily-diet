import styled, {css} from "styled-components/native";

export const Overlay = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Container = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    ${({theme}) => css` 
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
    text-align: center;
    margin: 32px;
    margin-top: 8px;
`;

export const ButtonsView = styled.View`
    flex-direction: row;
    gap: 12px;
`;