import styled, {css} from "styled-components/native";

export const Container = styled.View`
    position: relative;
    padding: 24px;
    padding-top: 40px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
    width: 100%;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;
`;

export const IconButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 24px;
`;