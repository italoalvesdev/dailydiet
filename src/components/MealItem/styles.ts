import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const MealItemContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 16px;

  margin-bottom: 12px;

  flex-direction: row;
  align-items: center;
`;

export const MealTime = styled.Text`
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};

  padding-right: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled.Text`
  flex: 1;

  padding-left: 12px;
  line-height: 20px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export type MealItemStatusStyles = "PRIMARY" | "SECONDARY";

interface StatusProps {
  status: MealItemStatusStyles;
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 99px;

  background-color: ${({ theme, status }) =>
    status === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
