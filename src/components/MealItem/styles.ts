import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

type Props = {
    isWithinDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
    height: 50px;
    width: 100%;
    
    flex-direction: row;
    align-items: center;

    margin-top: 8px;
    
    padding-horizontal: 12px;
    padding-vertical: 14px;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const Time = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;

export const Status = styled.View<Props>`
    height: 14px;
    width: 14px;
    border-radius: 8px;    
    background-color: ${({theme, isWithinDiet}) => isWithinDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};  
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({theme}) => theme.COLORS.GRAY_400};

    margin-horizontal: 12px;
`;

export const MealCard = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;