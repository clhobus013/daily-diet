import styled, {css} from "styled-components/native";

type Props = {
    isWithinDiet: boolean;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center; 
    padding: 32px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<Props>`
    ${({isWithinDiet, theme}) => css`
        color: ${isWithinDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: center;
`;

export const Bold = styled.Text`
${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;

export const Image = styled.Image`
    height: 288px;
    margin: 32px;
`;