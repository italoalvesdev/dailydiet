import { CardContainer, Title, Subtitle, CardContainerColorStyles } from "./styles";

interface CardProps {
  title: string | number
  subtitle: string
  color?: CardContainerColorStyles
}

export function Card({ title, subtitle, color = 'DEFAULT' }: CardProps) {
  return (
    <CardContainer color={color}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardContainer>
  )
}