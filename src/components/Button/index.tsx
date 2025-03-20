import { TextProps, TouchableOpacityProps } from "react-native";
import { ButtonVariantProps, Container, StyledIcon, StyledTitle } from "./styles";
import { IconProps as IconPhosphorProps } from "phosphor-react-native";
import { createContext, useContext } from "react";

type ButtonProps = TouchableOpacityProps & {
    variant?: ButtonVariantProps;
    selected?: boolean;
};

const ButtonVariantContext = createContext<ButtonVariantProps>('primary');

function Button({variant = 'primary', selected = false, children, ...rest}: ButtonProps) {
    return(
        <ButtonVariantContext.Provider value={variant}>
            <Container {...rest} variant={variant} selected={selected}>
                {children}
            </Container>
        </ButtonVariantContext.Provider>
    )
}

type TitleProps = TextProps & {
    variant?: ButtonVariantProps;
}

function Title({ children }: TitleProps) {
    const variant = useContext(ButtonVariantContext);
    return <StyledTitle variant={variant}>{children}</StyledTitle>;
}

type IconProps = IconPhosphorProps & {
    icon: React.ComponentType<IconPhosphorProps>;
}

function Icon({ icon: Icon, ...rest }: IconProps) {
    return <StyledIcon as={Icon} {...rest}/>;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };