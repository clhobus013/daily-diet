import { IconProps } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonVariantProps = 'primary' | 'secondary' | 'success' | 'error';

type Props = {
    variant: ButtonVariantProps;
    selected: boolean
}

export const Container = styled(TouchableOpacity)<{variant: Props['variant'], selected: Props['selected']}>`
    flex: 1;
    max-height: 50px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-horizontal: 24px;
    padding-vertical: 16px;

    ${({variant, selected, theme}) => {
        switch(variant) {
            case 'primary':
                return css`
                    background-color: ${theme.COLORS.GRAY_200};
                `;
            case 'secondary':
                return css`
                    background-color: ${theme.COLORS.WHITE};
                    border-color: ${theme.COLORS.GRAY_100};
                    border-width: 1px;
                `;
            case 'success':
                if(selected) {
                    return css`
                        background-color: ${theme.COLORS.GREEN_LIGHT};
                        border-color: ${theme.COLORS.GREEN_DARK};
                        border-width: 1px;
                    `;
                }

                return css`
                    background-color: ${theme.COLORS.GRAY_600};
                `;
            case 'error':
                if (selected) {
                    return css`
                        background-color: ${theme.COLORS.RED_LIGHT};
                        border-color: ${theme.COLORS.RED_DARK};
                        border-width: 1px;
                    `; 
                }
                return css`
                    background-color: ${theme.COLORS.GRAY_600};
                `;
        }
    }}
`;

export const StyledTitle = styled.Text<{variant: Props['variant']}>`
    ${({variant, theme}) => css`
        color: ${variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const StyledIcon = styled.View<IconProps & {color?: string, size?: string|number}>`
    height: ${({size}) => size || '18px'};
    width: ${({size}) => size || '18px'};
    color: ${({color, theme}) => color || theme.COLORS.WHITE};
    margin: ${({size}) => size || '12px'};
`;