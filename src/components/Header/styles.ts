import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImagesWrapper = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 99px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export type IconColorStyles = "PRIMARY" | "SECONDARY" | "GRAYISH";

interface IconProps {
  type: IconColorStyles;
}

export const Icon = styled(ArrowLeft).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color:
    type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : type === "SECONDARY"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_200,
}))<IconProps>``;

export const Title = styled.Text`
  /* align-self: center; */

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
