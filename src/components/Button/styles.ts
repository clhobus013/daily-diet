import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    height: 50px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const Icon = styled(Plus)`
    height: 18px;
    width: 18px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 12px;
`;