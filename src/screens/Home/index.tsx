import { Container } from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { DietProgress } from "@components/DietProgress";

export function Home() {
    return(
        <Container>
            <HomeHeader/>
            <DietProgress/>
        </Container>
    )
}