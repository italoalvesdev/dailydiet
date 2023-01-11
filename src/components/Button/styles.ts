import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface ButtonProps {
  outlined: boolean
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;

  padding: 16px 24px;

  border-radius: 6px;

  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};


  ${({ theme, outlined }) => outlined && css`
    border-color: ${theme.COLORS.GRAY_100};
    background-color: transparent;
  `}


  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<ButtonProps>`
  line-height: 18px;

  ${({ theme, outlined }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ outlined ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
  `}
`