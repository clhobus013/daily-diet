import { Circle, IconProps } from "phosphor-react-native";
import { ComponentType } from "react";
import styled, {css} from "styled-components/native";

type Props = {
    isWithinDiet: boolean;
}

export const Container = styled.View`
    width: auto;
    padding-horizontal: 16px;
    padding-vertical: 8px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    align-self: flex-start;

    background-color: ${({theme}) => theme.COLORS.GRAY_600}
    border-radius: 1000px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const Status = styled<ComponentType<IconProps & Props>>(Circle).attrs(({theme, isWithinDiet}) => ({
    color: isWithinDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: 'fill',
    size: '8px'
}))``;