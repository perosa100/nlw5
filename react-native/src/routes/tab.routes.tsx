import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { PlantSelect } from '../pages/PlantSelect'
import MyPlants from './../pages/MyPlants/index'

const AppTab = createBottomTabNavigator()
const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: '#32B768',
        inactiveBackgroundColor: '#FFFFFF',
        labelPosition: 'beside-icon',
        style: {
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20
        }
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          )
        }}
      />

      <AppTab.Screen
        name="Minhas Planta"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes
