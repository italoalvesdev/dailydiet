import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { NewMeal } from '@screens/NewMeal'
import { SuccessDiet } from '@screens/SuccessDiet'
import { FailDiet } from "@screens/FailDiet";
import { Meal } from "@screens/Meal";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit-meal" component={EditMeal} />
      <Screen name="success-diet" component={SuccessDiet} />
      <Screen name="fail-diet" component={FailDiet} />
    </Navigator>
  )
}