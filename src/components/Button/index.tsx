import { TextProps, TouchableOpacityProps } from "react-native";
import { Container, StyledIcon, StyledTitle } from "./styles";
import { IconProps as IconPhosphorProps } from "phosphor-react-native";

type ButtonProps = TouchableOpacityProps;

function Button({children}: ButtonProps) {
    return(
        <Container>
            {children}
        </Container>
    )
}

function Title({children}: TextProps) {
    return <StyledTitle>{children}</StyledTitle>
}

type IconProps = {
    icon: React.ComponentType<IconPhosphorProps>;
}

function Icon({icon: Icon}: IconProps) {
    return <StyledIcon as={Icon}/>
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };