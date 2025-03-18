import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100px;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT}
    justify-content: center;
    align-items: center;
    position: relative;

    margin-vertical: 40px;

    border-radius: 8px;
`;

export const Progress = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`;

export const IconButton = styled(TouchableOpacity)`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Icon = styled(ArrowUpRight)`
    color: ${({theme}) => theme.COLORS.GREEN_DARK};
    width: 24px;
    height: 24px; 
`;