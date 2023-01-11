import styled, { css } from "styled-components/native";

export const ModalCentered = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
`

export const ModalView = styled.View`
  width: 327px;
  height: 192px;

  padding: 40px 24px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 8px;
  
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const ButtonsWrapper = styled.View`
  width: 100%;

  margin-top: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`