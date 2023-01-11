import { MealStorageDTO } from "@storage/meal/MealStorageDTO"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      statistics: {
        totalMeals: number,
        totalDietMeals: number,
        totalNotDietMeals: number
        totalConsecutiveDietMeals: number
        percentDietMeals: number
      },
      'new-meal': undefined
      meal: {
        name: string
      }
      'edit-meal': {
        name: string
      }
      'success-diet': undefined
      'fail-diet': undefined
    }
  }
}