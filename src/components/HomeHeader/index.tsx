import { Container, Logo, User } from "./styles";

export function HomeHeader() {
    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />
            <User source={{uri: 'https://github.com/clhobus013.png'}} />
        </Container>
    )
}