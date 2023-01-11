import { TouchableOpacityProps } from "react-native";

import { ColorCardContainer, Icon, Subtitle, Title, ColorCardTypeStyle } from "./styles";

interface ColorCardProps extends TouchableOpacityProps {
  title: string
  subtitle?: string
  type?: ColorCardTypeStyle,
}

export function PressableColorCard({ title, subtitle, type = 'PRIMARY', ...rest }: ColorCardProps) {
  return (
    <ColorCardContainer type={type} {...rest}>
      <Icon type={type} />
      
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ColorCardContainer>
  )
}