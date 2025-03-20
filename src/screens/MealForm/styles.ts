import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const Content = styled.View`
    flex: 1;
    padding: 24px;
    justify-content: space-between;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const FormInputs = styled.View`
    justify-content: start;
`;

export const FormDate = styled.View`
    flex-direction: row;
    gap: 20px;
`;