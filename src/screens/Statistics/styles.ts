import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  progress: number;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding-top: 20px;
  background-color: ${({progress, theme}) => progress > 50 ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const IconButton = styled(ArrowLeft)<Props>`
  color: ${({progress, theme}) => progress > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ScoreValue = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
`;

export const ScoreDescription = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;

export const Content = styled.View`
  flex: 1;
  gap: 12px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
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
