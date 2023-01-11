import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const NewMealContainer = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const NewMealForm = styled.View`
  flex: 1;

  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;

export const InputsWrapper = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const ButtonsLabel = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const ButtonsWrapper = styled.View`
  width: 100%;

  margin-bottom: auto;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;
