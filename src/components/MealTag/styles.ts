import { Circle } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

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

export const Status = styled(Circle).attrs(({theme})=> ({
    color: theme.COLORS.GREEN_DARK,
    weight: 'fill',
    size: '8px'
}))``;