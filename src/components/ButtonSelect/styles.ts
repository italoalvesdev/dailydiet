import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonSelectTypeStyles = "PRIMARY" | "SECONDARY";

interface ButtonSelectProps {
  type: ButtonSelectTypeStyles;
  isActive?: boolean;
}

export const ButtonSelectContainer = styled(TouchableOpacity)<ButtonSelectProps>`
  width: 100%;
  height: 50px;

  background-color: ${({ theme, type, isActive }) =>
    type === "PRIMARY" && isActive
      ? theme.COLORS.GREEN_LIGHT 
      : type === 'SECONDARY' && isActive ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};

  border-radius: 6px;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;

  ${({ theme, type, isActive }) => isActive && css`
    border-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

interface IconProps {
  type: ButtonSelectTypeStyles;
}

export const Icon = styled.View<IconProps>`
  width: 8px;
  height: 8px;

  border-radius: 99px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  margin-left: 8px;
  line-height: 18px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
