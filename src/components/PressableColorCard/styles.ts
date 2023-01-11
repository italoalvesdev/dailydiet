import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from 'phosphor-react-native'

export type ColorCardTypeStyle = 'PRIMARY' | 'SECONDARY'

interface ColorCardContainerProps {
  type: ColorCardTypeStyle
}

export const ColorCardContainer = styled(TouchableOpacity)<ColorCardContainerProps>`
  width: 100%;
  height: 102px;

  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  margin-top: 32px;
  padding: 16px 20px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`
interface IconProps {
  type: ColorCardTypeStyle
}

export const Icon = styled(ArrowUpRight).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<IconProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Subtitle = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`