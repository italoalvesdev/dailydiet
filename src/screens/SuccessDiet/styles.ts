import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const SuccessDietContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme })  => theme.COLORS.GRAY_700};

  padding: 32px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const StrongText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const StyledImage = styled.Image`
  width: 224px;
  height: 288px;

  margin-top: 40px;
  margin-bottom: 48px;
`