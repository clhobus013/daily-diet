import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    margin-bottom: 24px;
`;

export const Label = styled.Text`
    ${({theme}) => css` 
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-bottom: 4px;
`;

export const Value = styled.Text`
    padding: 14px;
    border-radius: 6px;
    border-width: 1px;

    ${({theme}) => css` 
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        border-color: ${theme.COLORS.GRAY_500};
    `}
`; 