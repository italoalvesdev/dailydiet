import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface MealContainerProps {
  type: "PRIMARY" | "SECONDARY";
}

export const MealContainer = styled(SafeAreaView)<MealContainerProps>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const MealContent = styled.View`
  flex: 1;

  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const DateAndHour = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DietTag = styled.View`
  width: 144px;
  height: 34px;

  padding: 8px 16px;
  border-radius: 1000px;
  margin-top: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: auto;
`;

interface CircleStatusTagProps {
  dietStatus: boolean;
}

export const CircleStatusTag = styled.View<CircleStatusTagProps>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, dietStatus }) =>
    dietStatus ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 99px;

  margin-right: 8px;
`;

export const DietTagText = styled.Text`
  line-height: 18px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
