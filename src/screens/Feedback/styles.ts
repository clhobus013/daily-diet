import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center; 
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GREEN_DARK};
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