import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;
    
export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 24px;
    padding-top: 40px;
    gap: 9px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Details = styled.View`
    flex: 1;
    justify-content: start;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}

    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}

    margin-bottom: 24px;
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}

    margin-bottom: 8px;
`;