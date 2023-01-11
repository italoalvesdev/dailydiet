import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface StatisticsContainerProps {
  type: 'PRIMARY' | 'SECONDARY';
}

export const StatisticsContainer = styled(SafeAreaView)<StatisticsContainerProps>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const StatisticsHeader = styled.View`
  padding: 24px 24px 34px 24px;

  align-items: center;
  justify-content: center;
`;

export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatisticsSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const GeneralStatistics = styled.View`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;

export const GeneralStatisticsTitle = styled.Text`
  text-align: center;

  margin-bottom: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ColorCardsWrapper = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;
