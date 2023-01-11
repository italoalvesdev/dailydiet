import { TouchableOpacityProps } from "react-native";

import { ButtonSelectContainer, Title, Icon, ButtonSelectTypeStyles } from "./styles";

interface ButtonSelectProps extends TouchableOpacityProps {
  title: string
  isActive?: boolean
  type?: ButtonSelectTypeStyles
}

export function ButtonSelect({title, isActive = false, type = 'PRIMARY', ...rest }: ButtonSelectProps) {
  return (
    <ButtonSelectContainer type={type} isActive={isActive} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
    </ButtonSelectContainer>
  )
}