import { useCallback, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Modal } from "@components/Modal";
import { Loading } from "@components/Loading";

import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealRemoveByName } from "@storage/meal/mealRemoveByName";

import {
  MealContainer,
  MealContent,
  Subtitle,
  MealName,
  DateAndHour,
  DietTag,
  CircleStatusTag,
  DietTagText
} from "./styles";

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false)
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()
  const route = useRoute()

  const { name } = route.params as { name: string }

  const { COLORS } = useTheme()

  function handleEditMeal(name: string) {
    navigation.navigate('edit-meal', { name })
  }

  async function fetchMeal() {
    try {
      setIsLoading(true)

      const storedMeals = await mealsGetAll()

      const meal = storedMeals.find(meal => meal.name === name) ?? {} as MealStorageDTO
      setMeal(meal)

    } catch (error) {
      console.log(error)
      Alert.alert('Refeição', 'Não foi possível carregar a refeição')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleMealRemove(mealName: string) {
    try {
      await mealRemoveByName(mealName)
      navigation.navigate('home')

    } catch (error) {
      console.log(error)
      Alert.alert('Remover refeição', 'Não foi possível remover essa refeição.')
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, [name]))

  return (
    <MealContainer type={meal.diet ? 'PRIMARY' : 'SECONDARY'}>
      <View style={{ padding: 24 }}>
        <Header title="Refeição" showBackButton />
      </View>

      {isLoading ? <Loading /> : (
        <MealContent>
          <MealName>{meal.name}</MealName>
          <Subtitle>{meal.description}</Subtitle>

          <DateAndHour>Data e hora</DateAndHour>
          <Subtitle>{meal.date} às {meal.hour}</Subtitle>

          <DietTag>
            <CircleStatusTag dietStatus={meal.diet} />
            <DietTagText>{meal.diet ? 'dentro da dieta' : 'fora da dieta'}</DietTagText>
          </DietTag>

          <Modal
            message="Deseja realmente excluir o registro da refeição?"
            visible={modalVisible}
            setVisible={setModalVisible}
            onRemove={() => handleMealRemove(meal.name)}
          />

          <Button
            icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
            title="Editar refeição"
            onPress={() => handleEditMeal(meal.name)}
          />
          <Button
            icon={<Trash size={18} color={COLORS.GRAY_100} />}
            title="Excluir refeição"
            style={{ marginTop: 8 }}
            onPress={() => setModalVisible(true)}
            outlined
          />
        </MealContent>
      )}
    </MealContainer>
  )
}