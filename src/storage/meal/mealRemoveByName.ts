import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealsGetAll } from './mealsGetAll'
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealRemoveByName(mealName: string) {
  try {
    const storedMeals = await mealsGetAll()
    const meals = storedMeals.filter(meals => meals.name !== mealName)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
  } catch (error) {
    throw error
  }
}