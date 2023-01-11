import { Alert, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ButtonSelect } from "@components/ButtonSelect";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

import { mealCreate } from "@storage/meal/mealCreate";

import { ButtonsLabel, ButtonsWrapper, InputsWrapper, NewMealContainer, NewMealForm } from "./styles";
import { AppError } from "@utils/AppError";

interface MealProps {
  name: string
  description: string
  date: string
  hour: string
}

export function NewMeal() {
  const [diet, setDiet] = useState<boolean | null>(null)
  const [meal, setMeal] = useState<MealProps>({
    name: '',
    description: '',
    date: '',
    hour: ''
  })

  const navigation = useNavigation()

  async function handleNewMeal() {
    try {
      if (meal.date.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Informe a data da refeição.')
      }

      if (diet === null) {
        return Alert.alert('Nova Refeição', 'Informe se está dentro da dieta.')
      }

      await mealCreate({ ...meal, diet })
      navigation.navigate(diet ? 'success-diet' : 'fail-diet')
      
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Refeição', error.message)
      } else {
        Alert.alert('Novo Refeição', 'Não foi possível criar uma nova refeição.')
        console.log(error)
      }
    }
  }


  return (
    <NewMealContainer>
      <View style={{ padding: 24 }}>
        <Header title="Nova refeição" showBackButton />
      </View>

      <NewMealForm>
        <Input label="Nome" onChangeText={(name) => setMeal({ ...meal, name })} />
        <Input
          label="Descrição"
          onChangeText={(description) => setMeal({ ...meal, description })}
          style={{ minHeight: 120, maxHeight: 120, textAlignVertical: 'top' }}
          multiline
        />

        <InputsWrapper>
          <View style={{ flex: 1, marginRight: 20 }}>
            <Input label="Data" onChangeText={(date) => setMeal({ ...meal, date })} />
          </View>
          <View style={{ flex: 1 }}>
            <Input label="Hora" onChangeText={(hour) => setMeal({ ...meal, hour })} />
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

        <Button title="Cadastrar refeição" onPress={handleNewMeal} />
      </NewMealForm>
    </NewMealContainer>
  )
}