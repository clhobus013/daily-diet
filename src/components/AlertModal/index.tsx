import { Modal } from "react-native";
import { ButtonsView, Container, Overlay, Title } from "./styles";
import { Button } from "@components/Button";

export function AlertModal() {
    return (
        <Modal visible={true} transparent>
            <Overlay>
            <Container>
                <Title>Deseja realmente excluir o registro da refeição ?</Title>
                <ButtonsView>
                    <Button variant="secondary">
                        <Button.Title>Cancelar</Button.Title>
                    </Button>
                    <Button>
                        <Button.Title>Sim, excluir</Button.Title>
                    </Button> 
                </ButtonsView>
            </Container>
            </Overlay>
        </Modal>
    )
}