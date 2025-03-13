import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

    margin-bottom: 8px;
`;

export const MealSectionHeader = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
    margin-top: 32px;
`;
