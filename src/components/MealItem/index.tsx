import { TouchableOpacityProps } from "react-native";

import { MealItemContainer, MealTime, Title, Status, MealItemStatusStyles } from "./styles";

interface MealItemProps extends TouchableOpacityProps {
  title: string
  mealTime: string
  status: MealItemStatusStyles
}

export function MealItem({ title, mealTime, status, ...rest }: MealItemProps) {
  return (
    <MealItemContainer {...rest}>
      <MealTime>{mealTime}</MealTime>
      <Title>{title}</Title>
      <Status status={status} />
    </MealItemContainer>
  )
}