import { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { Card } from "@components/Card";
import { Header } from "@components/Header";

import { mealsGetAll } from "@storage/meal/mealsGetAll";

import { 
  GeneralStatistics, 
  StatisticsHeader, 
  StatisticsTitle, 
  StatisticsSubtitle, 
  StatisticsContainer, 
  GeneralStatisticsTitle, 
  ColorCardsWrapper, 
} from "./styles";

interface RouteParams {
    totalMeals: number
    totalDietMeals: number
    totalNotDietMeals: number
    totalConsecutiveDietMeals: number
    percentDietMeals: number
}

export function Statistics() {
  const route = useRoute()

  const { totalMeals, totalDietMeals, totalNotDietMeals, totalConsecutiveDietMeals, percentDietMeals } = route.params as RouteParams

  const dietStatus = Math.round(percentDietMeals) > 50 ? 'PRIMARY' : 'SECONDARY'

  return (
    <StatisticsContainer type={dietStatus}>
      <StatisticsHeader>
        <Header iconColor={dietStatus} showBackButton />

        <StatisticsTitle>{isNaN(percentDietMeals) ? '0' : percentDietMeals}%</StatisticsTitle>
        <StatisticsSubtitle>das refeições dentro da dieta</StatisticsSubtitle>
      </StatisticsHeader>

      <GeneralStatistics>
        <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>

        <Card title={totalConsecutiveDietMeals} subtitle="melhor sequência de pratos dentro da dieta" />
        <Card title={totalMeals} subtitle="refeições registradas" />

        <ColorCardsWrapper>
          <View style={{ flex: 1, marginRight: 12 }}>
            <Card title={totalDietMeals} subtitle="refeições dentro da dieta" color="PRIMARY" />
          </View>
          <View style={{ flex: 1 }}>
            <Card title={totalNotDietMeals} subtitle="refeições fora da dieta"  color="SECONDARY" />
          </View>
        </ColorCardsWrapper>
      </GeneralStatistics>
    </StatisticsContainer>
  )
}