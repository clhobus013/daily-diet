import { Modal } from "react-native";
import { ButtonsView, Container, Overlay, Title } from "./styles";
import { Button } from "@components/Button";

type Props = {
    visible: boolean;
    onSuccess: () => void;
    onCancel: () => void;
}

export function AlertModal({visible, onSuccess, onCancel}: Props) {
    return (
        <Modal visible={visible} transparent style={{backgroundColor: 'blue'}}>
            <Overlay>
            <Container>
                <Title>Deseja realmente excluir o registro da refeição ?</Title>
                <ButtonsView>
                    <Button variant="secondary" onPress={onCancel}>
                        <Button.Title>Cancelar</Button.Title>
                    </Button>
                    <Button onPress={onSuccess}>
                        <Button.Title>Sim, excluir</Button.Title>
                    </Button> 
                </ButtonsView>
            </Container>
            </Overlay>
        </Modal>
    )
}