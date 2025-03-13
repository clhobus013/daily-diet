import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    height: 37px;
`;

export const User = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border-width: 2px;
    border-color: ${({theme}) => theme.COLORS.GRAY_200};
`;