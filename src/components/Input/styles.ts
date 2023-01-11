import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  margin-bottom: 24px;
`

export const StyledInput = styled(TextInput)`
  width: 100%;

  min-height: 48px;
  max-height: 48px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px;
`

export const LabelInput = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200}
  `}
`