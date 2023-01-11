import { Dispatch } from "react";
import { ModalProps, View, Modal as ModalBase } from "react-native";

import { Button } from "@components/Button";

import { Message, ButtonsWrapper, ModalCentered, ModalView } from "./styles";

interface ModalComponentProps extends ModalProps {
  message: string
  setVisible: Dispatch<React.SetStateAction<boolean>>
  onRemove: () => void
}

export function Modal({ message, setVisible, onRemove, ...rest }: ModalComponentProps) {
  return (
    <ModalBase animationType="fade" statusBarTranslucent transparent {...rest}>
      <ModalCentered>
        <ModalView style={{ elevation: 5 }}>
          <Message>{message}</Message>

          <ButtonsWrapper>
            <View style={{ flex: 1 }}>
              <Button title="Não" outlined onPress={() => setVisible(false)} />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Button title="Sim, excluir" onPress={onRemove} />
            </View>
          </ButtonsWrapper>
        </ModalView>
      </ModalCentered>
    </ModalBase>
  )
}