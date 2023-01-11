import { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { ButtonSelect } from "@components/ButtonSelect";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealEditByName } from "@storage/meal/mealEditByName";

import { AppError } from "@utils/AppError";

import {
  ButtonsLabel,
  ButtonsWrapper,
  EditMealContainer,
  EditMealContent,
  InputsWrapper
} from "./styles";

export function EditMeal() {
  const [diet, setDiet] = useState<boolean | null>(null)
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()
  const route = useRoute()

  const { name } = route.params as { name: string }

  async function fetchMeal() {
    try {
      setIsLoading(true)

      const storedMeals = await mealsGetAll()

      const meal = storedMeals.find(meal => meal.name === name) ?? {} as MealStorageDTO
      setMeal(meal)
      setDiet(meal.diet)

    } catch (error) {
      console.log(error)
      Alert.alert('Editar refeição', 'Não foi possível carregar a refeição')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleEditMeal() {
    try {
      if (diet === null) {
        return Alert.alert('Editar refeição', 'Selecione se está dentro ou não da sua dieta.')
      }

      await mealEditByName(name, { ...meal, diet })

      navigation.navigate('meal', { name: meal.name })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar Refeição', error.message)
      } else {
        Alert.alert('Editar Refeição', 'Não foi possível editar essa refeição.')
        console.log(error)
      }
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, []))

  return (
    <EditMealContainer>
      <View style={{ padding: 24 }}>
        <Header title="Editar refeição" showBackButton />
      </View>

      {isLoading ? <Loading /> : (
        <EditMealContent>
          <Input label="Nome" defaultValue={meal.name} onChangeText={(name) => setMeal({ ...meal, name })} />
          <Input
            label="Descrição"
            defaultValue={meal.description}
            onChangeText={(description) => setMeal({ ...meal, description })}
            style={{ minHeight: 120, maxHeight: 120, textAlignVertical: 'top' }}
            multiline
          />
          <InputsWrapper>
            <View style={{ flex: 1, marginRight: 20 }}>
              <Input label="Data" defaultValue={meal.date} onChangeText={(date) => setMeal({ ...meal, date })} />
            </View>
            <View style={{ flex: 1 }}>
              <Input label="Hora" defaultValue={meal.hour} onChangeText={(hour) => setMeal({ ...meal, hour })} />
            </View>
          </InputsWrapper>

          <ButtonsLabel>Está dentro da dieta?</ButtonsLabel>

          <ButtonsWrapper>
            <View style={{ flex: 1, marginRight: 8 }}>
              <ButtonSelect title="Sim" isActive={diet || false} onPress={() => setDiet(true)} />
            </View>
            <View style={{ flex: 1 }}>
              <ButtonSelect title="Não" type="SECONDARY" isActive={diet === null ? false : !diet} onPress={() => setDiet(false)} />
            </View>
          </ButtonsWrapper>

          <Button title="Salvar alterações" onPress={handleEditMeal} />
        </EditMealContent>
      )}


    </EditMealContainer>
  )
}