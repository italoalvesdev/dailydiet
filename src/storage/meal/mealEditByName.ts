import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { AppError } from "@utils/AppError";

import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealEditByName(originalName: string, mealEdited: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()

    console.log('storedMeals', storedMeals)

    const mealsEditedAlreadyExists = storedMeals.filter(meal => meal.name === mealEdited.name)

    console.log('mealsEditedAlreadyExists', mealsEditedAlreadyExists)

    if (mealsEditedAlreadyExists.length > 0) {
      throw new AppError('Essa refeição já está adicionada na sua dieta.')
    }

    const mealsEdited = storedMeals.filter(meal => {
      if (meal.name === originalName) {
        meal.name = mealEdited.name,
        meal.description = mealEdited.description,
        meal.date = mealEdited.date
        meal.hour = mealEdited.hour
        meal.diet = mealEdited.diet
      }

      return meal
    })


    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsEdited))
  } catch (error) {
    throw error
  }
}