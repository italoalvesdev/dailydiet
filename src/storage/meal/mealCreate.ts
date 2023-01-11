import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { AppError } from "@utils/AppError";

import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()

    const mealAlreadyExists = storedMeals.filter(meal => meal.name === newMeal.name)
    
    if (mealAlreadyExists.length > 0) {
      throw new AppError('Essa refeição já está adicionada na sua dieta.')
    }

    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}