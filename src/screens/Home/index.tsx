import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { PressableColorCard } from "@components/PressableColorCard";
import { MealItem } from "@components/MealItem";
import { SectionListEmpty } from "@components/SectionListEmpty";
import { Loading } from "@components/Loading";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

import { HomeContainer, SectionListTitle, SectionText } from "./styles";

interface MealsGroupByDateProps {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState<MealsGroupByDateProps[]>([])

  const [totalMeals, setTotalMeals] = useState(0)
  const [totalDietMeals, setTotalDietMeals] = useState(0)
  const [totalNotDietMeals, setTotalNotDietMeals] = useState(0)
  const [totalConsecutiveDietMeals, setTotalConsecutiveDietMeals] = useState(0)

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const percentDietMeals = Number(((100 * totalDietMeals) / totalMeals).toFixed(1))

  function handleViewStatistics() {
    navigation.navigate('statistics', { totalMeals, totalDietMeals, totalNotDietMeals, totalConsecutiveDietMeals, percentDietMeals })
  }

  function handleNewMeal() {
    navigation.navigate('new-meal')
  }

  function handleViewMeal(name: string) {
    navigation.navigate('meal', { name })
  }

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const storedMeals = await mealsGetAll()

      const mealsFilteredByDate = storedMeals.reduce((meals, value) => {
        const { date } = value

        if (!meals[date]) {
          meals[date] = []
        }

        meals[date].push(value)
        return meals
      }, {} as Record<string, MealStorageDTO[]>)

      const mealsGroupByDate = Object.keys(mealsFilteredByDate).map((date) => {
        return {
          title: date,
          data: mealsFilteredByDate[date]
        }
      })

      setMeals(mealsGroupByDate)

      const dietMeals = storedMeals.filter(meal => meal.diet === true)
      const notDietMeals = storedMeals.filter(meal => meal.diet === false)

      setTotalMeals(storedMeals.length)
      setTotalDietMeals(dietMeals.length)
      setTotalNotDietMeals(notDietMeals.length)

      let max = 0
      let count = 0
      storedMeals.forEach(data => {
        if (data.diet) {
          count++
        } else {
          count = 0
        }

        if (count > max) {
          max = count
        }

        setTotalConsecutiveDietMeals(max)
      })


    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições')
    } finally {
      setIsLoading(false)
    }
  }


  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <HomeContainer>
      <Header />
      <PressableColorCard
        type={Math.round(percentDietMeals) > 50 ? 'PRIMARY' : 'SECONDARY'}
        title={`${isNaN(percentDietMeals) ? '0' : percentDietMeals}%`}
        subtitle="das refeições dentro da dieta"
        onPress={handleViewStatistics}
      />

      <SectionText>Refeições</SectionText>
      <Button icon={<Plus size={20} color={COLORS.WHITE} />} title="Nova Refeição" onPress={handleNewMeal} />

      {isLoading ? <Loading /> : (
        <SectionList style={{ marginTop: 32 }}
          sections={meals}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <MealItem
              title={item.name}
              mealTime={item.hour}
              status={item.diet ? 'PRIMARY' : 'SECONDARY'}
              onPress={() => handleViewMeal(item.name)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SectionListTitle>{title}</SectionListTitle>
          )}
          ListEmptyComponent={() => <SectionListEmpty message="Que tal cadastrar a primeira refeição?" />}
        />
      )}

    </HomeContainer>
  )
}