import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  gap: 12px;
`;
  
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  
  text-align: center;
  margin-bottom: 11px;
`;
  
export const StatRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;
