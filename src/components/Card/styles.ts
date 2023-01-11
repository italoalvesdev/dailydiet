import styled, { css } from "styled-components/native";

export type CardContainerColorStyles = "DEFAULT" | "PRIMARY" | "SECONDARY";

interface CardContainerProps {
  color: CardContainerColorStyles;
}

export const CardContainer = styled.View<CardContainerProps>`
  width: 100%;
  height: 89px;

  background-color: ${({ theme, color }) =>
    color === "DEFAULT"
      ? theme.COLORS.GRAY_600
      : color === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
