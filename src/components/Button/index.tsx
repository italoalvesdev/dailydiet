import { TouchableOpacityProps, View } from "react-native";


import { ButtonContainer, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  outlined?: boolean
  icon?: JSX.Element
}

export function Button({ icon, title, outlined = false, ...rest }: ButtonProps) {
  return (
    <ButtonContainer outlined={outlined} {...rest}>
      {icon && <View style={{ marginRight: 12 }}>{icon}</View>}
      <Title outlined={outlined}>{title}</Title>
    </ButtonContainer>
  )
}